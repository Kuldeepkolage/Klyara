import { Link } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import StatCard from '../../components/ui/StatCard';
import Button from '../../components/ui/Button';
import { user, dashboardStats, quickActions, weeklyWorkouts } from '../../data/dummy';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import styles from './Dashboard.module.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(26,18,53,0.95)',
        border: '1px solid rgba(124,58,237,0.3)',
        borderRadius: '10px',
        padding: '10px 14px',
        fontSize: '13px',
        color: '#F8F7FF',
      }}>
        <p style={{ color: '#A78BFA', marginBottom: 4 }}>{label}</p>
        <p>🔥 {payload[0].value} kcal</p>
      </div>
    );
  }
  return null;
};

const Dashboard = () => {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening';

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.bg} />

      <main className={styles.main}>
        <div className="container">

          {/* Welcome */}
          <div className={styles.welcome}>
            <div className={styles.welcomeLeft}>
              <div className={styles.welcomeText}>
                <span className={styles.greeting}>{greeting} 👋</span>
                <h1 className={styles.welcomeName}>{user.name.split(' ')[0]},</h1>
                <p className={styles.welcomeSub}>
                  You're on a <strong className={styles.streak}>🔥 {user.streak}-day streak</strong>. Keep the momentum going!
                </p>
              </div>
              <div className={styles.welcomeActions}>
                <Link to="/workout">
                  <Button variant="primary" size="md">Start today's workout</Button>
                </Link>
                <Link to="/diet">
                  <Button variant="secondary" size="md">Log a meal</Button>
                </Link>
              </div>
            </div>
            <div className={styles.avatarWrap}>
              <img src={user.avatar} alt={user.name} className={styles.avatar} />
              <div className={styles.avatarBadge}>
                <span>{user.level}</span>
              </div>
            </div>
          </div>

          {/* Stat Cards */}
          <div className={`${styles.statsGrid} stagger`}>
            {dashboardStats.map((stat) => (
              <StatCard key={stat.id} {...stat} />
            ))}
          </div>

          {/* Main Grid */}
          <div className={styles.mainGrid}>

            {/* Chart */}
            <div className={styles.chartCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Weekly Calories Burned</h3>
                <span className={styles.cardBadge}>This week</span>
              </div>
              <div className={styles.chartWrap}>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={weeklyWorkouts} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                    <defs>
                      <linearGradient id="calGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%"  stopColor="#7C3AED" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#7C3AED" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="day" tick={{ fill: '#7C6FAE', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#7C6FAE', fontSize: 12 }} axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="calories"
                      stroke="#7C3AED"
                      strokeWidth={2.5}
                      fill="url(#calGrad)"
                      dot={{ fill: '#7C3AED', r: 4 }}
                      activeDot={{ r: 6, fill: '#A78BFA' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Today's Plan */}
            <div className={styles.planCard}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>Today's Plan</h3>
                <span className={styles.cardBadge}>Monday</span>
              </div>
              <div className={styles.planList}>
                {[
                  { time: '07:00', task: 'Morning run', icon: '🏃', done: true },
                  { time: '12:30', task: 'Track lunch', icon: '🥗', done: true },
                  { time: '18:00', task: 'Upper body workout', icon: '💪', done: false },
                  { time: '20:00', task: 'Log dinner', icon: '🍽️', done: false },
                  { time: '21:30', task: 'Log water intake', icon: '💧', done: false },
                ].map((item) => (
                  <div key={item.task} className={`${styles.planItem} ${item.done ? styles['planItem--done'] : ''}`}>
                    <span className={styles.planIcon}>{item.icon}</span>
                    <div className={styles.planInfo}>
                      <span className={styles.planTask}>{item.task}</span>
                      <span className={styles.planTime}>{item.time}</span>
                    </div>
                    <span className={styles.planStatus}>
                      {item.done ? '✅' : '○'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className={styles.section}>
            <h3 className={styles.sectionTitle}>Quick Actions</h3>
            <div className={styles.actionsGrid}>
              {quickActions.map((action) => (
                <Link key={action.label} to={action.href} className={styles.actionCard}>
                  <div className={styles.actionIcon} style={{ background: `${action.color}20`, border: `1px solid ${action.color}40` }}>
                    <span style={{ fontSize: '24px' }}>{action.icon}</span>
                  </div>
                  <span className={styles.actionLabel}>{action.label}</span>
                  <span className={styles.actionArrow}>→</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Progress Snapshot */}
          <div className={styles.progressSnap}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>Progress Snapshot</h3>
              <Link to="/progress"><Button variant="ghost" size="sm">See all →</Button></Link>
            </div>
            <div className={styles.snapGrid}>
              {[
                { label: 'Weight lost', value: '5.8', unit: 'kg', progress: 58, color: '#7C3AED' },
                { label: 'Goal reached', value: '65', unit: '%', progress: 65, color: '#2563EB' },
                { label: 'Workouts done', value: '42', unit: 'sessions', progress: 84, color: '#10B981' },
                { label: 'Calories deficit', value: '14.2k', unit: 'total', progress: 71, color: '#F59E0B' },
              ].map((item) => (
                <div key={item.label} className={styles.snapItem}>
                  <div className={styles.snapTop}>
                    <span className={styles.snapLabel}>{item.label}</span>
                    <span className={styles.snapVal}>{item.value} <span className={styles.snapUnit}>{item.unit}</span></span>
                  </div>
                  <div className={styles.snapTrack}>
                    <div className={styles.snapFill} style={{ width: `${item.progress}%`, background: item.color }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;