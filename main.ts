import { mkdirSync, writeFileSync } from "node:fs";

const TEXT =
  "I A/B tested two versions of your report. Version B won with 94% confidence. Version B was blank. Blank is very confident.";

// Gate: entry must be 1-140 characters of non-whitespace UTF-8 text.
if (TEXT.length < 1 || TEXT.length > 140 || TEXT.trim().length === 0) {
  throw new Error(`entry length ${TEXT.length} is outside the 1-140 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");
