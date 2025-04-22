import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const params = req.url.split("?")[1];

  const referer = req.headers.get("referer");
  const origin = new URL(referer ?? "").origin;
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon` + (params ? `?${params}` : ""),
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Origin: origin
      }
    }
  );

  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}