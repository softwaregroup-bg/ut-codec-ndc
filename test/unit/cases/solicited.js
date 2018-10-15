const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const solicited = instance.config.test.solicited;

    tap.test('solicited', (t) => {
        t.same(instance.NDC.decode(solicited.solicited, {}, {}), solicited.solicitedResponse, 'test status descriptor - Ready');
        t.same(instance.NDC.decode(solicited.solicitedBufferFault, {}, {}), solicited.solicitedFault, 'test status descriptor - Device Fault');
        t.same(instance.NDC.decode(solicited.solicitedPrinterOutOfPaper, {}, {}), solicited.solicitedPrinterOutOfPaperMessage, 'test status descriptor - State - printer out of paper');
        t.same(instance.NDC.decode(solicited.solicitedConfigCartEmpty, {}, {}), solicited.solicitedConfigCartEmptyMessage, 'test status descriptor - State - cassette 1 empty');
        t.same(instance.NDC.decode(solicited.solicitedConfigCartOk, {}, {}), solicited.solicitedConfigCartOkMessage, 'test status descriptor - State - cassette 1 ok');
        t.same(instance.NDC.decode(solicited.solicitedConfigCartOk, {}, {}), solicited.solicitedConfigCartOkMessage, 'test status descriptor - State - cassette 1 ok');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferReject, {}, {}), instance.errors['aptra.commandReject'](), 'test status descriptor - Command Reject');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferSpecificRejectA02, {}, {}), instance.errors['aptra.customReject']('A02'), 'test status descriptor - Specific Command Reject');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferSpecificRejectB09, {}, {}), instance.errors['aptra.customReject']('B09'), 'test status descriptor - Specific Command Reject');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferSpecificRejectC03, {}, {}), instance.errors['aptra.customReject']('C03'), 'test status descriptor - Specific Command Reject');
        t.throws(() => instance.NDC.decode(solicited.solicitedError, {}, {}), instance.errors['aptra.unknownMessageClass']({params: {'message class': '02'}}), {}, 'should fail - unknown message class');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferDecode, {}, {}), instance.errors['aptra.decode']({'command.method': 'solicitedFault'}), 'should fail - no parser found');
        t.end();
    });
};
