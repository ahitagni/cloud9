module.exports = function setup(options, imports, register) {
    imports["client-plugins"].register("quickstart", __dirname);
    register(null, {
        "ext.quickstart": {}
    })
};