import { NextResponse } from "next/server";

export function GET() {
  return NextResponse.json({ 
    hello: "Hello world"
   });
}

export function POST() {
  return NextResponse.json({ 
    hello: "Hello world"
   });
}
export function PATH() {
  return NextResponse.json({ 
    hello: "Hello world"
   });
}