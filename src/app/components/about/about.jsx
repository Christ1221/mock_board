"use client";
import styles from "./css/about.module.css";

export default function About() {
  return (
    <main className={styles.main}>
      {/* Breadcrumb */}
      <section className={styles.breadcrumb}>
        <p>
          Home / <span className={styles.grayText}>About Librarian’s Hub</span>
        </p>
      </section>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <img
          src="/logo.png"
          alt="Librarian’s Hub"
          className={styles.logo}
        />
        <h1 className={styles.title}>About the Librarian’s Hub</h1>
        <p className={styles.description}>
          The Librarian’s Hub is dedicated to supporting aspiring and practicing
          librarians in their journey toward professional excellence. We provide
          free, accessible, and quality resources for exam preparation and continuing
          education.
        </p>
      </section>

      {/* Mission Section */}
      <section className={styles.missionSection}>
        <div className={styles.missionContainer}>
          <h2 className={styles.sectionTitle}>📘 Our Mission</h2>
          <p className={styles.missionText}>
            To empower current and future librarians by providing open access to
            study materials, review resources, and guidance that enhance their
            knowledge, competence, and confidence in the field of library and
            information science.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className={styles.visionSection}>
        <h2 className={styles.sectionTitle}>🌟 Our Vision</h2>
        <p className={styles.visionText}>
          To be the most trusted online platform for librarianship review and
          professional growth — cultivating a community where learning, sharing,
          and service thrive together.
        </p>
      </section>

      {/* Core Values */}
      <section className={styles.valuesSection}>
        <h2 className={styles.sectionTitle}>💡 Our Core Values</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Knowledge</h3>
            <p>
              We promote continuous learning and sharing of knowledge across all
              areas of librarianship.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Integrity</h3>
            <p>
              We uphold honesty, transparency, and ethical responsibility in
              every aspect of service.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Service</h3>
            <p>
              We believe in helping others through access to information,
              collaboration, and guidance.
            </p>
          </div>

          <div className={styles.valueCard}>
            <h3 className={styles.valueTitle}>Excellence</h3>
            <p>
              We aim to deliver high-quality content that supports success in
              board exams and lifelong learning.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
