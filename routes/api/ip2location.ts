import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
  async GET(_req) {
    const _DATABASE_CODE_IPV4 = "DB11LITEBIN";
    const _DATABASE_CODE_IPV6 = "DB11LITEBINIPV6";
    const _DATABASE_CODE_IPV4_CSV = "DB11LITECSV";
    const _download_link =
      `https://www.ip2location.com/download/?token=UC6laGE02ampg1XvwpgGSABw2VzhZluHZ7nJkdSWOwZbDfrj1s86q9Q4pQ5q8o5V&file=${_DATABASE_CODE_IPV4_CSV}`;
    const response = await fetch(_download_link);
    const blob = await response.blob();
    return new Response(blob);
  },
};