const mongoose = require('mongoose');


const SettingsSchema = new mongoose.Schema({
    facebook: { type: String, default: '' }
}, { timestamps: true }
);

/**
 * @typedef Settings
 */

module.exports = mongoose.model('Settings', SettingsSchema);