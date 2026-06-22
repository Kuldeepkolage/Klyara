import styles from './FeatureCard.module.css';

const FeatureCard = ({ icon, title, description, gradient, delay = 0 }) => {
  return (
    <div
      className={`${styles.card} animate-fade-in`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles.iconWrap} style={{ background: gradient }}>
        {icon}
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.glow} style={{ background: gradient }} />
    </div>
  );
};

export default FeatureCard;