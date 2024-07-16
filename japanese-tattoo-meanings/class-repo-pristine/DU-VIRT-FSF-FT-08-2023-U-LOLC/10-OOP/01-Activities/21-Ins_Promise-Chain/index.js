const inquirer = require('inquirer');
const fetch = require('node-fetch');

inquirer
  .prompt({
    type: 'input',
    name: 'username',
    message: 'Enter a Github Username:',
  })
  // promises are chained to directly pass inquirer data into fetch request
  .then((res) => fetch(`https://api.github.com/users/${res.username}`))
  // promises are chained to parse the request for the json data
  .then((res) => res.json())
  // json data is accepted as user and logged to the console
  .then((user) => console.log(user));
