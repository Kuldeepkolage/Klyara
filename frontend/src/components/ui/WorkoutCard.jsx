import styles from './WorkoutCard.module.css';
import Button from './Button';

const WorkoutCard = ({ workout }) => {
  const { name, category, duration, calories, difficulty, exercises, image, gradient } = workout;

  const difficultyColor = {
    Beginner:     '#10B981',
    Intermediate: '#F59E0B',
    Advanced:     '#EF4444',
  }[difficulty] || '#7C3AED';

  return (
    <div className={styles.card}>
      <div className={styles.header} style={{ background: gradient }}>
        <span className={styles.category}>{category}</span>
        <span className={styles.emoji}>{image}</span>
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.meta}>
          <span className={styles.metaItem}>⏱ {duration} min</span>
          <span className={styles.metaItem}>🔥 {calories} kcal</span>
          <span className={styles.metaItem}>💪 {exercises} exercises</span>
        </div>
        <div className={styles.footer}>
          <span
            className={styles.difficulty}
            style={{ color: difficultyColor, borderColor: `${difficultyColor}40`, background: `${difficultyColor}12` }}
          >
            {difficulty}
          </span>
          <Button variant="secondary" size="sm">Start</Button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutCard;