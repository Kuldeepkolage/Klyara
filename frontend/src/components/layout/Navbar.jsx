import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import styles from './Navbar.module.css';

const APP_ROUTES = ['/dashboard', '/workout', '/diet', '/progress', '/profile'];

const LANDING_LINKS = [
  { href: '#features',     label: 'Features'     },
  { href: '#programs',     label: 'Programs'     },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#pricing',      label: 'Pricing'      },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#blog',         label: 'Blog'         },
  { href: '#contact',      label: 'Contact'      },
];

const APP_LINKS = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/workout',   label: 'Workout'   },
  { href: '/diet',      label: 'Nutrition' },
  { href: '/progress',  label: 'Progress'  },
  { href: '#',          label: 'AI Coach'  },
  { href: '#',          label: 'Community' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isApp = APP_ROUTES.some((r) => location.pathname.startsWith(r));

  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen,   setSearchOpen]   = useState(false);
  const [searchVal,    setSearchVal]    = useState('');

  const dropdownRef = useRef(null);
  const searchRef   = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleAnchor = (e, href) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.clear();
    setDropdownOpen(false);
    navigate('/login');
  };

  const navClass = [
    styles.navbar,
    scrolled ? styles.scrolled   : '',
    menuOpen ? styles.menuActive : '',
  ].filter(Boolean).join(' ');

  /* Helper: render a plain anchor tag for landing nav links */
  const renderLandingLink = (href, label, extraClass) => (
    <a
      key={label}
      href={href}
      className={extraClass}
      onClick={(e) => handleAnchor(e, href)}
    >
      {label}
    </a>
  );

  return (
    <>
      <header className={navClass} role="banner">
        <div className={styles.inner}>

          {/* Logo */}
          <Link to="/" className={styles.logo} aria-label="Klyra home">
            <span className={styles.logoMark} aria-hidden="true">K</span>
            <span className={styles.logoName}>klyra</span>
          </Link>

          {/* Center Nav */}
          <nav className={styles.centerNav} aria-label="Primary navigation">
            {isApp
              ? APP_LINKS.map(({ href, label }) => (
                  <Link
                    key={label}
                    to={href}
                    className={[
                      styles.navLink,
                      location.pathname === href ? styles.navLinkActive : '',
                    ].filter(Boolean).join(' ')}
                  >
                    {label}
                    {location.pathname === href && (
                      <span className={styles.activePill} aria-hidden="true" />
                    )}
                  </Link>
                ))
              : LANDING_LINKS.map(({ href, label }) =>
                  renderLandingLink(href, label, styles.navLink)
                )}
          </nav>

          {/* Right Controls */}
          <div className={styles.rightControls}>
            {isApp ? (
              <>
                {/* Search */}
                <div className={styles.searchWrap} ref={searchRef}>
                  <button
                    className={styles.iconBtn}
                    aria-label="Search"
                    onClick={() => setSearchOpen((v) => !v)}
                  >
                    <SearchIcon />
                  </button>
                  <div className={[styles.searchPopover, searchOpen ? styles.searchPopoverOpen : ''].join(' ')}>
                    <SearchIcon />
                    <input
                      className={styles.searchInput}
                      placeholder="Search workouts, meals..."
                      value={searchVal}
                      onChange={(e) => setSearchVal(e.target.value)}
                      autoFocus={searchOpen}
                    />
                    {searchVal && (
                      <button className={styles.clearBtn} onClick={() => setSearchVal('')}>
                        x
                      </button>
                    )}
                  </div>
                </div>

                {/* Notifications */}
                <button className={styles.iconBtn} aria-label="Notifications">
                  <BellIcon />
                  <span className={styles.notifDot} aria-label="3 unread">3</span>
                </button>

                {/* Avatar + Dropdown */}
                <div className={styles.avatarWrap} ref={dropdownRef}>
                  <button
                    className={styles.avatarBtn}
                    onClick={() => setDropdownOpen((v) => !v)}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    aria-label="Account menu"
                  >
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=klyra"
                      alt="Your avatar"
                      className={styles.avatar}
                    />
                    <span className={styles.avatarChevron} aria-hidden="true">
                      <ChevronIcon open={dropdownOpen} />
                    </span>
                  </button>

                  <div
                    className={[styles.dropdown, dropdownOpen ? styles.dropdownOpen : ''].join(' ')}
                    role="menu"
                  >
                    <div className={styles.dropdownHeader}>
                      <img
                        src="https://api.dicebear.com/7.x/avataaars/svg?seed=klyra"
                        alt=""
                        className={styles.dropdownAvatar}
                      />
                      <div>
                        <p className={styles.dropdownName}>Arjun Sharma</p>
                        <p className={styles.dropdownEmail}>arjun@klyra.ai</p>
                      </div>
                    </div>
                    <div className={styles.dropdownDivider} />
                    <Link
                      to="/profile"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <UserIcon /> Profile
                    </Link>
                    <Link
                      to="/profile"
                      className={styles.dropdownItem}
                      role="menuitem"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <SettingsIcon /> Settings
                    </Link>
                    <div className={styles.dropdownDivider} />
                    <button
                      className={[styles.dropdownItem, styles.dropdownLogout].join(' ')}
                      role="menuitem"
                      onClick={handleLogout}
                    >
                      <LogoutIcon /> Log out
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className={styles.loginLink}>Log in</Link>
                <Link to="/register">
                  <Button variant="primary" size="sm">Get Started</Button>
                </Link>
              </>
            )}

            {/* Hamburger */}
            <button
              className={[styles.hamburger, menuOpen ? styles.hamburgerOpen : ''].join(' ')}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={[styles.mobileMenu, menuOpen ? styles.mobileMenuOpen : ''].join(' ')}
          aria-hidden={!menuOpen}
        >
          <nav className={styles.mobileNav}>
            {isApp
              ? APP_LINKS.map(({ href, label }) => (
                  <Link
                    key={label}
                    to={href}
                    className={[
                      styles.mobileLink,
                      location.pathname === href ? styles.mobileLinkActive : '',
                    ].filter(Boolean).join(' ')}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))
              : LANDING_LINKS.map(({ href, label }) =>
                  renderLandingLink(href, label, styles.mobileLink)
                )}
          </nav>

          {!isApp && (
            <div className={styles.mobileCta}>
              <Link to="/login" onClick={() => setMenuOpen(false)}>
                <Button variant="ghost" fullWidth>Log in</Button>
              </Link>
              <Link to="/register" onClick={() => setMenuOpen(false)}>
                <Button variant="primary" fullWidth>Get Started</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

/* ── Icons ──────────────────────────────────────────────────── */
const SearchIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const ChevronIcon = ({ open }) => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 250ms ease' }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const UserIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const LogoutIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

export default Navbar;