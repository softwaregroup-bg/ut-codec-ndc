module.exports = ({busConfig, errors, config, mainLib}) => {
    const busConfigGlobal = busConfig;
    const configGlobal = config;
    const errorsGlobal = errors;

    const init = ({busConfig, config, errors}) => Object.assign(
        {[`_id_${Math.random()}`]: 'id'},
        mainLib,
        {config},
        {errors},
        {
            bus: {
                importMethod: (method) => (msg) => Promise.resolve(busConfig[method](msg)),
                config: ((busConfig && busConfig.config) || {})
            },
            log: {error: () => {}, log: () => {}}
        }
    );
    return {
        init: ({busConfig, errors, config} = {}) => {
            var inst = init({
                busConfig: ((busConfig && Object.assign({}, busConfigGlobal, {config: busConfig})) || busConfigGlobal),
                config: ((config && Object.assign({}, configGlobal, config)) || configGlobal),
                errors: ((errors && Object.assign({}, errorsGlobal, errors)) || errorsGlobal)
            });
            // inst.start();
            return inst;
        }
    };
};
