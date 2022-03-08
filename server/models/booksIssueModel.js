const mongoose = require('mongoose');

const bookIssueSchema = mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'student',
        required: true
    },
    book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'books',
        required: true
    },
    request: {
        type: Boolean,
        default: false
    },
    issueStatus: {
        type: Boolean,
        default: false
    },
    returned: {
        type: Boolean,
        default: false
    },
    issueDate: {
        type: Date,
        default: undefined
    },
    returnDate: {
        type: Date,
        default: undefined
    },
    issueFine:{
        type:Number,
        min:0,
        default:0
    }

}, {
    timestamps: true
});

module.exports = mongoose.model('issue',bookIssueSchema);
