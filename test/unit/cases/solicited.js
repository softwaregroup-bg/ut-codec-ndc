const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('../config/test')();

const NDC = require('../../../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

const solicited = config.test.solicited;
const customisation = config.test.customisation;

tap.test('Solicited Status Messages', (t) => {
    t.same(ndc.decode(solicited.solicited, {}, {}), solicited.solicitedResponse, 'test status descriptor - Ready');
    t.throws(() => ndc.decode(solicited.solicitedError, {}, {}), ndc.errors['aptra.unknownMessageClass']({params: {'message class': '02'}}), {}, 'should fail - unknown message class');
    t.throws(() => ndc.decode(solicited.solicitedBufferDecode, {}, {}), ndc.errors['aptra.decode']({'command.method': 'solicitedFault'}), 'should fail - no parser found');
    tap.test('Solicited Terminal State', (t) => {
        t.same(ndc.decode(customisation.sendConfigurationIdBufferOk, {}, {}), customisation.sendConfigurationIdOk, 'test status descriptor - State - sendConfigurationId');
        t.same(ndc.decode(customisation.sendConfigurationHardwareBufferOk, {}, {}), customisation.sendConfigurationHardwareOk, 'test status descriptor - State - sendConfigurationHardware');
        t.same(ndc.decode(customisation.sendConfigurationSupliesBufferOk, {}, {}), customisation.sendConfigurationSupliesOk, 'test status descriptor - State - sendConfigurationSuplies');
        t.same(ndc.decode(customisation.sendConfigurationFitnessBufferOk, {}, {}), customisation.sendConfigurationFitnessOk, 'test status descriptor - State - sendConfigurationFitness');
        t.same(ndc.decode(customisation.sendConfigurationSensorBufferOk, {}, {}), customisation.sendConfigurationSensorOk, 'test status descriptor - State - sendConfigurationSensor');
        t.same(ndc.decode(customisation.sendConfigurationOptionDigitsBufferOk, {}, {}), customisation.sendConfigurationOptionDigitsOk, 'test status descriptor - State - sendConfigurationOptionDigits');
        t.same(ndc.decode(solicited.solicitedPrinterOutOfPaper, {}, {}), solicited.solicitedPrinterOutOfPaperMessage, 'test status descriptor - State - printer out of paper');
        t.same(ndc.decode(solicited.solicitedConfigCartEmpty, {}, {}), solicited.solicitedConfigCartEmptyMessage, 'test status descriptor - State - cassette 1 empty');
        t.same(ndc.decode(solicited.solicitedConfigCartOk, {}, {}), solicited.solicitedConfigCartOkMessage, 'test status descriptor - State - cassette 1 ok');
        t.end();
    });
    tap.test('Solicited Command Reject', (t) => {
        t.throws(() => ndc.decode(solicited.solicitedBufferReject, {}, {}), ndc.errors['aptra.commandReject'](), 'test status descriptor - Command Reject');
        t.throws(() => ndc.decode(solicited.solicitedBufferSpecificRejectA02, {}, {}), ndc.errors['aptra.customReject']('A02'), 'test status descriptor - Specific Command Reject');
        t.throws(() => ndc.decode(solicited.solicitedBufferSpecificRejectB09, {}, {}), ndc.errors['aptra.customReject']('B09'), 'test status descriptor - Specific Command Reject');
        t.throws(() => ndc.decode(solicited.solicitedBufferSpecificRejectC03, {}, {}), ndc.errors['aptra.customReject']('C03'), 'test status descriptor - Specific Command Reject');
        t.end();
    });
    tap.test('Solicited Device Fault Status', (t) => {
        t.same(ndc.decode(solicited.solicitedReceiptlow, {}, {}), solicited.solicitedReceiptlowMessage, 'test status descriptor Fault - Receipt printer low');
        t.same(ndc.decode(solicited.solicitedPreventCardEjection, {}, {}), solicited.solicitedPreventCardEjectionMessage, 'test status descriptor Fault - Prevent card ejection');
        t.same(ndc.decode(solicited.solicitedCardNotEjected, {}, {}), solicited.solicitedCardNotEjectedMessage, 'test status descriptor Fault - Card not ejected');
        t.same(ndc.decode(solicited.solicitedCardFault, {}, {}), solicited.solicitedCardFaultMessage, 'test status descriptor Fault - Card fault');
        t.same(ndc.decode(solicited.solicitedNotesRetracted, {}, {}), solicited.solicitedNotesRetractedMessage, 'test status descriptor Fault - Notes retracted');
        t.same(ndc.decode(solicited.solicitedPartialDispense, {}, {}), solicited.solicitedPartialDispenseMessage, 'test status descriptor Fault - Partial short dispense');
        t.same(ndc.decode(solicited.solicitedPartialDispenseS, {}, {}), solicited.solicitedPartialDispenseSMessage, 'test status descriptor Fault - Partial dispense Req. 100, Disp 80 (High Bills 20s)');
        t.same(ndc.decode(solicited.solicitedBillsLow, {}, {}), solicited.solicitedBillsLowMessage, 'test status descriptor Fault - Bills low');
        t.same(ndc.decode(solicited.solicitedCartMissing, {}, {}), solicited.solicitedCartMissingMessage, 'test status descriptor Fault - Cassette Missing');
        t.same(ndc.decode(solicited.solicitedCartRemoved, {}, {}), solicited.solicitedCartRemovedMessage, 'test status descriptor Fault - Cassette Removed');
        t.same(ndc.decode(solicited.solicitedVibration, {}, {}), solicited.solicitedVibrationMessage, 'test status descriptor Fault - Vibration');
        t.end();
    });
    tap.test('Other Solicited Messages', (t) => {
        t.same(ndc.decode(solicited.encryptorIniDataBuffer, {}, {}), solicited.encryptorIniData, 'test EncryptorIniData');
        t.same(ndc.decode(solicited.uploadEjDataBuffer, {}, {}), solicited.uploadEjData, 'test UploadEjData');
        t.end();
    });
    t.end();
});
