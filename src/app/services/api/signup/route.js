"use server";
import getDB from '../connections/route';
import { hashPassword } from '../../../utilities';
import { NextResponse } from 'next/server';

export async function POST(req) {

  let connection = await getDB();

  try {
    const body = await req.json();
    const { name, email, password, role } = body || {};

    if (!email || !password) {
      return NextResponse.json({ success: false, message: 'email and password are required' }, { status: 404 });
    }

    // Check if user already exists
    const [rows] = await connection.query('SELECT id FROM user WHERE email = ?', [email]);
    if (rows.length > 0) {
      return NextResponse.json({ success: false, message: 'User already exists' }, { status: 409 });
    }

    // INSERT new user
    const hashed = await hashPassword(password);

    await connection.query(
      'INSERT INTO user (password, email, name, role) VALUES (?, ?, ?, ?)',
      [hashed, email, name, role]
    );


    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error('signup route error', err);
    return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}
