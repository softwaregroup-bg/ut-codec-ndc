const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const solicited = instance.config.test.solicited;
    const customisation = instance.config.test.customisation;

    tap.test('Solicited Status Messages', (t) => {
        t.same(instance.NDC.decode(solicited.solicited, {}, {}), solicited.solicitedResponse, 'test status descriptor - Ready');
        t.throws(() => instance.NDC.decode(solicited.solicitedError, {}, {}), instance.errors['aptra.unknownMessageClass']({params: {'message class': '02'}}), {}, 'should fail - unknown message class');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferDecode, {}, {}), instance.errors['aptra.decode']({'command.method': 'solicitedFault'}), 'should fail - no parser found');
        tap.test('Solicited Terminal State', (t) => {
            t.same(instance.NDC.decode(customisation.sendConfigurationIdBufferOk, {}, {}), customisation.sendConfigurationIdOk, 'test status descriptor - State - sendConfigurationId');
            t.same(instance.NDC.decode(customisation.sendConfigurationHardwareBufferOk, {}, {}), customisation.sendConfigurationHardwareOk, 'test status descriptor - State - sendConfigurationHardware');
            t.same(instance.NDC.decode(customisation.sendConfigurationSupliesBufferOk, {}, {}), customisation.sendConfigurationSupliesOk, 'test status descriptor - State - sendConfigurationSuplies');
            t.same(instance.NDC.decode(customisation.sendConfigurationFitnessBufferOk, {}, {}), customisation.sendConfigurationFitnessOk, 'test status descriptor - State - sendConfigurationFitness');
            t.same(instance.NDC.decode(customisation.sendConfigurationSensorBufferOk, {}, {}), customisation.sendConfigurationSensorOk, 'test status descriptor - State - sendConfigurationSensor');
            t.same(instance.NDC.decode(customisation.sendConfigurationOptionDigitsBufferOk, {}, {}), customisation.sendConfigurationOptionDigitsOk, 'test status descriptor - State - sendConfigurationOptionDigits');
            t.same(instance.NDC.decode(solicited.solicitedPrinterOutOfPaper, {}, {}), solicited.solicitedPrinterOutOfPaperMessage, 'test status descriptor - State - printer out of paper');
            t.same(instance.NDC.decode(solicited.solicitedConfigCartEmpty, {}, {}), solicited.solicitedConfigCartEmptyMessage, 'test status descriptor - State - cassette 1 empty');
            t.same(instance.NDC.decode(solicited.solicitedConfigCartOk, {}, {}), solicited.solicitedConfigCartOkMessage, 'test status descriptor - State - cassette 1 ok');
            t.end();
        });
        tap.test('Solicited Command Reject', (t) => {
            t.throws(() => instance.NDC.decode(solicited.solicitedBufferReject, {}, {}), instance.errors['aptra.commandReject'](), 'test status descriptor - Command Reject');
            t.throws(() => instance.NDC.decode(solicited.solicitedBufferSpecificRejectA02, {}, {}), instance.errors['aptra.customReject']('A02'), 'test status descriptor - Specific Command Reject');
            t.throws(() => instance.NDC.decode(solicited.solicitedBufferSpecificRejectB09, {}, {}), instance.errors['aptra.customReject']('B09'), 'test status descriptor - Specific Command Reject');
            t.throws(() => instance.NDC.decode(solicited.solicitedBufferSpecificRejectC03, {}, {}), instance.errors['aptra.customReject']('C03'), 'test status descriptor - Specific Command Reject');
            t.end();
        });
        tap.test('Solicited Device Fault Status', (t) => {
            t.same(instance.NDC.decode(solicited.solicitedReceiptlow, {}, {}), solicited.solicitedReceiptlowMessage, 'test status descriptor Fault - Receipt printer low');
            t.same(instance.NDC.decode(solicited.solicitedPreventCardEjection, {}, {}), solicited.solicitedPreventCardEjectionMessage, 'test status descriptor Fault - Prevent card ejection');
            t.same(instance.NDC.decode(solicited.solicitedCardNotEjected, {}, {}), solicited.solicitedCardNotEjectedMessage, 'test status descriptor Fault - Card not ejected');
            t.same(instance.NDC.decode(solicited.solicitedCardFault, {}, {}), solicited.solicitedCardFaultMessage, 'test status descriptor Fault - Card fault');
            t.same(instance.NDC.decode(solicited.solicitedNotesRetracted, {}, {}), solicited.solicitedNotesRetractedMessage, 'test status descriptor Fault - Notes retracted');
            t.same(instance.NDC.decode(solicited.solicitedPartialDispense, {}, {}), solicited.solicitedPartialDispenseMessage, 'test status descriptor Fault - Partial short dispense');
            t.same(instance.NDC.decode(solicited.solicitedPartialDispenseS, {}, {}), solicited.solicitedPartialDispenseSMessage, 'test status descriptor Fault - Partial dispense Req. 100, Disp 80 (High Bills 20s)');
            t.same(instance.NDC.decode(solicited.solicitedBillsLow, {}, {}), solicited.solicitedBillsLowMessage, 'test status descriptor Fault - Bills low');
            t.same(instance.NDC.decode(solicited.solicitedCartMissing, {}, {}), solicited.solicitedCartMissingMessage, 'test status descriptor Fault - Cassette Missing');
            t.same(instance.NDC.decode(solicited.solicitedCartRemoved, {}, {}), solicited.solicitedCartRemovedMessage, 'test status descriptor Fault - Cassette Removed');
            t.same(instance.NDC.decode(solicited.solicitedVibration, {}, {}), solicited.solicitedVibrationMessage, 'test status descriptor Fault - Vibration');
            t.end();
        });
        tap.test('Other Solicited Messages', (t) => {
            t.same(instance.NDC.decode(solicited.encryptorIniDataBuffer, {}, {}), solicited.encryptorIniData, 'test EncryptorIniData');
            t.same(instance.NDC.decode(solicited.uploadEjDataBuffer, {}, {}), solicited.uploadEjData, 'test UploadEjData');
            t.end();
        });
        t.end();
    });
};
