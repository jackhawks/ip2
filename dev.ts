#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

Deno.cron("sample cron", "*/3 * * * *", () => {
  console.log("cron job executed every 10 minutes");
});

await dev(import.meta.url, "./main.ts", config);
