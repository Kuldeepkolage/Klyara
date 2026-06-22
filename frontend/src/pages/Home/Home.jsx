import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import Button from '../../components/ui/Button';
import FeatureCard from '../../components/ui/FeatureCard';
import styles from './Home.module.css';

const FEATURES = [
  {
    icon: '🤖',
    title: 'AI-Powered Plans',
    description: 'Adaptive workout and nutrition plans that evolve with your performance, goals, and recovery data.',
    gradient: 'linear-gradient(135deg, rgba(124,58,237,0.3), rgba(124,58,237,0.1))',
  },
  {
    icon: '🏋️',
    title: 'Smart Workouts',
    description: 'Access 500+ expert-designed workouts with real-time guidance and auto-progression built in.',
    gradient: 'linear-gradient(135deg, rgba(37,99,235,0.3), rgba(37,99,235,0.1))',
  },
  {
    icon: '🥗',
    title: 'Precision Nutrition',
    description: 'Track macros, calories, and micronutrients with a library of 2M+ foods and smart meal suggestions.',
    gradient: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(16,185,129,0.1))',
  },
  {
    icon: '📊',
    title: 'Deep Analytics',
    description: 'Beautiful dashboards reveal trends in your body composition, strength, and overall wellness score.',
    gradient: 'linear-gradient(135deg, rgba(245,158,11,0.3), rgba(245,158,11,0.1))',
  },
  {
    icon: '⚡',
    title: 'Streak Engine',
    description: 'Gamified consistency system keeps motivation high. Build habits that actually stick this time.',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.3), rgba(239,68,68,0.1))',
  },
  {
    icon: '🔄',
    title: 'Seamless Sync',
    description: 'Connects with Apple Health, Google Fit, Garmin, WHOOP, and 40+ wearables automatically.',
    gradient: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(6,182,212,0.1))',
  },
];

const STEPS = [
  { num: '01', title: 'Create your profile', desc: 'Set your goals, current fitness level, dietary preferences, and schedule in under 3 minutes.' },
  { num: '02', title: 'Get your AI plan', desc: 'Klyra builds a personalized workout and nutrition roadmap optimized for your exact starting point.' },
  { num: '03', title: 'Track your progress', desc: 'Log workouts, meals, and body metrics. Watch your analytics update in real time.' },
  { num: '04', title: 'Adapt and thrive', desc: 'Your plan continuously evolves based on your results, making sure you never hit a plateau.' },
];

const BENEFITS = [
  { stat: '3.2×', label: 'faster results', sub: 'vs. unguided training' },
  { stat: '94%', label: 'stick to their plan', sub: 'after 90 days' },
  { stat: '500+', label: 'expert workouts', sub: 'across all levels' },
  { stat: '2M+', label: 'foods tracked', sub: 'in our nutrition DB' },
];

const TESTIMONIALS = [
  {
    name: 'Priya Menon',
    role: 'Software Engineer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=priya',
    text: 'Lost 12kg in 4 months while building real strength. Klyra finally made tracking feel effortless.',
  },
  {
    name: 'Arjun Sharma',
    role: 'Product Designer',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=arjun',
    text: 'The AI plan adapts faster than any coach I\'ve had. My lifts went up 40% in a single quarter.',
  },
  {
    name: 'Ananya Patel',
    role: 'Startup Founder',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ananya',
    text: 'As someone with zero free time, Klyra\'s 20-minute intelligent workouts changed everything.',
  },
];

