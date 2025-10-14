import React from "react";
import styles from "./about.module.css"; // ✅ import the CSS file

export default function About() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <section className={styles.breadcrumb}>
        <p>
          Home / <span className={styles.grayText}>About PRC Board Reviewers PH</span>
        </p>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <img
          src="/logo.png" // change this to your actual logo path
          alt="PRC Board Reviewers PH"
          className={styles.logo}
        />
        <h1 className={styles.title}>About PRC Board Reviewers PH</h1>
        <p className={styles.description}>
          PRC Board Reviewers PH is dedicated to helping aspiring professionals
          pass their board exams with confidence. We provide free, quality
          reviewers for Civil Service, LET, Criminology, and more.
        </p>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <h2 className={styles.sectionTitle}>🎯 Our Mission</h2>
          <p className={styles.missionText}>
            At PRC Board Reviewers PH, our mission is to empower aspiring
            professionals by providing free, accessible, and high-quality online
            reviewers for Civil Service, LET, Criminology, NAPOLCOM, Librarian,
            Midwifery, and more. We believe that education should be available
            to everyone, anytime, anywhere.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <h2 className={styles.sectionTitle}>🎯 Our Vision</h2>
        <p className={styles.visionText}>
          To be the leading free online platform that empowers every Filipino to
          achieve their dreams through quality and accessible board exam
          reviewers.
        </p>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>💡 Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Accessibility</h3>
            <p>
              We believe that every aspiring professional deserves free access
              to quality learning resources.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Excellence</h3>
            <p>
              We commit to providing reliable and updated reviewers that help
              users pass their exams confidently.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Integrity</h3>
            <p>
              We uphold honesty and transparency in delivering accurate
              information and fair assessments.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Empowerment</h3>
            <p>
              We aim to empower Filipinos to achieve their goals and uplift
              their communities through education.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
