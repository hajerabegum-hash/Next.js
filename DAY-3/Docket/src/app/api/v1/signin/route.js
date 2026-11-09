import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { connectDB, userModel } from "@/utils/db";

export async function GET() {
  return NextResponse.json({ message: "Signin route is ready." });
}

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required." },
        { status: 400 },
      );
    }

    await connectDB();

    const user = await userModel.findOne({ email: String(email).trim().toLowerCase() });

    if (!user) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 },
      );
    }

    const isValidPassword = await bcrypt.compare(String(password), user.password);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "Invalid email or password." },
        { status: 401 },
      );
    }

    return NextResponse.json({
      message: "User signed in successfully.",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong while signing in.", error: error.message },
      { status: 500 },
    );
  }
}
