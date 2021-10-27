import mongoose from "mongoose";

const entrySchema = mongoose.Schema({
  date: { type: Date, default: Date.now },
  title: String,
  name: String,
  creator: String,
  body: String,
  highScore: Number,
  lowScore: Number,
  highBody: String,
  lowBody: String,
  todaysScore: Number,
  tags: [String],
});

const JournalEntry = mongoose.model("JournalEntry", entrySchema);

export default JournalEntry;
