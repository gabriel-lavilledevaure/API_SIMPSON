import { motion } from "motion/react";
import Cloud from "../assets/Cloud";

function Hero({ show }) {
  return (
    <section
      id="accueil"
      className="bg-blue relative isolate flex min-h-screen w-full items-center justify-center overflow-hidden px-6 py-20"
    >
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 flex w-[200%]"
      >
        {[0, 1].map((index) => (
          <div key={index} className="relative h-full w-1/2 shrink-0">
            <Cloud className="absolute top-8 left-1/6 w-24 text-white md:w-40" />

            <Cloud className="absolute top-24 right-1/6 w-16 text-white md:w-28" />

            <Cloud className="absolute bottom-8 left-1/4 w-20 text-white md:w-36" />

            <Cloud className="absolute right-1/4 bottom-12 w-16 text-white md:w-24" />

            <Cloud className="absolute top-1/3 left-1/12 w-16 text-white md:w-24" />
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 flex w-[200%]"
      >
        {[0, 1].map((index) => (
          <div key={index} className="relative h-full w-1/2 shrink-0">
            <Cloud className="absolute top-1/4 right-1/12 w-28 text-white md:w-48" />

            <Cloud className="absolute bottom-1/4 left-1/4 w-32 text-white md:w-56" />

            <Cloud className="absolute right-1/3 bottom-1/6 w-24 text-white md:w-40" />
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-50%" }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute inset-y-0 left-0 flex w-[200%]"
      >
        {[0, 1].map((index) => (
          <div key={index} className="relative h-full w-1/2 shrink-0">
            <Cloud className="absolute bottom-1/4 left-1/12 w-1/2 text-white md:w-1/3" />

            <Cloud className="absolute right-1/12 bottom-1/3 w-1/2 text-white md:w-1/3" />
          </div>
        ))}
      </motion.div>

      <div className="relative z-10 container mx-auto flex flex-col items-center text-center">
        <motion.h1
          initial={{ scale: 0.3 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1,
            duration: 3,
            ease: "easeOut",
          }}
          className="font-title text-yellow max-w-min text-5xl leading-none font-bold [-webkit-text-stroke:0.125rem_var(--dark)] [paint-order:stroke_fill] sm:text-6xl md:text-8xl lg:text-9xl"
        >
          {show?.name}
        </motion.h1>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm md:text-base">
          <p className="font-bold">★ {show?.rating?.average} sur 10</p>

          <p>
            Depuis {show?.premiered?.slice(0, 4)} · {show?.status}
          </p>
        </div>

        <motion.a
          href="#episodes"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.95 }}
          className="border-dark bg-yellow mt-8 flex items-center gap-6 rounded-xl border-2 px-6 py-4 font-bold shadow-[0.25rem_0.25rem_0_var(--dark)]"
        >
          Découvrir les épisodes
          <span aria-hidden="true">↓</span>
        </motion.a>

        <ul className="mt-8 flex flex-wrap justify-center gap-3 font-bold">
          {show?.genres?.map((genre, index) => (
            <li key={genre}>
              {index > 0 && "· "}
              {genre}
            </li>
          ))}
        </ul>

        <div
          className="mt-4 w-full max-w-md text-left text-sm leading-relaxed md:text-base"
          dangerouslySetInnerHTML={{
            __html: show?.summary || "",
          }}
        />
      </div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "-90%" }}
        transition={{
          delay: 1,
          duration: 3,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute top-12 left-0 z-20 w-full md:w-2/3"
      >
        <Cloud className="w-full text-white" />
      </motion.div>

      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: "90%" }}
        transition={{
          delay: 1,
          duration: 3,
          ease: "easeOut",
        }}
        className="pointer-events-none absolute top-12 right-0 z-20 w-full md:w-2/3"
      >
        <Cloud className="w-full text-white" />
      </motion.div>
    </section>
  );
}

export default Hero;
