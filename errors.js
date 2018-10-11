const { specificErrors } = require('./map');

module.exports = ({defineError, getError, fetchErrors}) => {
    if (!getError('aptra')) {
        const Aptra = defineError('aptra', null, 'Aptra generic');
        const CommandReject = defineError('commandReject', Aptra, 'Command reject');

        defineError('timeout', Aptra, 'Transaction timed out');
        defineError('decode', Aptra, 'No parser found');
        defineError('unknownMessageClass', Aptra, 'Received unknown message class: {message class}');

        Object.keys(specificErrors).forEach(key => {
            defineError(key, CommandReject, specificErrors[key]);
        });
    }

    const CommandReject = getError('aptra.commandReject');
    const customReject = status => {
        return (getError(`aptra.commandReject.${status}`) || defineError(status, CommandReject, 'Specific command reject'))({});
    };

    return Object.assign({
        'aptra.customReject': customReject
    }, fetchErrors('aptra'));
};
