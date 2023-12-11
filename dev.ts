#!/usr/bin/env -S deno run -A --watch=static/,routes/

import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";

import "$std/dotenv/load.ts";

import { Cron } from "croner";

const _scheduler : Cron = new Cron("* * * * * *", () => {
    console.log("This will run every second.");
});

await dev(import.meta.url, "./main.ts", config);
