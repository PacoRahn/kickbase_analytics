const axios = require('axios');

const TEAMS = {
    2: 'Bayern',
    3: 'Dortmund',
    4: 'Frankfurt',
    5: 'Freiburg',
    7: 'Leverkusen',
    9: 'Stuttgart',
    10: 'Bremen',
    11: 'Wolfsburg',
    13: 'Augsburg',
    14: 'Hoffenheim',
    15: 'Mgladbach',
    18: 'Mainz',
    24: 'Bochum',
    39: 'St. Pauli',
    40: 'Union Berlin',
    43: 'Leipzig',
    50: 'Heidenheim',
    51: 'Kiel'
  };
const TEAMS_LIST_PLACE = {
    1: 'Bayern',
2: 'Dortmund',
3: 'Frankfurt',
4: 'Freiburg',
5: 'Leverkusen',
6: 'Stuttgart',
7: 'Bremen',
8: 'Wolfsburg',
9: 'Augsburg',
10: 'Hoffenheim',
11: 'Mgladbach',
12: 'Mainz',
13: 'Bochum',
14: 'St. Pauli',
15: 'Union Berlin',
16: 'Leipzig',
17: 'Heidenheim',
18: 'Kiel'
}

const PLAYER_ATTRIBUTES = [
    'id',               'teamId',
    'teamName',         'teamSymbol',
    'firstName',        'lastName',
    'profile',          'profileBig',
    'status',           'position',
    'number',           'averagePoints',
    'totalPoints',      'marketValue',
    'marketValueTrend'
  ]

const fetchData = async () => {
    console.log("fetching data");
    try {
      const responses = [];
  
      for (let i in TEAMS) {
        responses.push(axios.get(`https://api.kickbase.com/competition/teams/${i}/players`));
      }
  
      const result = await Promise.all(responses);
  
      // Map the responses to their data
      const kickbaseData = result.map(response => response.data);
      const teamId = Object.keys(TEAMS_LIST_PLACE).find(key => TEAMS_LIST_PLACE[key] === 'Frankfurt');
      const player = kickbaseData[teamId-1].p[1];
      console.log(PLAYER_ATTRIBUTES);
      
      return {
        kickbase: kickbaseData,
      };
    } catch (error) {
      console.error('Error fetching data from APIs:', error);
      throw new Error('Failed to fetch data from APIs');
    }
  };
  module.exports = fetchData;

