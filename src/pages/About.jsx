import styles from './About.module.css';

const hobbies = [
  {
    name: 'Fishing',
    description: 'A chance to slow down, spend time outdoors, and enjoy the patience behind a good catch.',
  },
  {
    name: 'Hiking',
    description: 'Exploring new trails keeps me active, curious, and always looking forward to the next view.',
  },
  {
    name: 'Board Games',
    description: 'I enjoy the mix of strategy, problem-solving, and friendly competition around the table.',
  },
  {
    name: 'Tennis',
    description: 'Tennis gives me a fun way to stay active while continuously improving my technique and focus.',
  },
  {
    name: 'Rock Climbing',
    description: 'Every route is a physical puzzle that rewards persistence, planning, and trusting the process.',
  },
  {
    name: 'Electronics',
    description: 'I like understanding how things work, experimenting with hardware, and bringing small ideas to life.',
  },
];

export default function About() {
  return (
    <section className={styles.aboutPage} id="about" aria-labelledby="about-heading">
      <section className={styles.aboutIntro} aria-labelledby="about-heading">
        <h2 id="about-heading">About Me</h2>
        <div className={styles.aboutTechnicalContent}>
          <h2>Building with purpose</h2>
          <p>
            I&apos;m Albert Castillo, an aspiring full-stack software engineer who enjoys turning ideas
            into thoughtful, useful digital experiences. I&apos;m interested in the entire development
            process, from shaping an intuitive interface to designing the logic and systems that make
            it work behind the scenes.
          </p>
          <p>
            What draws me to software engineering is the balance of creativity and problem-solving.
            I approach each project as an opportunity to learn, refine my skills, and build something
            that feels clear, dependable, and genuinely helpful to the people using it. I&apos;m always
            looking for new challenges that push me to think more deeply and grow as a developer.
          </p>
        </div>
      </section>

      <section className={styles.aboutPersonal} aria-labelledby="beyond-code-heading">
        <header className={styles.aboutSectionHeader}>
          <h2 id="beyond-code-heading">What keeps me curious</h2>
          <p>
            Away from my computer, I enjoy hobbies that keep me active, challenge how I think,
            and give me time to recharge.
          </p>
        </header>

        <div className={styles.aboutHobbyGrid}>
          {hobbies.map((hobby) => (
            <article className={styles.aboutHobbyCard} key={hobby.name}>
              <h3>{hobby.name}</h3>
              <p>{hobby.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
