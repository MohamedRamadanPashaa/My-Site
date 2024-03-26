import Image from "next/image";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Mohamed-Ramadan.JPG"
          alt="An Image Showing Mohamed Ramadan"
          width="400"
          height="400"
        />
      </div>
      <h1>Hi, I'm Mohamed</h1>
      <p>
        I blog about web development - especially frontend frameworks like React
        and backend like Express.
      </p>
    </section>
  );
};

export default Hero;
