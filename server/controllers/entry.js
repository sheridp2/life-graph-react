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

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getEntriesByUserId = async (req, res) => {
  const { id } = req.params;

  try {
    const entries = await JournalEntry.find({
      creator: id,
    });
    res.json({ data: entries });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
