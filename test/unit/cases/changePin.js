const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('../config/test')();

const NDC = require('../../../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

const changePin = config.test.changePin;

tap.test('changePin', (t) => {
    t.same(ndc.decode(changePin.transactionChangePinBuffer, {}, {}), changePin.transactionChangePinMessage, 'test transaction request');
    t.same(ndc.encode(changePin.transactionReplyChangePin, {opcode: 'transactionReply'}, {transactionRequestId: 3, transactionReplyTime: process.hrtime()[0] + 1000}), changePin.transactionReplyChangePinBuffer, 'test transaction reply');
    t.throws(() => ndc.encode(changePin.transactionReplyChangePin, {opcode: 'transactionReply'}, {transactionRequestId: 2, transactionReplyTime: process.hrtime()[0] + 1000}), ndc.errors['aptra.timeout']({}), 'should fail - timeout');
    t.end();
});
