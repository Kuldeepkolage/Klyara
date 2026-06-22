import styles from './StatCard.module.css';

const StatCard = ({ icon, label, value, unit, change, changeType = 'positive', gradient, size = 'md' }) => {
  const isPositive = changeType === 'positive';

  return (
    <div className={`${styles.card} ${styles[`card--${size}`]}`}>
      <div className={styles.header}>
        <div className={styles.iconWrap} style={{ background: gradient }}>
          {icon}
        </div>
        {change !== undefined && (
          <span className={`${styles.change} ${isPositive ? styles['change--up'] : styles['change--down']}`}>
            {isPositive ? '↑' : '↓'} {Math.abs(change)}%
          </span>
        )}
      </div>
      <div className={styles.body}>
        <div className={styles.valueRow}>
          <span className={styles.value}>{value}</span>
          {unit && <span className={styles.unit}>{unit}</span>}
        </div>
        <span className={styles.label}>{label}</span>
      </div>
      <div className={styles.shimmer} />
    </div>
  );
};

export default StatCard;