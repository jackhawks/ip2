import dev from "$fresh/dev.ts";
import config from "./fresh.config.ts";
import "$std/dotenv/load.ts";

// deno-lint-ignore ban-ts-comment
// @ts-ignore
// Deno.cron("Sample cron job", "*/1 * * * *", () => {
//     console.log("This will run every 10 minutes");
// });

await dev(import.meta.url, "./main.ts", config);
