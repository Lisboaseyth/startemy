import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  const cookiesState = cookies();
  const token = (await cookiesState).get("token")?.value;

  const res = await fetch(`${baseUrl}/api/token/verify-refresh`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });
  const data = await res.json();
  return NextResponse.json(data, { status: res.status });
}
