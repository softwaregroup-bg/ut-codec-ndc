const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('./config/test')();

const NDC = require('../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

tap.test('init', (t) => {
    t.same(ndc.messageFormat instanceof Object, true, 'presence of messageFormat');
    t.same(Object.keys(ndc.messageFormat).length > 0, true, 'init messageFormat');
    t.same(ndc.codes instanceof Object, true, 'presence of codes');
    t.same(Object.keys(ndc.codes).length > 0, true, 'init codes');
    t.end();
});
