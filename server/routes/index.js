const express = require('express');
const router = express.Router();
const request = require('request');

const DATA_ROWS = 1;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET IATI Activity data. */
router.get('/api/data', function(req, res, next) {
  const url = "https://datastore.iati.cloud/api/v2/activity/?indent=true&q.op=OR&q=iati_identifier%3A*&rows="+DATA_ROWS+"&fl=*";
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // console log all the keys in the body
      // json parse the body
      const activities = JSON.parse(body).response.docs;
      
      const data = [];
      for (const activity of activities) {
        // create the new object and add t he base fields
        const newObject = {
          iati_identifier: activity.iati_identifier,
          hierarchy: activity.hierarchy,
          activity_status: activity.activity_status,
          default_currency: activity.default_currency,
          default_language: activity.default_language,
          reporting_org: {
            ref: activity.reporting_org_ref,
            narrative: activity.reporting_org_narrative,
            type: activity.reporting_org_type_code,
          },
          title: activity.title_narrative,
          description: activity.description_narrative,
          participating_orgs: [],
          activity_date: [],
          transactions: [],
          recipient_country: [],
          recipient_region: [],
        };

        // clear single value arrays
        if (newObject.reporting_org.narrative) newObject.reporting_org.narrative = newObject.reporting_org.narrative[0];
        if (newObject.title) newObject.title = newObject.title[0];
        if (newObject.description) newObject.description = newObject.description[0];
        // participating orgs
        try {
          for (let i = 0; i < activity.participating_org_type.length; i++) {
            const porg = {
              type: activity.participating_org_type[i],
              ref: activity.participating_org_ref[i],
              narrative: activity.participating_org_narrative[i],
              role: activity.participating_org_role[i],
            };
            newObject.participating_orgs.push(porg);
          }
        } catch {
          // do nothing
        }

        // activity date
        try {
          for (let i = 0; i < activity.activity_date_iso_date.length; i++) {
            const adate = {
              iso_date: activity.activity_date_iso_date[i],
              ref: activity.activity_date_type[i],
            };
            newObject.activity_date.push(adate);
          }
        } catch {
          // do nothing
        }

        // transactions
        try {
          for (let i = 0; i < activity.transaction_value.length; i++) {
            const transaction = {
              value: activity.transaction_value[i],
              date: activity.transaction_date_iso_date[i],
              ref: activity.transaction_type[i],
            };
            newObject.transactions.push(transaction);
          }
        } catch {
          // do nothing
        }

        // recipient country
        try {
          for (let i = 0; i < activity.recipient_country_code.length; i++) {
            const country = {
              code: activity.recipient_country_code[i],
              percentage: activity.recipient_country_percentage[i],
            };
            newObject.recipient_country.push(country);
          }
        } catch {
          // do nothing
        }

        // recipient region
        try {
          for (let i = 0; i < activity.recipient_region_code.length; i++) {
            const region = {
              code: activity.recipient_region_code[i],
              percentage: activity.recipient_region_percentage[i],
            };
            newObject.recipient_region.push(region);
          }
        } catch {
          // do nothing
        }

        data.push(newObject);
      }
      res.set('Access-Control-Allow-Origin', 'http://localhost:3000')
      res.send(data);
    }
  });
});

module.exports = router;
