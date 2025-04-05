import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Entry } from "@/lib/props";

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const db = await connectToDatabase();
    const entry = await db
      .collection<Entry>("entries")
      .findOne({ id: parseInt(params.id) });

    if (!entry) {
      return NextResponse.json(
        { error: "Entry not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(entry, { status: 200 });
  } catch (error) {
    console.error("Error fetching entry:", error);
    return NextResponse.json(
      { error: "Failed to fetch entry" },
      { status: 500 }
    );
  }
}