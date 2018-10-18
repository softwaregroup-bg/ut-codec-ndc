const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const withdraw = instance.config.test.withdraw;

    tap.test('withdraw', (t) => {
        t.same(instance.NDC.decode(withdraw.transactionBuffer, {}, {}), withdraw.transactionMessage, 'test transaction request');
        t.same(instance.NDC.encode(withdraw.transactionReply, {opcode: 'transactionReply'}, {transactionRequestId: 2, transactionReplyTime: process.hrtime()[0] + 1000}), withdraw.transactionReplyBuffer, 'test transaction reply');
        t.same(instance.NDC.decode(withdraw.solicitedBuffer, {}, {}), withdraw.solicitedMessage, 'test solicited status transaction ready');
        t.same(instance.NDC.decode(withdraw.unsolicitedBuffer, {}, {}), withdraw.unsolicitedMessage, 'test unsolicited status');
        t.same(instance.NDC.decode(withdraw.requestCountersBuffer, {}, {}), withdraw.requestCountersMessage, 'test request counters');
        t.same(instance.NDC.encode(withdraw.requestCountersReplyMessage, {opcode: 'transactionReply'}, {transactionRequestId: 3, transactionReplyTime: process.hrtime()[0] + 1000}), withdraw.requestCountersReplyBuffer, 'test request counters reply');
        t.same(instance.NDC.encode(withdraw.goOutOfServiceTemp, {opcode: 'goOutOfServiceTemp'}, {}), withdraw.goOutOfServiceTempBuffer, 'test goOutOfService');
        t.same(instance.NDC.decode(withdraw.ejBuffer1, {}, {}), withdraw.ejMessage1, 'test ej upload first part');
        t.same(instance.NDC.encode(withdraw.ejAckMessage1, {opcode: 'ejAck'}, {}), withdraw.ejAckBuffer1, 'test ej ack first part');
        t.same(instance.NDC.decode(withdraw.ejBuffer2, {}, {}), withdraw.ejMessage2, 'test ej upload second part');
        t.same(instance.NDC.encode(withdraw.ejAckMessage2, {opcode: 'ejAck'}, {}), withdraw.ejAckBuffer2, 'test ej ack second part');
        t.same(instance.NDC.encode(withdraw.sendSupplyCounters, {opcode: 'sendSupplyCounters'}, {}), withdraw.sendSupplyCountersBuffer, 'test sendSupplyCounters request');
        t.same(instance.NDC.decode(withdraw.sendSupplyCountersResBuffer, {}, {}), withdraw.sendSupplyCountersRes, 'test sendSupplyCounters reply');
        t.same(instance.NDC.encode(withdraw.goInService, {opcode: 'goInService'}, {}), withdraw.goInServiceBuffer, 'test goInService');
        t.same(instance.NDC.decode(withdraw.solicitedStatus, {}, {}), withdraw.solicitedStatusMessage, 'test solicited status ready');
        t.throws(() => instance.NDC.decode(withdraw.transactionBufferError, {}, {}), instance.NDC.errors['aptra.unknownMessageClass']({params: {'message class': '1'}}), 'should fail - unknown message class');
        t.end();
    });
};
