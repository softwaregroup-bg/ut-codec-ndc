const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const customisation = instance.config.test.customisation;

    tap.test('Customisation Data Commands', (t) => {
        t.same(instance.NDC.encode(customisation.keyReadKvv, {opcode: 'keyReadKvv'}, {}), customisation.keyReadKvvBuffer, 'test send keyReadKvv');
        t.same(instance.NDC.encode(customisation.keyChangeTpk, {opcode: 'keyChangeTpk'}, {}), customisation.keyChangeTpkBuffer, 'test send Key Change Tpk');
        t.same(instance.NDC.encode(customisation.currencyMappingLoad, {opcode: 'currencyMappingLoad'}, {}), customisation.currencyMappingLoadBuffer, 'test send currencyMappingLoad');
        t.same(instance.NDC.decode(customisation.currencyMappingLoadBufferOK, {}, {}), customisation.currencyMappingLoadOk, 'test send currencyMappingLoad');
        t.same(instance.NDC.encode(customisation.sendConfigurationId, {opcode: 'sendConfigurationId'}, {}), customisation.sendConfigurationIdBuffer, 'test send sendConfigurationId');
        t.same(instance.NDC.encode(customisation.configIdLoad, {opcode: 'configIdLoad'}, {}), customisation.configIdLoadBuffer, 'test send configIdLoad');
        t.same(instance.NDC.encode(customisation.paramsLoadEnhanced, {opcode: 'paramsLoadEnhanced'}, {}), customisation.paramsLoadEnhancedBuffer, 'test send paramsLoadEnhanced');
        t.same(instance.NDC.encode(customisation.screenDataLoad, {opcode: 'screenDataLoad'}, {}), customisation.screenDataLoadBuffer, 'test send screenDataLoad');
        t.same(instance.NDC.encode(customisation.stateTableLoad, {opcode: 'stateTableLoad'}, {}), customisation.stateTableLoadBuffer, 'test send stateTableLoad');
        t.same(instance.NDC.encode(customisation.emvCurrency, {opcode: 'emvCurrency'}, {}), customisation.emvCurrencyBuffer, 'test send emvCurrency');
        t.same(instance.NDC.encode(customisation.emvTransaction, {opcode: 'emvTransaction'}, {}), customisation.emvTransactionBuffer, 'test send emvTransaction');
        t.same(instance.NDC.encode(customisation.emvLanguage, {opcode: 'emvLanguage'}, {}), customisation.emvLanguageBuffer, 'test send emvLanguage');
        t.same(instance.NDC.encode(customisation.emvTerminal, {opcode: 'emvTerminal'}, {}), customisation.emvTerminalBuffer, 'test send emvTerminal');
        t.same(instance.NDC.encode(customisation.emvApplication, {opcode: 'emvApplication'}, {}), customisation.emvApplicationBuffer, 'test send emvApplication');
        t.same(instance.NDC.encode(customisation.ejOptions, {opcode: 'ejOptions'}, {}), customisation.ejOptionsBuffer, 'test send ejOptions');
        t.same(instance.NDC.encode(customisation.sendConfigurationHardware, {opcode: 'sendConfigurationHardware'}, {}), customisation.sendConfigurationHardwareBuffer, 'test send sendConfigurationHardware');
        t.same(instance.NDC.encode(customisation.sendConfigurationSuplies, {opcode: 'sendConfigurationSuplies'}, {}), customisation.sendConfigurationSupliesBuffer, 'test send sendConfigurationSuplies');
        t.same(instance.NDC.encode(customisation.sendConfigurationFitness, {opcode: 'sendConfigurationFitness'}, {}), customisation.sendConfigurationFitnessBuffer, 'test send sendConfigurationFitness');
        t.same(instance.NDC.encode(customisation.sendConfigurationSensor, {opcode: 'sendConfigurationSensor'}, {}), customisation.sendConfigurationSensorBuffer, 'test send sendConfigurationSensor');
        t.same(instance.NDC.encode(customisation.sendConfigurationOptionDigits, {opcode: 'sendConfigurationOptionDigits'}, {}), customisation.sendConfigurationOptionDigitsBuffer, 'test send sendConfigurationOptionDigits');
        t.end();
    });
};
