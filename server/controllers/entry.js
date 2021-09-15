import mongoose from "mongoose";
import JournalEntry from "../models/journalEntry.js";

export const createEntry = async (req, res) => {
  const entry = req.body;
  const newEntry = new JournalEntry({
    ...entry,
    creator: req.userId,
    date: new Date().toISOString(),
  });

  try {
    await newEntry.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
