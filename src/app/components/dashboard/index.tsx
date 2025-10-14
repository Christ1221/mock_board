'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './css/dashboard.module.css';
import AuthGuard from './AuthGuard';

interface UserData {
  name: string;
  email: string;
}

interface MenuItem {
  id: string;
  label: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData>({ name: '', email: '' });
  const [activeSection, setActiveSection] = useState('overview');

  useEffect(() => {
    try {
      const userStr = localStorage.getItem('user');
      if (userStr) {
        setUserData(JSON.parse(userStr));
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  }, []);

  const menuItems: MenuItem[] = [
    { id: 'home', label: 'Home' },
    { id: 'exams', label: 'Mock Exams' },
    { id: 'about', label: 'About' },
    { id: 'donation', label: 'Donation' },
  ];

  return (
    <AuthGuard>
      <div className={styles.dashboardContainer}>
        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.logo}>
            <img src="/logo.png" alt="Mock Board Logo" className={styles.logoImage} />
            <img src="/AYL_LOGO.png" alt="AYL Logo" className={styles.logoImage1} />
            <img src="/sbit_logo.png" alt="SBIT Logo" className={styles.logoImage2} />
          </div>

          <nav className={styles.nav}>
            {menuItems.map((item) => (
              <button
                key={item.id}
                className={`${styles.navItem} ${activeSection === item.id ? styles.active : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className={styles.mainContent}>
          {/* Header */}
          <header className={styles.header}>
            <div className={styles.pageTitle}>
              {menuItems.find(item => item.id === activeSection)?.label}
            </div>
            <div className={styles.userSection}>
              <button className={styles.notificationBtn} aria-label="Notifications">
                🔔
              </button>
              <div className={styles.userProfile}>
                <img
                  src="logo.png"
                  alt="User avatar"
                  className={styles.avatar}
                />
                <div className={styles.userInfo}>
                  <span className={styles.userName}>{userData.name}</span>
                  <button 
                    className={styles.logoutBtn}
                    onClick={() => {
                      localStorage.removeItem('isAuthenticated');
                      localStorage.removeItem('user');
                      router.push('/login');
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </header>

          {/* Dashboard Content */}
          <div className={styles.content}>
            {/* Stats Cards */}
            <div className={styles.statsGrid}>
              <div className={styles.statsCard}>
                <h3>Mock Exams Completed</h3>
                <p className={styles.statNumber}>12</p>
              </div>
              <div className={styles.statsCard}>
                <h3>Average Score</h3>
                <p className={styles.statNumber}>85%</p>
              </div>
              <div className={styles.statsCard}>
                <h3>Study Hours</h3>
                <p className={styles.statNumber}>48</p>
              </div>
              <div className={styles.statsCard}>
                <h3>Days Until Exam</h3>
                <p className={styles.statNumber}>30</p>
              </div>
            </div>

            {/* Reviewer Hub Section */}
            <div className="reviewerHub">
              <h2>Your Ultimate Reviewer Hub</h2>
              <p>Where Future Librarians Turn Preparation into Success.</p>
              <button className="startBtn">Start Reviewing Now</button>
            </div>
          </div>
        </main>
      </div>
    </AuthGuard>
  );
}
