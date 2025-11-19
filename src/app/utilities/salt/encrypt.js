import bcrypt from 'bcryptjs';

export default async function hashPassword(password) {
  return await bcrypt.hash(password, 10);
}

