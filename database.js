const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'me',
  password: 'secret',
  database: 'my_db'
});

const savePlayers = (teamName, players) => {
  // Code to save players to the database
  // You might want to create a new table for each team, or save all players in one table with a column for the team name
};

module.exports = {
  savePlayers
};