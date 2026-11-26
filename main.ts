import * as fs from "node:fs";

const line =
  "The coffee machine is just a passive-aggressive robot that dispenses disappointment one cup at a time.";

// Gate: one line, 1-200 chars, about office life.
if (line.length < 1 || line.length > 200 || line.includes("\n")) {
  throw new Error(`entry line must be a single line of 1-200 chars, got ${line.length}`);
}

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", line, "utf8");
