const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('./config/test')();

const NDC = require('../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

const transfer = config.test.transfer;

tap.test('transfer', (t) => {
    t.same(ndc.decode(transfer.transactionTransferBuffer, {}, {}), transfer.transactionTransferMessage, 'test transaction request');
    t.same(ndc.encode(transfer.transactionReplyTransfer, {opcode: 'transactionReply'}, {transactionRequestId: 5, transactionReplyTime: process.hrtime()[0] + 1000}), transfer.transactionReplyTransferBuffer, 'test transaction reply');
    t.throws(() => ndc.encode(transfer.transactionReplyTransfer, {opcode: 'transactionReply'}, {transactionRequestId: 2, transactionReplyTime: process.hrtime()[0] + 1000}), ndc.errors['aptra.timeout']({}), 'should fail - timeout');
    t.end();
});
