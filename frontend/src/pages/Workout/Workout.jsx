import { useState } from 'react';
import Navbar from '../../components/layout/Navbar';
import WorkoutCard from '../../components/ui/WorkoutCard';
import Button from '../../components/ui/Button';
import { workouts, workoutCategories } from '../../data/dummy';
import styles from './Workout.module.css';

const Workout = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');
  const [activeDifficulty, setActiveDifficulty] = useState('all');

  const filtered = workouts.filter((w) => {
    const matchCat = activeCategory === 'all' || w.category.toLowerCase() === activeCategory;
    const matchSearch = w.name.toLowerCase().includes(search.toLowerCase());
    const matchDiff = activeDifficulty === 'all' || w.difficulty === activeDifficulty;
    return matchCat && matchSearch && matchDiff;
  });

  const todayWorkout = workouts[0];

  return (
    <div className={styles.page}>
      <Navbar />
      <div className={styles.bg} />

      <main className={styles.main}>
        <div className="container">

          {/* Header */}
          <div className={styles.header}>
            <div>
              <span className={styles.eyebrow}>Your fitness library</span>
              <h1 className={styles.title}>Workout Plans</h1>
              <p className={styles.sub}>500+ expert-designed sessions, personalized for you.</p>
            </div>
            <Button variant="primary" size="md">
              ➕ Create custom workout
            </Button>
          </div>

          {/* Today's Featured */}
          <div className={styles.featured}>
            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>⚡ Today's recommended workout</span>
              <h2 className={styles.featuredTitle}>{todayWorkout.name}</h2>
              <div className={styles.featuredMeta}>
                <span>⏱ {todayWorkout.duration} min</span>
                <span>🔥 {todayWorkout.calories} kcal</span>
                <span>💪 {todayWorkout.exercises} exercises</span>
                <span className={styles.diffBadge}>{todayWorkout.difficulty}</span>
              </div>
              <div className={styles.featuredActions}>
                <Button variant="primary" size="lg">▶ Start now</Button>
                <Button variant="ghost" size="lg">Preview exercises</Button>
              </div>
            </div>
            <div className={styles.featuredEmoji}>{todayWorkout.image}</div>
          </div>

          {/* Search + Filter */}
          <div className={styles.controls}>
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon}>🔍</span>
              <input
                className={styles.search}
                type="text"
                placeholder="Search workouts…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              {search && (
                <button className={styles.clearSearch} onClick={() => setSearch('')}>✕</button>
              )}
            </div>
            <div className={styles.filters}>
              {['all', 'Beginner', 'Intermediate', 'Advanced'].map((d) => (
                <button
                  key={d}
                  className={`${styles.filterBtn} ${activeDifficulty === d ? styles['filterBtn--active'] : ''}`}
                  onClick={() => setActiveDifficulty(d)}
                >
                  {d === 'all' ? 'All levels' : d}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className={styles.categories}>
            {workoutCategories.map((cat) => (
              <button
                key={cat.id}
                className={`${styles.catBtn} ${activeCategory === cat.id ? styles['catBtn--active'] : ''}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.icon}</span> {cat.label}
              </button>
            ))}
          </div>

          {/* Results */}
          <div className={styles.resultsHeader}>
            <span className={styles.resultsCount}>{filtered.length} workouts</span>
          </div>

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map((w) => (
                <WorkoutCard key={w.id} workout={w} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <span className={styles.emptyIcon}>🔍</span>
              <h3>No workouts found</h3>
              <p>Try adjusting your search or filters</p>
              <Button variant="secondary" size="md" onClick={() => { setSearch(''); setActiveCategory('all'); setActiveDifficulty('all'); }}>
                Clear filters
              </Button>
            </div>
          )}

        </div>
      </main>
    </div>
  );
};

export default Workout;