import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const NAV_LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/#benefits', label: 'Benefits' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isDashboard = !['/', '/login', '/register'].includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const appNavLinks = [
    { href: '/dashboard', label: 'Dashboard', icon: '⚡' },
    { href: '/workout',   label: 'Workout',   icon: '🏋️' },
    { href: '/diet',      label: 'Diet',      icon: '🥗' },
    { href: '/progress',  label: 'Progress',  icon: '📈' },
  ];

  return (
    <header className={`${styles.navbar} ${scrolled ? styles['navbar--scrolled'] : ''}`}>
      <div className={styles.inner}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>K</span>
          <span className={styles.logoText}>klyra</span>
        </Link>

        {/* Desktop Nav */}
        {!isDashboard ? (
          <nav className={styles.desktopNav}>
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            ))}
          </nav>
        ) : (
          <nav className={styles.desktopNav}>
            {appNavLinks.map((l) => (
              <Link
                key={l.href}
                to={l.href}
                className={`${styles.navLink} ${location.pathname === l.href ? styles['navLink--active'] : ''}`}
              >
                <span className={styles.navIcon}>{l.icon}</span>
                {l.label}
              </Link>
            ))}
          </nav>
        )}

        {/* CTA */}
        <div className={styles.actions}>
          {isDashboard ? (
            <Link to="/profile" className={styles.avatar}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=klyra" alt="Profile" />
            </Link>
          ) : (
            <>
              <Link to="/login">
                <Button variant="ghost" size="sm">Log in</Button>
              </Link>
              <Link to="/register">
                <Button variant="primary" size="sm">Get Started</Button>
              </Link>
            </>
          )}

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${menuOpen ? styles['hamburger--open'] : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles['mobileMenu--open'] : ''}`}>
        {(!isDashboard ? NAV_LINKS.map(l => ({ href: l.href, label: l.label, icon: '' })) : appNavLinks).map((l) => (
          l.href.startsWith('/') ? (
            <Link key={l.href} to={l.href} className={styles.mobileLink}>
              {l.icon && <span>{l.icon}</span>} {l.label}
            </Link>
          ) : (
            <a key={l.href} href={l.href} className={styles.mobileLink}>
              {l.label}
            </a>
          )
        ))}
        {!isDashboard && (
          <div className={styles.mobileActions}>
            <Link to="/login"><Button variant="ghost" fullWidth>Log in</Button></Link>
            <Link to="/register"><Button variant="primary" fullWidth>Get Started</Button></Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;