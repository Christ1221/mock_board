"use client";
import styles from "./css/styles.module.css";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>Create Account</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className={styles.inputGroup}>
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className={styles.submitButton}>Sign Up</button>
        </form>
        <p className={styles.switchText}>
          Already have an account?{" "}
          <Link href="/login" className={styles.switchLink}>
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
}
