const NDC = require('../../index');
const {define, get, fetch} = require('ut-error');
const errorApi = {defineError: define, getError: get, fetchErrors: fetch};
const errors = require('../../errors')(errorApi);
const config = require('./config/test')(errors);

const lib = require('./lib')({
    errors: {...errors, ...errorApi},
    config,
    mainLib: {NDC: new NDC({messageFormat: config.messageFormat, defineError: define, getError: get, fetchErrors: fetch})}
});

// test cases
require('./cases/solicited')(lib);
require('./cases/customisation')(lib);
require('./cases/unsolicited')(lib);
require('./cases/balance')(lib);
require('./cases/withdraw')(lib);
require('./cases/changePin')(lib);
require('./cases/transfer')(lib);
