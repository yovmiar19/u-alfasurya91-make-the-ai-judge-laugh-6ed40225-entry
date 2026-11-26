// Make the AI Judge Laugh — one-line entry (Opus pick, 105 chars)
// Writes exactly one line to /output/entry.txt and nothing else.

import { writeFileSync, mkdirSync } from "node:fs";

const LINE =
  "The printer only jams when you're late, which makes it the most emotionally intelligent coworker we have.";

// Gate: one line, 1–200 chars, about office life.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(
    `entry line must be a single line of 1–200 chars, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
