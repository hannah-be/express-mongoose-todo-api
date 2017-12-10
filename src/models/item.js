// Ensure we have established a connection to the database
const mongoose = require('./init')

// Define model
var Item = mongoose.model('Item', {
  description: { type: String, required: [true, 'You need to enter a description for this item.']},
  complete: { type: Boolean, required: [true, 'This item needs a completion status']}
})

module.exports = Item