import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const sourceFile = join(botDir, "VIDEO.json");
const destFile = join(outputDir, "VIDEO.json");

try {
  const makeDirs = { recursive: true };
  mkdirSync(outputDir, makeDirs);
  copyFileSync(sourceFile, destFile);
} catch (caught) {
  const detail = caught instanceof Error ? caught.message : String(caught);
  console.error(`Could not place VIDEO.json into ${outputDir}: ${detail}`);
  throw new Error(detail);
}