const Home = () => {
  return (
    <div className={styles.page}>
      <Navbar />

      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        {/* Ambient orbs */}
        <div className={`${styles.orb} ${styles.orb1}`} />
        <div className={`${styles.orb} ${styles.orb2}`} />
        <div className={`${styles.orb} ${styles.orb3}`} />
        <div className={styles.grid} aria-hidden="true" />

        <div className={`container ${styles.heroInner}`}>
          <div className={`${styles.badge} animate-fade-in`}>
            <span className={styles.badgeDot} />
            AI-Powered Wellness Platform · Now in Beta
          </div>

          <h1 className={`${styles.heroTitle} animate-fade-in`} style={{ animationDelay: '0.1s' }}>
            The last fitness app<br />
            you'll ever{' '}
            <span className={styles.gradientWord}>need.</span>
          </h1>

          <p className={`${styles.heroSub} animate-fade-in`} style={{ animationDelay: '0.2s' }}>
            Klyra combines adaptive AI workouts, precision nutrition tracking,
            and deep analytics into one breathtaking experience. Your transformation starts today.
          </p>

          <div className={`${styles.heroCta} animate-fade-in`} style={{ animationDelay: '0.3s' }}>
            <Link to="/register">
              <Button variant="primary" size="xl">
                Start free — no card needed
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="xl">
                See it in action →
              </Button>
            </Link>
          </div>

          <p className={styles.heroMeta} style={{ animationDelay: '0.4s' }}>
            Trusted by <strong>50,000+</strong> athletes and everyday warriors worldwide
          </p>

          {/* Hero visual */}
          <div className={`${styles.heroVisual} animate-fade-in`} style={{ animationDelay: '0.5s' }}>
            <div className={styles.dashPreview}>
              <div className={styles.previewBar}>
                <span className={styles.dot} style={{ background: '#EF4444' }} />
                <span className={styles.dot} style={{ background: '#F59E0B' }} />
                <span className={styles.dot} style={{ background: '#10B981' }} />
                <span className={styles.previewUrl}>app.klyra.ai/dashboard</span>
              </div>
              <div className={styles.previewBody}>
                <div className={styles.previewGrid}>
                  {[
                    { label: 'Calories', val: '1,842', unit: 'kcal', color: '#7C3AED', bar: 72 },
                    { label: 'Water', val: '2.1', unit: 'L', color: '#2563EB', bar: 60 },
                    { label: 'Streak', val: '14', unit: 'days', color: '#10B981', bar: 85 },
                    { label: 'Weight', val: '74.2', unit: 'kg', color: '#F59E0B', bar: 45 },
                  ].map((card) => (
                    <div key={card.label} className={styles.previewCard}>
                      <div className={styles.previewCardLabel}>{card.label}</div>
                      <div className={styles.previewCardValue}>
                        {card.val}<span style={{ fontSize: '12px', color: 'var(--text-muted)', marginLeft: '3px' }}>{card.unit}</span>
                      </div>
                      <div className={styles.previewBar2}>
                        <div style={{ width: `${card.bar}%`, background: card.color, height: '100%', borderRadius: '4px', transition: 'width 1s ease' }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.previewChart}>
                  <div className={styles.previewChartTitle}>Weekly Progress</div>
                  <div className={styles.chartBars}>
                    {[55, 70, 45, 90, 75, 85, 60].map((h, i) => (
                      <div key={i} className={styles.chartBar}>
                        <div className={styles.chartBarFill} style={{ height: `${h}%`, animationDelay: `${0.6 + i * 0.1}s` }} />
                        <span className={styles.chartDay}>{['M','T','W','T','F','S','S'][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Benefits Stats ─── */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            {BENEFITS.map((b) => (
              <div key={b.stat} className={styles.statItem}>
                <span className={styles.statNumber}>{b.stat}</span>
                <div>
                  <div className={styles.statLabel}>{b.label}</div>
                  <div className={styles.statSub}>{b.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Features ─── */}
      <section className="section" id="features">
        <div className="container">
          <div className={`${styles.sectionHead} text-center`}>
            <span className="badge">Everything you need</span>
            <h2 className={styles.sectionTitle}>
              Built for people who{' '}
              <span className="gradient-text">take results seriously</span>
            </h2>
            <p className={styles.sectionSub}>
              Every feature is engineered to reduce friction between you and the body you're working toward.
            </p>
          </div>
          <div className={`${styles.featuresGrid} stagger`}>
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="section" id="how-it-works">
        <div className={styles.howBg} />
        <div className="container">
          <div className={`${styles.sectionHead} text-center`}>
            <span className="badge">Simple process</span>
            <h2 className={styles.sectionTitle}>
              From sign-up to <span className="gradient-text">transformation</span>
            </h2>
          </div>
          <div className={styles.stepsGrid}>
            {STEPS.map((s, i) => (
              <div key={s.num} className={styles.step}>
                <div className={styles.stepNum}>{s.num}</div>
                {i < STEPS.length - 1 && <div className={styles.stepConnector} />}
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <p className={styles.stepDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials / Benefits ─── */}
      <section className="section" id="benefits">
        <div className="container">
          <div className={`${styles.sectionHead} text-center`}>
            <span className="badge">Real results</span>
            <h2 className={styles.sectionTitle}>
              People who <span className="gradient-text">transformed</span> with Klyra
            </h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className={styles.testimonial}>
                <p className={styles.testimonialText}>"{t.text}"</p>
                <div className={styles.testimonialAuthor}>
                  <img src={t.avatar} alt={t.name} className={styles.testimonialAvatar} />
                  <div>
                    <div className={styles.testimonialName}>{t.name}</div>
                    <div className={styles.testimonialRole}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaOrb1} />
        <div className={styles.ctaOrb2} />
        <div className="container">
          <div className={styles.ctaBox}>
            <span className="badge">Limited beta access</span>
            <h2 className={styles.ctaTitle}>
              Your transformation is<br />one click away.
            </h2>
            <p className={styles.ctaSub}>
              Join 50,000+ people already on their wellness journey. Free forever to start.
            </p>
            <div className={styles.ctaButtons}>
              <Link to="/register">
                <Button variant="primary" size="xl">Create free account</Button>
              </Link>
              <Link to="/dashboard">
                <Button variant="ghost" size="xl">Explore dashboard →</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;