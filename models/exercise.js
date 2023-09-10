const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
  exercise_name: { type: String, required: true, maxLength: 30 },
  variation: { type: String, required: true, maxLength: 30 },
  target_muscles: [{ type: String, required: true }],
  form_cues: [{ type: String , required: true}],
  other_notes: [{ type: String }],
});

// Virtual for exercise's URL
ExerciseSchema.virtual('url').get(function () {
  return `/exercises/${this._id}`;
});

// Export model
module.exports = mongoose.model('Exercise', ExerciseSchema);
