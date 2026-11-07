import { NextResponse } from "next/server";

import { connectDB, userModel } from "@/utils/db";

export async function GET() {
  await connectDB();

  const data = await userModel.find().select("-password");

  return NextResponse.json(
    { message: "Users fetched data successfully.", data },
    { status: 200 },
  );
}
