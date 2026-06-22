import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const LINKS = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Workout', href: '/workout' },
  ],
  Health: [
    { label: 'Diet Tracker', href: '/diet' },
    { label: 'Progress', href: '/progress' },
    { label: 'AI Plans', href: '#' },
    { label: 'Community', href: '#' },
  ],
  Company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} />
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <span className={styles.logoIcon}>K</span>
              <span className={styles.logoText}>klyra</span>
            </Link>
            <p className={styles.tagline}>
              Transform. Track. Thrive.<br />
              Your AI-powered wellness journey starts here.
            </p>
            <div className={styles.socials}>
              {['𝕏', 'in', 'ig', 'yt'].map((s) => (
                <a key={s} href="#" className={styles.social}>{s}</a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([section, links]) => (
            <div key={section} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{section}</h4>
              <ul className={styles.linkList}>
                {links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className={styles.link}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>© 2025 Klyra Technologies. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#" className={styles.legalLink}>Privacy</a>
            <a href="#" className={styles.legalLink}>Terms</a>
            <a href="#" className={styles.legalLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;