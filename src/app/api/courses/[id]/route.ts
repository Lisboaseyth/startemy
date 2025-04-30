import { NextRequest, NextResponse } from "next/server";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id;

  const referer = req.headers.get("referer") ?? "";
  const origin = referer ? new URL(referer).origin : "";

  const response = await fetch(`${baseUrl}/api/courses/?id=${id}`, {
    method: "GET",
    headers: new Headers({
      "Content-Type": "application/json",
      Accept: "application/json",
      Origin: origin
    })
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
