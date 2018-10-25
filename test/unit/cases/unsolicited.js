const tap = require('tap');
const {define, get, fetch} = require('ut-unittest/errorApi.js')();
const errorApi = { getError: get, fetchErrors: fetch, defineError: define };
const config = require('../config/test')();

const NDC = require('../../../index');
const ndc = new NDC({messageFormat: config.messageFormat, ...errorApi});

const unsolicited = config.test.unsolicited;

tap.test('unsolicited', (t) => {
    t.same(ndc.decode(unsolicited.unsolicitedTimeOfDayClock, {}, {}), unsolicited.unsolicitedTimeOfDayClockMessage, 'test unsolicited - Time of day clock');
    t.same(ndc.decode(unsolicited.unsolicitedPowerFailure, {}, {}), unsolicited.unsolicitedPowerFailureMessage, 'test unsolicited - Power failure');
    t.same(ndc.decode(unsolicited.unsolicitedSupervisorModeEnter, {}, {}), unsolicited.unsolicitedSupervisorModeEnterMessage, 'test unsolicited - Supervisor mode enter');
    t.same(ndc.decode(unsolicited.unsolicitedSupervisorMode, {}, {}), unsolicited.unsolicitedSupervisorModeMessage, 'test unsolicited - Supervisor mode keys');
    t.same(ndc.decode(unsolicited.unsolicitedSupervisorModeExit, {}, {}), unsolicited.unsolicitedSupervisorModeExitMessage, 'test unsolicited - Supervisor mode exit');
    t.same(ndc.decode(unsolicited.unsolicitedCardNotTakenBuffer, {}, {}), unsolicited.unsolicitedCardNotTakenMessage, 'test unsolicited - Card not taken');
    t.same(ndc.decode(unsolicited.unsolicitedCashRetractedBuffer, {}, {}), unsolicited.unsolicitedCashRetractedMessage, 'test unsolicited - Cash retracted');
    t.same(ndc.decode(unsolicited.unsolicitedJournalPaperBuffer, {}, {}), unsolicited.unsolicitedJournalPaperMessage, 'test unsolicited - Journal Paper Exhausted');
    t.same(ndc.decode(unsolicited.unsolicitedReceiptPaper, {}, {}), unsolicited.unsolicitedMessageReceiptPaperMessage, 'test unsolicited - Receipt Paper Exhausted');
    t.same(ndc.decode(unsolicited.unsolicitedReceiptPaperLow, {}, {}), unsolicited.unsolicitedMessageReceiptPaperLowMessage, 'test unsolicited - Receipt Paper Low');
    t.same(ndc.decode(unsolicited.unsolicitedEjectCard, {}, {}), unsolicited.unsolicitedEjectCardMessage, 'test unsolicited - Unable to eject card');
    t.end();
});
