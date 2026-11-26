// One-line joke entry for make.fun's "Make the Judge Laugh in One Line" bounty.
// Judge fit: a stranger gets it on first read (calendar, free time, meeting),
// the setup flips at the end (the meeting is with me, titled "Explain Yourself"),
// and the laugh lands on the last words with no explanation needed.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE = "I asked my calendar to protect my free time, and it scheduled a meeting with me titled 'Explain Yourself.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outFile = outDir + "/entry.txt";
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
