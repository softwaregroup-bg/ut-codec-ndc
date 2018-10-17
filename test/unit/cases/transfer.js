const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const transfer = instance.config.test.transfer;

    tap.test('transfer', (t) => {
        t.same(instance.NDC.decode(transfer.transactionTransferBuffer, {}, {}), transfer.transactionTransferMessage, 'test transaction request');
        t.same(instance.NDC.encode(transfer.transactionReplyTransfer, {opcode: 'transactionReply'}, {transactionRequestId: 5, transactionReplyTime: process.hrtime()[0] + 1000}), transfer.transactionReplyTransferBuffer, 'test transaction reply');
        t.throws(() => instance.NDC.encode(transfer.transactionReplyTransfer, {opcode: 'transactionReply'}, {transactionRequestId: 2, transactionReplyTime: process.hrtime()[0] + 1000}), instance.NDC.errors['aptra.timeout']({}), 'should fail - timeout');
        t.end();
    });
};
