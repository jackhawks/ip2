/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import "$std/dotenv/load.ts";
import { start } from "$fresh/server.ts";
import manifest from "./fresh.gen.ts";
import config from "./fresh.config.ts";

// deno-lint-ignore ban-ts-comment
// @ts-ignore
// Deno.cron("Sample cron job", "*/1 * * * *", () => {
//   console.log("This will run every 10 minutes");
// });

await start(manifest, config);
