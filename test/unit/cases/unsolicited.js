const tap = require('tap');

module.exports = (lib) => {
    const instance = lib.init();
    const unsolicited = instance.config.test.unsolicited;

    tap.test('unsolicited', (t) => {
        t.same(instance.NDC.decode(unsolicited.unsolicitedSupervisorModeEnter, {}, {}), unsolicited.unsolicitedSupervisorModeEnterMessage, 'test unsolicited - Supervisor mode enter');
        t.same(instance.NDC.decode(unsolicited.unsolicitedSupervisorMode, {}, {}), unsolicited.unsolicitedSupervisorModeMessage, 'test unsolicited - Supervisor mode keys');
        t.same(instance.NDC.decode(unsolicited.unsolicitedSupervisorModeExit, {}, {}), unsolicited.unsolicitedSupervisorModeExitMessage, 'test unsolicited - Supervisor mode exit');
        t.same(instance.NDC.decode(unsolicited.unsolicitedCardNotTakenBuffer, {}, {}), unsolicited.unsolicitedCardNotTakenMessage, 'test unsolicited - Card not taken');
        t.same(instance.NDC.decode(unsolicited.unsolicitedCashRetractedBuffer, {}, {}), unsolicited.unsolicitedCashRetractedMessage, 'test unsolicited - Cash retracted');
        t.same(instance.NDC.decode(unsolicited.unsolicitedJournalPaperBuffer, {}, {}), unsolicited.unsolicitedJournalPaperMessage, 'test unsolicited - Journal Paper Exhausted');
        t.same(instance.NDC.decode(unsolicited.unsolicitedReceiptPaper, {}, {}), unsolicited.unsolicitedMessageReceiptPaperMessage, 'test unsolicited - Receipt Paper Exhausted');
        t.same(instance.NDC.decode(unsolicited.unsolicitedReceiptPaperLow, {}, {}), unsolicited.unsolicitedMessageReceiptPaperLowMessage, 'test unsolicited - Receipt Paper Low');
        t.same(instance.NDC.decode(unsolicited.unsolicitedEjectCard, {}, {}), unsolicited.unsolicitedEjectCardMessage, 'test unsolicited - Unable to eject card');
        t.end();
    });
};
