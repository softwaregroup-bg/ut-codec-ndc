var specificErrors = require('./map').specificErrors;

module.exports = (defineError) => {
    const Aptra = defineError('aptra');
    const CommandReject = defineError('commandReject', Aptra, 'Command reject');
    const Timeout = defineError('timeout', Aptra, 'Transaction timed out');
    const Decode = defineError('decode', Aptra, 'No parser found');
    const UnknownMessageClass = defineError('unknownMessageClass', Aptra, 'Received unknown message class');

    var errors = {
        aptra: Aptra,
        commandReject: CommandReject,
        decode: Decode,
        timeout: Timeout,
        unknownMessageClass: UnknownMessageClass,
        customReject: (status) => ((errors[status] || defineError(status, CommandReject, 'Specific command reject'))())
    };

    return Object.keys(specificErrors).reduce((a, c) => {
        a[c] = defineError(c, CommandReject, specificErrors[c]);
        return a;
    }, errors);
};
