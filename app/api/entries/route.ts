import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Entry } from "@/lib/props";

export async function GET() {
  try {
    const db = await connectToDatabase();
    const entries = await db.collection<Entry>("entries").find({}).toArray();
    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch entries" },
      { status: 500 }
    );
  }
}