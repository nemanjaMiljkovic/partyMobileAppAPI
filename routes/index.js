const express = require('express');
const router = express.Router();
const axios = require('axios');

const mapIds = (club) => club.id;
const clubs = [{
                  name: 'ko.dusseldorfprvi',
                  id: '553152884828696'
                },
                {
                  name: 'ambisclub',
                  id: '256874334466648'
                },
                {
                  name: 'zurke.nl',
                  id: '436989709685032'
                },
                {
                  name: 'Kings-Club-Amsterdam-693548040821168',
                  id: '693548040821168'
              }],
      APP_ID = '988983981238085',
      options = 'fields=id,name,picture,events.limit(3),phone,website',
      APP_SECRET = '4f1b9cb9f7f12456c1fb774eaea87c81',
      API_URL = `https://graph.facebook.com/?ids=${clubs.map(mapIds).join(',')}&${options}&access_token=${APP_ID}|${APP_SECRET}`;


router.get('/', function(req, res, next) {
  axios.get(API_URL).then((apid) => res.send(apid.data)).catch((err) => console.log(err));
});

module.exports = router;
