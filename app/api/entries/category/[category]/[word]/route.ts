import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Entry } from "@/lib/props";

export async function GET(
  request: Request,
  { params }: { params: { category: string; word: string } }
) {
  try {
    const db = await connectToDatabase();
    const formattedCategory = decodeURIComponent(params.category).replace(/_/g, " & ").toLowerCase();
    const formattedWord = decodeURIComponent(params.word).toLowerCase();

    const entry = await db.collection<Entry>("entries").findOne({
      category: formattedCategory,
      word: { $regex: new RegExp(`^${formattedWord}$`, "i") },
    });

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