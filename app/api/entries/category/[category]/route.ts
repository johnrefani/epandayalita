import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import { Entry } from "@/data/props";

export async function GET(
  request: Request,
  { params }: { params: { category: string } }
) {
  try {
    const db = await connectToDatabase();
    const formattedCategory = decodeURIComponent(params.category).replace(/_/g, " & ").toLowerCase();
    const entries = await db
      .collection<Entry>("entries")
      .find({ category: formattedCategory })
      .toArray();

    if (entries.length === 0) {
      return NextResponse.json(
        { error: "No entries found for this category" },
        { status: 404 }
      );
    }

    return NextResponse.json(entries, { status: 200 });
  } catch (error) {
    console.error("Error fetching category entries:", error);
    return NextResponse.json(
      { error: "Failed to fetch category entries" },
      { status: 500 }
    );
  }
}