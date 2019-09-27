const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('../config/test')();

const NDC = require('../../../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

const withdraw = config.test.withdraw;

tap.test('withdraw', (t) => {
    t.same(ndc.decode(withdraw.transactionBuffer, {}, {}), withdraw.transactionMessage, 'test transaction request');
    t.same(ndc.encode(withdraw.transactionReply, {opcode: 'transactionReply'}, {transactionRequestId: 2, transactionReplyTime: process.hrtime()[0] + 1000}), withdraw.transactionReplyBuffer, 'test transaction reply');
    t.same(ndc.decode(withdraw.solicitedBuffer, {}, {}), withdraw.solicitedMessage, 'test solicited status transaction ready');
    t.same(ndc.decode(withdraw.unsolicitedBuffer, {}, {}), withdraw.unsolicitedMessage, 'test unsolicited status');
    t.same(ndc.decode(withdraw.requestCountersBuffer, {}, {}), withdraw.requestCountersMessage, 'test request counters');
    t.same(ndc.encode(withdraw.requestCountersReplyMessage, {opcode: 'transactionReply'}, {transactionRequestId: 3, transactionReplyTime: process.hrtime()[0] + 1000}), withdraw.requestCountersReplyBuffer, 'test request counters reply');
    t.same(ndc.encode(withdraw.goOutOfServiceTemp, {opcode: 'goOutOfServiceTemp'}, {}), withdraw.goOutOfServiceTempBuffer, 'test goOutOfService');
    t.same(ndc.decode(withdraw.ejBuffer1, {}, {}), withdraw.ejMessage1, 'test ej upload first part');
    t.same(ndc.encode(withdraw.ejAckMessage1, {opcode: 'ejAck'}, {}), withdraw.ejAckBuffer1, 'test ej ack first part');
    t.same(ndc.decode(withdraw.ejBuffer2, {}, {}), withdraw.ejMessage2, 'test ej upload second part');
    t.same(ndc.encode(withdraw.ejAckMessage2, {opcode: 'ejAck'}, {}), withdraw.ejAckBuffer2, 'test ej ack second part');
    t.same(ndc.encode(withdraw.sendSupplyCounters, {opcode: 'sendSupplyCounters'}, {}), withdraw.sendSupplyCountersBuffer, 'test sendSupplyCounters request');
    t.same(ndc.decode(withdraw.sendSupplyCountersResBuffer, {}, {}), withdraw.sendSupplyCountersRes, 'test sendSupplyCounters reply');
    t.same(ndc.encode(withdraw.goInService, {opcode: 'goInService'}, {}), withdraw.goInServiceBuffer, 'test goInService');
    t.same(ndc.decode(withdraw.solicitedStatus, {}, {}), withdraw.solicitedStatusMessage, 'test solicited status ready');
    t.throws(() => ndc.decode(withdraw.transactionBufferError, {}, {}), ndc.errors['aptra.unknownMessageClass']({params: {'message class': '1'}}), 'should fail - unknown message class');
    t.end();
});
