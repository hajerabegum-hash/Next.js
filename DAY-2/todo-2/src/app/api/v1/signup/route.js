// import bcrypt from "bcrypt";
// import { NextResponse } from "next/server";

// import { connectDB, userModel } from "@/utils/db";

// export async function GET() {
//   return NextResponse.json({ message: "Signup route is ready." });
// }

// export async function POST(req) {
//   try {
//     const { username, email, password } = await req.json();

//     if (!username || !email || !password) {
//       return NextResponse.json(
//         { message: "Username, email, and password are required." },
//         { status: 400 },
//       );
//     }

//     await connectDB();

//     const normalizedEmail = String(email).trim().toLowerCase();
//     const existingUser = await userModel.findOne({ email: normalizedEmail });

//     if (existingUser) {
//       return NextResponse.json(
//         { message: "An account with this email already exists." },
//         { status: 409 },
//       );
//     }

//     const hashedPassword = await bcrypt.hash(String(password), 10);
//     const user = await userModel.create({
//       username: String(username).trim(),
//       password: hashedPassword,
//       email: normalizedEmail,
//     });

//     return NextResponse.json(
//       {
//         message: "User created successfully.",
//         user: {
//           id: user._id,
//           username: user.username,
//           email: user.email,
//         },
//       },
//       { status: 201 },
//     );
//   } catch (error) {
//     return NextResponse.json(
//       {
//         message: "Something went wrong while creating the account.",
//         error: error.message,
//       },
//       { status: 500 },
//     );
//   }
// }

import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

import { userModel } from "@/utils/db";

export async function POST(req) {
  const { username, email, password } = await req.json();

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });

  return NextResponse.json({
    message: "User created successfully.",
    user,
  });
}
