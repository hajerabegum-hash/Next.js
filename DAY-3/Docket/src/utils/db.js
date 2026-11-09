// import { userModel } from "@/utils/db";
// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// export async function POST(req) {
//   const { username, email, password } = await req.json();
//   const hashedpassword = await bcrypt.hash(password, 5);
//   const feedback = await userModel("users").create({
//     username,
//     email,
//     password: hashedpassword,
//   });
//   return NextResponse.json({
//     message: "User POST ROUTE created successfully",
//     feedback,
//   });
// }
// import mongoose from "mongoose";

// const connectionString = process.env.DATABASE_URL;

// export async function connectDB() {
//   if (!connectionString) {
//     throw new Error("DATABASE_URL is not defined");
//   }

//   if (mongoose.connection.readyState === 1) {
//     return;
//   }

//   await mongoose.connect(connectionString, {
//     dbName: "Docket",
//   });
// }

// export const userModel =
//   mongoose.models.users ||
//   mongoose.model(
//     "users",
//     new mongoose.Schema(
//       {
//         username: {
//           type: String,
//           required: true,
//           trim: true,
//         },
//         email: {
//           type: String,
//           required: true,
//           unique: true,
//           trim: true,
//           lowercase: true,
//         },
//         password: {
//           type: String,
//           required: true,
//         },
//       },
//       { timestamps: true },
//     ),
//   );

import mongoose from "mongoose";

export async function connectDB() {
  if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is not defined");
  }

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(process.env.DATABASE_URL, {
    dbName: "Docket",
  });
}

export const userModel =
  mongoose.models.User ||
  mongoose.model(
    "User",
    new mongoose.Schema(
      {
        username: {
          type: String,
          required: true,
          trim: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
          trim: true,
          lowercase: true,
        },
        password: {
          type: String,
          required: true,
        },
      },
      { timestamps: true },
    ),
  );
