const settings = require('../settings');

function isOwner(8609400975) {
    // Get owner number from settings
    const ownerJid = settings.ownerNumber + "@s.whatsapp.net";
    return senderId === ownerJid;
}

module.exports = isOwner;
