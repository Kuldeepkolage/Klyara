import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import Button from '../../components/ui/Button';
import styles from './Register.module.css';
import { registerUser } from "../../services/authService";
import { toast } from "react-toastify";


const GOALS = [
  { id: 'lose', label: '🔥 Lose weight', desc: 'Burn fat, feel lighter' },
  { id: 'build', label: '💪 Build muscle', desc: 'Gain strength and size' },
  { id: 'endurance', label: '🏃 Endurance', desc: 'Run farther, last longer' },
  { id: 'wellness', label: '🧘 Wellness', desc: 'Balance body and mind' },
];

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedGoal, setSelectedGoal] = useState('');
  const {
  register,
  handleSubmit,
  watch,
  formState: { errors }
} = useForm({
  shouldUnregister: true,
});
  const password = watch('password');

 const onSubmit = async (data) => {
  // Step 1 -> Go to Step 2
  if (step === 1) {
    setStep(2);
    return;
  }

  setLoading(true);

  try {
    const userData = {
      name: `${data.firstName} ${data.lastName}`,
      email: data.email,
      password: data.password,
    };

    await registerUser(userData);

    toast.success("Registration Successful 🎉");

    navigate("/login");
  } catch (error) {
console.log(error);
console.log(error.response);

toast.error(error.response?.data?.message || error.message);  } finally {
    setLoading(false);
  }
};
  return (
    <div className={styles.page}>
      <div className={styles.orb1} />
      <div className={styles.orb2} />

      <div className={styles.card}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>K</span>
          <span className={styles.logoText}>klyra</span>
        </Link>

        {/* Progress */}
        <div className={styles.progress}>
          <div className={styles.progressTrack}>
            <div className={styles.progressFill} style={{ width: step === 1 ? '50%' : '100%' }} />
          </div>
          <span className={styles.progressLabel}>Step {step} of 2</span>
        </div>

        <div className={styles.header}>
          <h1 className={styles.title}>
            {step === 1 ? 'Create your account' : 'Set your goal'}
          </h1>
          <p className={styles.sub}>
            {step === 1
              ? 'Start your transformation journey today — free forever'
              : 'Tell us what you want to achieve. We\'ll build your perfect plan.'}
          </p>
        </div>

        <form
  className={styles.form}
  autoComplete="off"
  onSubmit={handleSubmit(onSubmit)}
>
          {step === 1 ? (
  <div key="step1">
            <>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label className={styles.label}>First name</label>
                  <input
                    className={`input-base ${errors.firstName ? styles['input--error'] : ''}`}
                    placeholder="Arjun"
                    {...register('firstName', { required: 'Required' })}
                  />
                  {errors.firstName && <span className={styles.error}>{errors.firstName.message}</span>}
                </div>
                <div className={styles.field}>
                  <label className={styles.label}>Last name</label>
                  <input
                    className={`input-base ${errors.lastName ? styles['input--error'] : ''}`}
                    placeholder="Sharma"
                    {...register('lastName', { required: 'Required' })}
                  />
                  {errors.lastName && <span className={styles.error}>{errors.lastName.message}</span>}
                </div>
              </div>

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
                <label className={styles.label}>Password</label>
                <input
                  className={`input-base ${errors.password ? styles['input--error'] : ''}`}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Min. 8 characters"
                  {...register('password', {
                    required: 'Password is required',
                    minLength: { value: 8, message: 'At least 8 characters' },
                  })}
                />
                {errors.password && <span className={styles.error}>{errors.password.message}</span>}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Confirm password</label>
                <input
                  className={`input-base ${errors.confirm ? styles['input--error'] : ''}`}
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat password"
                  {...register('confirm', {
                    required: 'Please confirm password',
                    validate: v => v === password || 'Passwords do not match',
                  })}
                />
                {errors.confirm && <span className={styles.error}>{errors.confirm.message}</span>}
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth>
                Continue →
              </Button>
            </>
            </div>
          ) : (
  <div key="step2">
            <>
              <div className={styles.goals}>
                {GOALS.map((g) => (
                  <button
                    key={g.id}
                    type="button"
                    className={`${styles.goalCard} ${selectedGoal === g.id ? styles['goalCard--active'] : ''}`}
                    onClick={() => setSelectedGoal(g.id)}
                  >
                    <span className={styles.goalLabel}>{g.label}</span>
                    <span className={styles.goalDesc}>{g.desc}</span>
                  </button>
                ))}
              </div>

              <div className={styles.field}>
                <label className={styles.label}>Current weight (kg)</label>
                <input className="input-base" type="number" autoComplete="off" placeholder="70" {...register('weight')} />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Target weight (kg)</label>
                <input className="input-base" type="number" autoComplete="off" placeholder="65" {...register('target')} />
              </div>

              <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>
                {loading ? 'Creating your plan…' : 'Start my journey 🚀'}
              </Button>
            </>
            </div>
          )}
        </form>

        {step === 2 && (
          <button className={styles.back} type="button" onClick={() => setStep(1)}>← Back</button>
        )}

        <p className={styles.switch}>
          Already have an account?{' '}
          <Link to="/login" className={styles.switchLink}>Sign in</Link>
        </p>

        <p className={styles.legal}>
          By creating an account you agree to our{' '}
          <a href="#" className={styles.legalLink}>Terms</a> and{' '}
          <a href="#" className={styles.legalLink}>Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
};

export default Register;