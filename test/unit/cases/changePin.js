const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const changePin = instance.config.test.changePin;

    tap.test('changePin', (t) => {
        t.same(instance.NDC.decode(changePin.transactionChangePinBuffer, {}, {}), changePin.transactionChangePinMessage, 'test transaction request');
        t.same(instance.NDC.encode(changePin.transactionReplyChangePin, {opcode: 'transactionReply'}, {transactionRequestId: 3, transactionReplyTime: process.hrtime()[0] + 1000}), changePin.transactionReplyChangePinBuffer, 'test transaction reply');
        t.throws(() => instance.NDC.encode(changePin.transactionReplyChangePin, {opcode: 'transactionReply'}, {transactionRequestId: 2, transactionReplyTime: process.hrtime()[0] + 1000}), instance.NDC.errors['aptra.timeout']({}), 'should fail - timeout');
        t.end();
    });
};
