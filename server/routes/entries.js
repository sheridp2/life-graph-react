import express from "express";

import { createEntry, getEntriesByUserId } from "../controllers/entry.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createEntry);
router.get("/:id", getEntriesByUserId);

export default router;
