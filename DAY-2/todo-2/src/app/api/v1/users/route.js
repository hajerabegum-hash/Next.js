import { useModel } from "@/src/utils/db";
import { NextResponse } from "next/server";
export async function GET() {
  const data = await useModel.find().select("-password");
  return NextResponse.json(
    { message: "Users fetched data successfully.", data },
    { status: 200 },
  );
}
