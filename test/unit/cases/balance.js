const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('../config/test')();

const NDC = require('../../../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

const balance = config.test.balance;

tap.test('balance', (t) => {
    t.same(ndc.decode(balance.transactionBuffer, {}, {}), balance.transactionMessage, 'test transaction request');
    t.same(ndc.encode(balance.transactionReply, {opcode: 'transactionReply'}, {transactionRequestId: 1, transactionReplyTime: process.hrtime()[0] + 1000}), balance.transactionReplyBuffer, 'test transaction reply');
    t.same(ndc.decode(balance.solicitedBuffer, {}, {}), balance.solicitedMessage, 'test solicited status transaction ready');
    t.same(ndc.decode(balance.ejBuffer, {}, {}), balance.ejMessage, 'test ej upload');
    t.same(ndc.encode(balance.ejAckMessage, {opcode: 'ejAck'}, {}), balance.ejAckBuffer, 'test ej ack');
    t.same(ndc.encode(balance.sendConfig, {opcode: 'sendConfiguration'}, {}), balance.sendConfigBuffer, 'test send configuration');
    t.same(ndc.decode(balance.solicitedSendConfig, {}, {}), balance.solicitedSendConfigMessage, 'test send configuration solicited status');
    t.end();
});
