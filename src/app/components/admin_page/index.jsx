"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./css/styles.module.css";
import { AuthGuard } from "../../utilities"; // make sure this protects admin

export default function AdminDashboard() {
  const router = useRouter();
  const [adminData, setAdminData] = useState({ name: "", email: "" });
  const [activeSection, setActiveSection] = useState("adminHome");

  const adminMenuItems = [
    { id: "adminHome", label: "Dashboard", dir: "/admin" },
    { id: "manageUsers", label: "Manage Users", dir: "/admin/manage-users" },
    { id: "manageExams", label: "Manage Exams", dir: "/admin/manage-exams" },
    { id: "results", label: "Results", dir: "/admin/results" },
    
  ];

  useEffect(() => {
    try {
      const adminStr = localStorage.getItem("admin");
      if (adminStr) {
        setAdminData(JSON.parse(adminStr));
      }
    } catch (error) {
      console.error("Error loading admin data:", error);
    }

    // Detect active page
    const path = window.location.pathname;
    const currentSection =
      adminMenuItems.find((item) => item.dir === path)?.id || "adminHome";
    setActiveSection(currentSection);
  }, []);

  return (
    <AuthGuard>
      <div className={styles.dashboardContainer}>
        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.logo}>
            <Image
              src="/logo.png"
              alt="Mock Board Logo"
              width={90}
              height={90}
              className={styles.logoImage}
            />
            <p className={styles.adminTitle}>ADMIN PANEL</p>
          </div>

          <nav className={styles.nav}>
            {adminMenuItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${
                  activeSection === item.id ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveSection(item.id);
                  router.push(item.dir);
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <main className={styles.mainContent}>
          <header className={styles.header}>
            <div></div>

            <div className={styles.userSection}>
              <div className={styles.userProfile}>
                <Image
                  src="/admin.png"
                  alt="Admin avatar"
                  width={50}
                  height={50}
                  className={styles.avatar}
                />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{adminData.name}</span>
                  <span className={styles.userEmail}>{adminData.email}</span>
                </div>
              </div>

              <button
                className={styles.logoutBtn}
                onClick={() => {
                  localStorage.removeItem("admin");
                  router.push("/admin-login");
                }}
              >
                Logout
              </button>
            </div>
          </header>

          {/* DASHBOARD CONTENT */}
          <div className={styles.content}>
            <h2 className={styles.sectionTitle}>Admin Dashboard Overview</h2>

            <div className={styles.statsGrid}>
              <div className={styles.statsCard}>
                <h3>Total Users</h3>
                <p className={styles.statNumber}>235</p>
              </div>

              <div className={styles.statsCard}>
                <h3>Mock Exams Created</h3>
                <p className={styles.statNumber}>42</p>
              </div>

              <div className={styles.statsCard}>
                <h3>Completed Exam Sessions</h3>
                <p className={styles.statNumber}>510</p>
              </div>

              <div className={styles.statsCard}>
                <h3>Active Students Today</h3>
                <p className={styles.statNumber}>78</p>
              </div>
            </div>

            <div className={styles.reviewerHubWrapper}>
              <div className={styles.reviewerHub}>
                <h2>Admin Control Center</h2>
                <p>Manage users, exams, results, and system settings.</p>
                <button
                  className={styles.startBtn}
                  onClick={() => router.push("/admin/manage-users")}
                >
                  Manage Users
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
