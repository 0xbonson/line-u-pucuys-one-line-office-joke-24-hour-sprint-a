// Production entry script for One-Line Office Joke
import * as fs from 'node:fs';
import * as path from 'node:path';

const ENTRY_TEXT = "I put \"quick sync\" in the invite because \"forty-five minutes of emotional hostage-taking\" was too long.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || '/output';
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'entry.txt'), ENTRY_TEXT + '\n');
