"use server";
import getDB from '../connections/route';
import { verifyPassword } from '../../../utilities';
import { NextResponse } from 'next/server';

export async function POST(req) {

  let connection = await getDB();

  try {
    const body = await req.json();
    const { email, password } = body || {};

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    // 1️⃣ SELECT the hashed password (important!)
    const [rows] = await connection.query(
      'SELECT id, password, name, role FROM user WHERE email = ?',
      [email]
    );

    // 2️⃣ Check if user exists
    if (rows.length === 0) {
      return NextResponse.json(
        { success: false, message: 'User does not exist' },
        { status: 404 }
      );
    }

    const user = rows[0];

    // 3️⃣ Compare passwords
    const isPasswordValid = await verifyPassword(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json(
        { success: false, message: 'Invalid password' },
        { status: 401 }
      );
    }

    // 4️⃣ Success
    return NextResponse.json(
      {
        success: true,
        message: "Login successful",
        user: {
          id: user.id,
          email,
          name: user.name,
          role: user.role
        }
      },
      { status: 200 }
    );

  } catch (err) {
    console.error('login route error', err);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}
