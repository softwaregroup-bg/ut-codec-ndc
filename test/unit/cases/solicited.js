const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const solicited = instance.config.test.solicited;

    tap.test('Solicited Status Messages', (t) => {
        t.same(instance.NDC.decode(solicited.solicited, {}, {}), solicited.solicitedResponse, 'test status descriptor - Ready');
        t.same(instance.NDC.encode(solicited.currencyMappingLoad, {opcode: 'currencyMappingLoad'}, {}), solicited.currencyMappingLoadBuffer, 'test send currencyMappingLoad');
        t.same(instance.NDC.decode(solicited.currencyMappingLoadBufferOK, {}, {}), solicited.currencyMappingLoadOk, 'test currencyMappingLoad');
        t.same(instance.NDC.encode(solicited.sendConfigurationId, {opcode: 'sendConfigurationId'}, {}), solicited.sendConfigurationIdBuffer, 'test send sendConfigurationId');
        t.same(instance.NDC.decode(solicited.sendConfigurationIdBufferOk, {}, {}), solicited.sendConfigurationIdOk, 'test sendConfigurationId');
        t.same(instance.NDC.encode(solicited.paramsLoadEnhanced, {opcode: 'paramsLoadEnhanced'}, {}), solicited.paramsLoadEnhancedBuffer, 'test send paramsLoadEnhanced');
        t.same(instance.NDC.encode(solicited.configIdLoad, {opcode: 'configIdLoad'}, {}), solicited.configIdLoadBuffer, 'test send configIdLoad');
        t.same(instance.NDC.encode(solicited.sendConfigurationHardware, {opcode: 'sendConfigurationHardware'}, {}), solicited.sendConfigurationHardwareBuffer, 'test send sendConfigurationHardware');
        t.same(instance.NDC.decode(solicited.sendConfigurationHardwareBufferOk, {}, {}), solicited.sendConfigurationHardwareOk, 'test sendConfigurationHardware');
        t.same(instance.NDC.encode(solicited.sendConfigurationSuplies, {opcode: 'sendConfigurationSuplies'}, {}), solicited.sendConfigurationSupliesBuffer, 'test send sendConfigurationSuplies');
        t.same(instance.NDC.decode(solicited.sendConfigurationSupliesBufferOk, {}, {}), solicited.sendConfigurationSupliesOk, 'test sendConfigurationSuplies');
        t.same(instance.NDC.encode(solicited.sendConfigurationFitness, {opcode: 'sendConfigurationFitness'}, {}), solicited.sendConfigurationFitnessBuffer, 'test send sendConfigurationFitness');
        t.same(instance.NDC.decode(solicited.sendConfigurationFitnessBufferOk, {}, {}), solicited.sendConfigurationFitnessOk, 'test sendConfigurationFitness');
        t.same(instance.NDC.encode(solicited.sendConfigurationSensor, {opcode: 'sendConfigurationSensor'}, {}), solicited.sendConfigurationSensorBuffer, 'test send sendConfigurationSensor');
        t.same(instance.NDC.decode(solicited.sendConfigurationSensorBufferOk, {}, {}), solicited.sendConfigurationSensorOk, 'test sendConfigurationSensor');
        t.same(instance.NDC.encode(solicited.sendConfigurationOptionDigits, {opcode: 'sendConfigurationOptionDigits'}, {}), solicited.sendConfigurationOptionDigitsBuffer, 'test send sendConfigurationOptionDigits');
        t.same(instance.NDC.decode(solicited.sendConfigurationOptionDigitsBufferOk, {}, {}), solicited.sendConfigurationOptionDigitsOk, 'test sendConfigurationOptionDigits');
        t.throws(() => instance.NDC.decode(solicited.solicitedError, {}, {}), instance.errors['aptra.unknownMessageClass']({params: {'message class': '02'}}), {}, 'should fail - unknown message class');
        t.throws(() => instance.NDC.decode(solicited.solicitedBufferDecode, {}, {}), instance.errors['aptra.decode']({'command.method': 'solicitedFault'}), 'should fail - no parser found');
        tap.test('Solicited Terminal State', (t) => {
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
            t.same(instance.NDC.decode(solicited.solicitedBufferFault, {}, {}), solicited.solicitedFault, 'test status descriptor - Device Fault');
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
            t.same(instance.NDC.encode(solicited.keyChangeTpk, {opcode: 'keyChangeTpk'}, {}), solicited.keyChangeTpkBuffer, 'test send Key Change Tpk');
            t.same(instance.NDC.decode(solicited.encryptorIniDataBuffer, {}, {}), solicited.encryptorIniData, 'test EncryptorIniData');
            t.end();
        });
        t.end();
    });
};
