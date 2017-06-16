/* eslint-env node */
const EngineAddon = require('ember-engines/lib/engine-addon');

module.exports = EngineAddon.extend({
    name: 'ember-engine-admin',
    lazyLoading: false,
    included: function() {
        this._super.included(...arguments);
    }
});
