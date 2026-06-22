import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from '../../components/ui/Button';
import styles from './Login.module.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1400));
    setLoading(false);
    window.location.href = '/dashboard';
  };

  return (
    <div className={styles.page}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.card}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>K</span>
          <span className={styles.logoText}>klyra</span>
        </Link>

        <div className={styles.header}>
          <h1 className={styles.title}>Welcome back</h1>
          <p className={styles.sub}>Sign in to continue your wellness journey</p>
        </div>

        {/* Social */}
        <div className={styles.socials}>
          <button className={styles.socialBtn}>
            <span>G</span> Continue with Google
          </button>
          <button className={styles.socialBtn}>
            <span>🍎</span> Continue with Apple
          </button>
        </div>

        <div className={styles.divider}>
          <span>or sign in with email</span>
        </div>

        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.field}>
            <label className={styles.label}>Email</label>
            <input
              className={`input-base ${errors.email ? styles['input--error'] : ''}`}
              type="email"
              placeholder="you@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: { value: /^\S+@\S+\.\S+$/, message: 'Invalid email' },
              })}
            />
            {errors.email && <span className={styles.error}>{errors.email.message}</span>}
          </div>

          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label className={styles.label}>Password</label>
              <a href="#" className={styles.forgot}>Forgot password?</a>
            </div>
            <input
              className={`input-base ${errors.password ? styles['input--error'] : ''}`}
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'At least 6 characters' },
              })}
            />
            {errors.password && <span className={styles.error}>{errors.password.message}</span>}
          </div>

          <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
            {loading ? 'Signing in…' : 'Sign in'}
          </Button>
        </form>

        <p className={styles.switch}>
          Don't have an account?{' '}
          <Link to="/register" className={styles.switchLink}>Create one free</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;