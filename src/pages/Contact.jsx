import Profile from '../components/Profile';

export default function Home() {
  return (
    <>
      <div>
        <Profile
          name="Daniel Peterson"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque aliquam, reprehenderit eaque id rem fugiat ea, adipisci libero maiores dolorum sit amet deleniti non doloremque rerum? Officiis, accusamus atque."
          image1="/public/dp-1.png"
          image2="/public/dp-2.JPEG"
        />
        <Profile
          name="Altay Hodoglugil"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde cumque aliquam, reprehenderit eaque id rem fugiat ea, adipisci libero maiores dolorum sit amet deleniti non doloremque rerum? Officiis, accusamus atque."
          image1="/public/altay-1.png"
          image2="/public/altay-2.png"
        />
      </div>
    </>
  );
}
