'use client';
import { jwtDecode } from 'jwt-decode';

export const handleGoogleSuccess = async (response) => {
  try {
    if (!response || !response.credential) {
      throw new Error('No credential returned from Google sign-in');
    }

    const decoded = jwtDecode(response.credential);
    const userData = {
      name: decoded.name || decoded.given_name || '',
      email: decoded.email || '',
      picture: decoded.picture || decoded.avatar || '',
      provider: 'google'
    };
    
    localStorage.setItem('isAuthenticated', 'true');
    localStorage.setItem('user', JSON.stringify(userData));
    return userData;
  } catch (error) {
    console.error('Error processing Google sign-in:', error);
    throw error;
  }
};