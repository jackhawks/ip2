import { json } from "stream/consumers"

export const dynamic = 'force-dynamic'

export async function GET(request: Request) {
    const headers = request.headers
    const a1 = headers.get("X-Forwarded-For")
    const a2 = headers.get("Forwarded")
    const a3 = headers.get("X-Real-IP") // Nginx
    const a4 = headers.get("True-Client-IP") // Cloudflare 和 Akamai
    const a5 = headers.get("X-Client-IP")
    const a6 = headers.get("CF-Connecting-IP") // Cloudflare


    for (const item in headers.entries()) {
        console.log(`${item[0]}: ${item[1]}`);
    }

 
    console.log(JSON.stringify({
        a1,
        a2,
        a3,
        a4,
        a5,
        a6
    }))


    return new Response('Hello, Next.js!', {
        status: 200
      })
}