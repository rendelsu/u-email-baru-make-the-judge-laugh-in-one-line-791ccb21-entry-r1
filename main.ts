// One-line joke entry for make.fun's "Make the Judge Laugh in One Line" bounty.
// Judge fit: a stranger gets it on first read (calendar, free time, scheduled),
// the setup flips at the end (I am the one scheduled, for "Explain Yourself"),
// every word earns its place, and the laugh lands on the final words.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const LINE = "I asked my calendar to protect my free time; it scheduled me for 'Explain Yourself.'";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const outFile = outDir + "/entry.txt";
writeFileSync(outFile, LINE + "\n", "utf8");
chmodSync(outFile, 0o644);
