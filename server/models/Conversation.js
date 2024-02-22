const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema(
{
    userId: 
    { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', 
        required: true 
    },

    customer: 
    { 
        type: String, 
        required: true 
    },
    
    messages: [
        {
            text: { type: String, required: true },
            timestamp: { type: Date, default: Date.now }
        }
    ]
}
);

module.exports = mongoose.model('Conversation', conversationSchema);
