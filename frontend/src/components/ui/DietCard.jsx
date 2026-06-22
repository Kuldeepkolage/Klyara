import styles from './DietCard.module.css';
import Button from './Button';

const DietCard = ({ meal }) => {
  const { name, calories, protein, carbs, fat, portion, icon } = meal;

  const macros = [
    { label: 'Protein', value: protein, color: '#7C3AED', unit: 'g' },
    { label: 'Carbs',   value: carbs,   color: '#2563EB', unit: 'g' },
    { label: 'Fat',     value: fat,     color: '#F59E0B', unit: 'g' },
  ];

  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <span className={styles.icon}>{icon}</span>
        <div className={styles.info}>
          <h4 className={styles.name}>{name}</h4>
          <span className={styles.portion}>{portion}</span>
        </div>
      </div>
      <div className={styles.macros}>
        {macros.map((m) => (
          <div key={m.label} className={styles.macro}>
            <span className={styles.macroValue} style={{ color: m.color }}>
              {m.value}{m.unit}
            </span>
            <span className={styles.macroLabel}>{m.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.right}>
        <span className={styles.calories}>{calories}</span>
        <span className={styles.kcal}>kcal</span>
      </div>
    </div>
  );
};

export default DietCard;