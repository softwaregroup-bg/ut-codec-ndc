const NDC = require('../../index');
const {define, get, fetch} = require('ut-error');
const errorApi = {defineError: define, getError: get, fetchErrors: fetch};
const errors = require('../../errors')(errorApi);
const config = require('./config/test')(errors);

const lib = require('./lib')({
    errors,
    errorApi,
    config,
    mainLib: {NDC: new NDC({messageFormat: config.messageFormat, defineError: define, getError: get, fetchErrors: fetch})}
});

// test cases
require('./cases/solicitedStatus')(lib);
require('./cases/balance')(lib);
require('./cases/withdraw')(lib);
