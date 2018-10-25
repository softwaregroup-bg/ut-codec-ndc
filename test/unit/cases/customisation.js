const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('../config/test')();

const NDC = require('../../../index');
const ndc = new NDC(Object.assign({}, {messageFormat: config.messageFormat}, errorApi));

const customisation = config.test.customisation;

tap.test('Customisation Data Commands', (t) => {
    t.same(ndc.encode(customisation.keyReadKvv, {opcode: 'keyReadKvv'}, {}), customisation.keyReadKvvBuffer, 'test send keyReadKvv');
    t.same(ndc.encode(customisation.keyChangeTpk, {opcode: 'keyChangeTpk'}, {}), customisation.keyChangeTpkBuffer, 'test send Key Change Tpk');
    t.same(ndc.encode(customisation.currencyMappingLoad, {opcode: 'currencyMappingLoad'}, {}), customisation.currencyMappingLoadBuffer, 'test send currencyMappingLoad');
    t.same(ndc.decode(customisation.currencyMappingLoadBufferOK, {}, {}), customisation.currencyMappingLoadOk, 'test send currencyMappingLoad');
    t.same(ndc.encode(customisation.sendConfigurationId, {opcode: 'sendConfigurationId'}, {}), customisation.sendConfigurationIdBuffer, 'test send sendConfigurationId');
    t.same(ndc.encode(customisation.configIdLoad, {opcode: 'configIdLoad'}, {}), customisation.configIdLoadBuffer, 'test send configIdLoad');
    t.same(ndc.encode(customisation.paramsLoadEnhanced, {opcode: 'paramsLoadEnhanced'}, {}), customisation.paramsLoadEnhancedBuffer, 'test send paramsLoadEnhanced');
    t.same(ndc.encode(customisation.screenDataLoad, {opcode: 'screenDataLoad'}, {}), customisation.screenDataLoadBuffer, 'test send screenDataLoad');
    t.same(ndc.encode(customisation.stateTableLoad, {opcode: 'stateTableLoad'}, {}), customisation.stateTableLoadBuffer, 'test send stateTableLoad');
    t.same(ndc.encode(customisation.emvCurrency, {opcode: 'emvCurrency'}, {}), customisation.emvCurrencyBuffer, 'test send emvCurrency');
    t.same(ndc.encode(customisation.emvTransaction, {opcode: 'emvTransaction'}, {}), customisation.emvTransactionBuffer, 'test send emvTransaction');
    t.same(ndc.encode(customisation.emvLanguage, {opcode: 'emvLanguage'}, {}), customisation.emvLanguageBuffer, 'test send emvLanguage');
    t.same(ndc.encode(customisation.emvTerminal, {opcode: 'emvTerminal'}, {}), customisation.emvTerminalBuffer, 'test send emvTerminal');
    t.same(ndc.encode(customisation.emvApplication, {opcode: 'emvApplication'}, {}), customisation.emvApplicationBuffer, 'test send emvApplication');
    t.same(ndc.encode(customisation.ejOptions, {opcode: 'ejOptions'}, {}), customisation.ejOptionsBuffer, 'test send ejOptions');
    t.same(ndc.encode(customisation.sendConfigurationHardware, {opcode: 'sendConfigurationHardware'}, {}), customisation.sendConfigurationHardwareBuffer, 'test send sendConfigurationHardware');
    t.same(ndc.encode(customisation.sendConfigurationSuplies, {opcode: 'sendConfigurationSuplies'}, {}), customisation.sendConfigurationSupliesBuffer, 'test send sendConfigurationSuplies');
    t.same(ndc.encode(customisation.sendConfigurationFitness, {opcode: 'sendConfigurationFitness'}, {}), customisation.sendConfigurationFitnessBuffer, 'test send sendConfigurationFitness');
    t.same(ndc.encode(customisation.sendConfigurationSensor, {opcode: 'sendConfigurationSensor'}, {}), customisation.sendConfigurationSensorBuffer, 'test send sendConfigurationSensor');
    t.same(ndc.encode(customisation.sendConfigurationOptionDigits, {opcode: 'sendConfigurationOptionDigits'}, {}), customisation.sendConfigurationOptionDigitsBuffer, 'test send sendConfigurationOptionDigits');
    t.end();
});
