import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Entry } from "@/lib/props";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  try {
    const db = await connectToDatabase();
    const entries = await db
      .collection<Entry>("entries")
      .find({ word: { $regex: query, $options: "i" } })
      .limit(10)
      .toArray();

    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("Error searching entries:", error);
    return NextResponse.json(
      { error: "Failed to search entries" },
      { status: 500 }
    );
  }
}