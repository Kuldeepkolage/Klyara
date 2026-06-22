import styles from './Button.module.css';

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  ...props
}) => {
  const classes = [
    styles.btn,
    styles[`btn--${variant}`],
    styles[`btn--${size}`],
    fullWidth ? styles['btn--full'] : '',
    loading ? styles['btn--loading'] : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <span className={styles.spinner} aria-hidden="true" />
      )}
      {icon && !loading && <span className={styles.icon}>{icon}</span>}
      <span className={styles.label}>{children}</span>
      {iconRight && <span className={styles.iconRight}>{iconRight}</span>}
    </button>
  );
};

export default Button;