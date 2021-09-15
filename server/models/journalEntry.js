import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  name: String,
  creator: String,
  body: String,
  highScore: Number,
  lowScore: Number,
  highBody: String,
  lowBody: String,
  tags: [String],
});

const JournalEntry = mongoose.model("JournalEntry", entrySchema);

export default JournalEntry;
