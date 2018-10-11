const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const balance = instance.config.test.balance;

    tap.test('balance', (t) => {
        t.same(instance.NDC.decode(balance.transactionBuffer, {}, {}), balance.transactionMessage, 'test transaction request');
        t.same(instance.NDC.encode(balance.transactionReply, {opcode: 'transactionReply'}, {transactionRequestId: 1, transactionReplyTime: process.hrtime()[0] + 1000}), balance.transactionReplyBuffer, 'test transaction reply');
        t.same(instance.NDC.decode(balance.solicitedBuffer, {}, {}), balance.solicitedMessage, 'test solicited status transaction ready');
        t.same(instance.NDC.decode(balance.ejBuffer, {}, {}), balance.ejMessage, 'test ej upload');
        t.same(instance.NDC.encode(balance.ejAckMessage, {opcode: 'ejAck'}, {}), balance.ejAckBuffer, 'test ej ack');
        t.same(instance.NDC.encode(balance.sendConfig, {opcode: 'sendConfiguration'}, {}), balance.sendConfigBuffer, 'test send configuration');
        t.same(instance.NDC.decode(balance.solicitedSendConfig, {}, {}), balance.solicitedSendConfigMessage, 'test send configuration solicited status');
        t.end();
    });
};
