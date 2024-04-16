const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
  airline: { 
    type: String,
    enum: ['American', 'Southwest', 'United', 'Delta']
  },
  airport: { 
    type: String,
    enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    default: 'LAX'
  },
  flightNo: { 
    type: Number,
    required: true
  },
  departs: { 
    type: Date,
    default: function() {
      const today = new Date();
      const year = today.getFullYear();
      return today.setFullYear(year + 1);
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Flight', flightSchema);