import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  mkdirSync(outputDir, { recursive: true });
  copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`Failed to copy VIDEO.json from ${botDir} to ${outputDir}: ${detail}`);
  process.exit(1);
}
