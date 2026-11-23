// One Letter: Coffee or Tea — make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The entry is exactly one letter: A for coffee, B for tea.
// The sealed gate requires /output/entry.txt to be UTF-8 text of
// exactly 1 character, so this writes "A" with no trailing newline.
//
// Why A (coffee)? The judge weighs, in order: vivid, funny, true.
// Coffee is the more vivid of the two drinks — bitter, hot, a caffeine
// jolt, the morning ritual that wakes a room up — where tea is the
// calmer, gentler answer. As a single letter standing alone as a whole
// answer, "A" lands as the fuller, more alive stance: the first letter,
// the affirmative, the bold cup. That is the bet this entry makes.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// MAKEFUN_OUTPUT_DIR stands in for /output when the grader runs locally:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const entryPath = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(entryPath, "A", "utf8");

// Read-back self-check: the sealed gate accepts only exactly one
// character, so refuse to report success unless the file on disk is
// byte-for-byte the single letter we meant to send.
const written = readFileSync(entryPath, "utf8");
if (written !== "A") {
  console.error(
    `entry.txt is ${JSON.stringify(written)}, expected exactly "A"`,
  );
  process.exit(1);
}
console.log(`wrote ${entryPath}`);
