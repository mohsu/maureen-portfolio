import { motion } from "framer-motion";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className={`relative w-full min-h-[50vh] mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-60 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello, I'm <span className="text-[#915EFF]">Maureen</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop software solutions, <br className="sm:block hidden" />
            specializing in backend engineering and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
