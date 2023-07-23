import { NextRequest, NextResponse } from "next/server";

export function GET(req: Request, res: NextResponse) {
  return NextResponse.json({ message: "Hello world" });
}

// export async function GET() {
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json()

//   return NextResponse.json({ data })
// }

// export async function GET(request: Request) {
//     return new Response('Hello, Next.js!', {
//       status: 200,
//       headers: {
//         'Access-Control-Allow-Origin': '*',
//         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
//         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
//       },
//     })
//   }

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const id = searchParams.get("id");
//   const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
//     headers: {
//       "Content-Type": "application/json",
//       "API-Key": process.env.DATA_API_KEY,
//     },
//   });
//   const product = await res.json();

//   return NextResponse.json({ product });
// }
