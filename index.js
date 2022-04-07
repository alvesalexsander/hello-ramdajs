const R = require('ramda');

const data = [{name: 'Alexsander', errors: ''}];

const whereClause = R.where({name: R.equals('Alexsander')});
const whereClause1 = R.where({errors: R.isEmpty});

const validateUsernameAndErrors = R.and(whereClause, whereClause1);
const validateUsername = R.filter(validateUsernameAndErrors);

console.log(validateUsername(data));