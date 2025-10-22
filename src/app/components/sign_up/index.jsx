"use client";
import styles from "./css/styles.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { handleGoogleSuccess } from "../../utilities/auth";

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    role: "student", // default role
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Save user info to localStorage (can be replaced with API later)
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          role: formData.role,
        })
      );

      // Redirect based on role
      if (formData.role === "admin") {
        router.push("/admin/dashboard");
      } else {
        router.push("/student/dashboard");
      }
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.signupBox}>
        <h2 className={styles.title}>Create Account</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="Enter your name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {/* ✅ Add Role Selection */}
          <div className={styles.inputGroup1}>
            <label htmlFor="role">Select Role</label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" className={styles.submitButton}>
            Sign Up
          </button>
        </form>

        <div className={styles.divider}>
          <span>Or</span>
        </div>

        <div className={styles.googleSignup}>
          <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
            {typeof window !== "undefined" && (
              <GoogleLogin
                onSuccess={async (response) => {
                  try {
                    await handleGoogleSuccess(response);
                    // Default Google users become "student"
                    localStorage.setItem(
                      "user",
                      JSON.stringify({
                        name: "Google User",
                        email: "google@example.com",
                        role: "student",
                      })
                    );
                    router.push("/student/dashboard");
                  } catch (error) {
                    console.error("Google signup failed:", error);
                    alert("Google signup failed. Please try again.");
                  }
                }}
                onError={(err) => {
                  console.error("Google Signup Failed", err);
                  alert("Google signup failed. Please try again.");
                }}
                text="signup_with"
              />
            )}
          </GoogleOAuthProvider>
        </div>

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
