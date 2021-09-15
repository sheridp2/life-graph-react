import express from "express";

import { createEntry } from "../controllers/entry.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth, createEntry);

export default router;
