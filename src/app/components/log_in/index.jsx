import styles from './css/styles.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
  

export default function LogIn() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Prevent SSR/client mismatch
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.email.trim() && formData.password.trim()) {
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem(
          'user',
          JSON.stringify({ name: 'John Doe', email: formData.email })
        );
        router.push('/dashboard');
      } else {
        alert('Please enter both email and password.');
      }
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h1 className={styles.title}>Log In</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Log In
          </button>
        </form>
        <p className={styles.switchText}>
          Don&apos;t have an account?{' '}
          <span
            className={styles.switchLink}
            onClick={() => router.push('/signup')}
          >
            Sign Up
          </span>
        </p>
      </div>
    </div>
  );
}
