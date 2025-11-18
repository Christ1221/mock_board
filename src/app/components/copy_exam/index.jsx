"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./css/styles.module.css";

export default function PartExam() {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("part_exam");

  const menuItems = [
    { id: "home", label: "Home", dir: "/dashboard" },
    { id: "about", label: "About", dir: "/about" },
    { id: "exam", label: "Exam", dir: "/exam" },
  ];

 
  const subjects = [
    {
      title: "Library Organization & Management",
      desc: "Click to start the Test.",
    },
    {
      title: "Reference, Bibliography & User Services",
      desc: "Click to start the Test.",
    },
    {
      title: "Indexing & Abstracting",
      desc: "Click to start the Test.",
    },
    {
      title: "Cataloging & Classification",
      desc: "Click to start the Test.",
    },
    {
      title: "Selection & Acquisition",
      desc: "Click to start the Test.",
    },
    {
      title: "Information Technology",
      desc: "Click to start the Test.",
    },
  ];

  return (
    <div className={styles.dashboardContainer}>
      {/* ---------------- Sidebar (unchanged) ---------------- */}
      <aside className={styles.sidebar}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Mock Board Logo" width={100} height={100} className={styles.logoImage} />
          <Image src="/AYL_LOGO.png" alt="AYL Logo" width={100} height={100} className={styles.logoImage1} />
          <Image src="/sbit_logo.png" alt="SBIT Logo" width={100} height={100} className={styles.logoImage2} />
        </div>

        <nav className={styles.nav}>
          {menuItems.map((item) => (
            <button
              key={item.id}
              className={`${styles.navItem} ${activeSection === item.id ? styles.active : ""}`}
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

      {/* ---------------- MAIN CONTENT (rewritten) ---------------- */}
      <main className={styles.mainContent}>
        <div className={styles.mainWrapper}>
          {/* Page Header */}
          <h1 className={styles.pageTitle}>Librarian Licensure Examination (LLE) Subjects</h1>
          <p className={styles.pageSubtitle}>
            Choose a topic under <strong>Librarian Licensure Examination (LLE)</strong> to start reviewing.
          </p>

          {/* Subject Grid */}
          <div className={styles.subjectGrid}>
            {subjects.map((item, index) => (
              <div key={index} className={styles.subjectCard}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
                {/* If this is the Library Organization subject, add a Begin Test button */}
                {item.title.toLowerCase().includes('library organization') && (
                  <button
                    className={styles.beginBtn}
                    onClick={() => router.push('/part_exam/library-organization')}
                  >
                    Begin Test
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
