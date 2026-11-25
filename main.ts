import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One original dad joke for the Dad Joke Showdown.
// Draft 3 (final): shortest, pun word "timing" lands as the very last word.
const joke =
  "Kids, I seasoned tonight's chicken with thyme — because a legendary dinner is all about the timing.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
console.log(`Wrote ${joke.length} characters to /output/entry.txt`);
