import Profile from '../components/Profile';
import styles from '../styles/Team.module.css';

export default function Team() {
  return (
    <div className={styles.teamContainer}>
      <h1 className={styles.title}>Meet Our Team</h1>
      <div className={styles.teamGrid}>
        <Profile
          name="Jeysson Diego Alexander Montufar "
          description="Jeysson is the coordinator of our camp in Guatemala and an English teacher at Instituto Mixto Valle de los Olivos, the school where it takes place. He does everything from organizing the camp, translating languages, and bringing great positive energy. Without his leadership and dedication, the camp wouldn't be possible. We’re incredibly lucky to have him as part of our team!"
          image1="/jason-1.webp"
          image2="/jason-2.webp"
        />
        <Profile
          name="Daniel Peterson"
          description="Daniel Peterson studies Business Economics and International Studies at UC Irvine. He loves talking to the kids in broken Spanish and especially enjoys when they correct him. When he’s not playing basketball, he’s either watching it, at the beach, or getting food with friends."
          image1="/dp-1.webp"
          image2="/dp-2.webp"
        />
        <Profile
          name="Altay Hodoglugil"
          description="Altay Hodoglugil is a student at UC Berkeley, studying computer science. His favorite part of the camp is playing soccer against the kids on the last day, and getting absolutely smoked by them. Outside of basketball, you’ll find him in the gym, playing pickleball, or watching the Warriors."
          image1="/altay-1.webp"
          image2="/altay-2.webp"
        />
        <Profile
          name="Herbert Matthew Belloso Hernandez"
          description="Matthew Belloso Hernandez is a student at Cal State Fullerton, studying Kinesiology. He loves to bond with the students and translate from Spanish to English for the coaches. When he’s not playing basketball, he is watching basketball, studying, or hanging out with friends."
          image1="/herbie-1.webp"
          image2="/herbie-2.webp"
          videoUrl="/beau-matt-video.html"
        />
        <Profile
          name="Beau Jones"
          description="Beau jones is a student at cal state Fullerton studying civil engineering. He loves it when the kids call him “BOOOO” instead of Beau, and teaching kids the fundamentals of basketball. Outside of hooping, he loves to go to concerts, hang out with friends, and going to the beach."
          image1="/beau-1.webp"
          image2="/beau-2.webp"
          videoUrl="/beau-matt-video.html"
        />
      </div>
    </div>
  );
}
