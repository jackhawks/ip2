import { PageProps } from "$fresh/server.ts";

export default function App({ Component }: PageProps) {
  const html_title = Deno.env.get("HTML_TITLE");
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{html_title}</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
