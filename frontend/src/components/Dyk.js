import { ThemeContext } from "../context/ThemeContext";
import { useContext, useEffect, useState } from "react";

import Authentication from "./Authentication";
import Themes from "./Themes";
import Footer from "./Footer";

const Dyk = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  const bgGradients = [
    "bg-gradient-to-bl from-red-300 to-white",
    "bg-gradient-to-bl from-purple-300 to-white",
    "bg-gradient-to-bl from-blue-300 to-white",
    "bg-gradient-to-bl from-green-300 to-white",
    "bg-gradient-to-bl from-amber-300 to-white",
  ];

  let [bgCount, setBgCount] = useState(bgGradients[0]);

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      i = (i + 1) % bgGradients.length;
      setBgCount(bgGradients[i]);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${theme.bg} md:ml-52 font-poppins`}>
      <div className="px-16 py-6">
        <div>
          <Authentication />
          <Themes />
        </div>
        <div
          className={`${bgCount} text-black py-6 px-10 rounded-xl shadow-lg`}
        >
          <h2 className="text-2xl font-semibold mt-2 mb-5">
            There's a lot of fascinating stuff out there in the universe! Dive
            in learn more.
          </h2>
          <ul className="list-disc tracking-widest marker:text-blue-500 space-y-5">
            <li>The speed of light is 299,792 kilometers per second.</li>
            <li>
              Water expands when it freezes, making ice less dense than liquid
              water.
            </li>
            <li>
              DNA stands for Deoxyribonucleic Acid, the molecule that carries
              genetic instructions.
            </li>
            <li>
              Mars has the largest volcano in the solar system, Olympus Mons.
            </li>
            <li>
              A chemical reaction involves the transformation of one set of
              chemical substances to another.
            </li>
            <li>The Universe is approximately 13.8 billion years old.</li>
            <li>Sound travels faster in water than in air.</li>
            <li>Artificial intelligence mimics human cognition.</li>
            <li>
              Cells are the basic building blocks of all living organisms.
            </li>
            <li>Fossils provide evidence of past life forms on Earth.</li>
            <li>Antibiotics are used to treat bacterial infections.</li>
            <li>
              Meteorites are fragments of rock or metal that have fallen to
              Earth from space.
            </li>
            <li>
              The Doppler Effect explains the change in frequency of a wave in
              relation to an observer moving relative to the wave source.
            </li>
            <li>
              The Moon causes tides due to its gravitational pull on Earth.
            </li>
            <li>Bacteria can be both beneficial and harmful to humans.</li>
            <li>
              Quantum mechanics studies the behavior of particles on an atomic
              and subatomic level.
            </li>
            <li>
              Photosynthesis is the process by which plants make food using
              sunlight.
            </li>
            <li>Atoms are the basic units of matter.</li>
            <li>The Earth revolves around the Sun in about 365.25 days.</li>
            <li>
              The ozone layer protects Earth from harmful ultraviolet radiation.
            </li>
            <li>
              Evolution is the process by which organisms change over
              generations.
            </li>
            <li>
              Gravity is the force that attracts two bodies toward each other.
            </li>
            <li>
              Einstein's Theory of Relativity explains the relationship between
              space and time.
            </li>
            <li>
              Mitosis is the process where a single cell divides into two
              identical cells.
            </li>
            <li>
              Black holes are regions of space where gravity is so strong that
              nothing can escape.
            </li>
            <li>The Milky Way is the galaxy that contains our solar system.</li>
            <li>
              The periodic table organizes elements by their chemical
              properties.
            </li>
            <li>
              Volcanoes release gases and molten rock from beneath Earth's
              crust.
            </li>
            <li>Neurons are the building blocks of the nervous system.</li>
            <li>The human body is made up of approximately 60% water.</li>
            <li>
              Venus rotates backwards compared to most planets in our solar
              system.
            </li>
            <li>A day on Jupiter lasts only about 10 hours.</li>
            <li>Bananas are naturally slightly radioactive.</li>
            <li>
              An adult human body is made up of around
              7,000,000,000,000,000,000,000,000,000 atoms.
            </li>
            <li>
              Honey never spoils—archaeologists have found pots of honey in
              ancient Egyptian tombs that are over 3,000 years old and still
              edible.
            </li>
            <li>Octopuses have three hearts and blue blood.</li>
            <li>
              The Great Wall of China is not visible from space with the naked
              eye.
            </li>
            <li>
              A single bolt of lightning contains enough energy to cook 100,000
              pieces of toast.
            </li>
            <li>Sharks have been around longer than trees.</li>
            <li>A small child could swim through the veins of a blue whale.</li>
            <li>
              There's a cloud of alcohol in the Milky Way galaxy that is enough
              to produce 400 trillion pints of beer.
            </li>
            <li>
              The Eiffel Tower can be 15 cm taller during the summer due to
              thermal expansion of the iron.
            </li>
            <li>You can hear a blue whale's heartbeat from two miles away.</li>
            <li>Humans share 60% of their DNA with bananas.</li>
            <li>
              The shortest war in history was between Britain and Zanzibar on 27
              August 1896. Zanzibar surrendered after 38 minutes.
            </li>
            <li>Birds are the closest living relatives to dinosaurs.</li>
            <li>
              The largest known living organism is a fungus in Oregon's Malheur
              National Forest, which covers 2,385 acres.
            </li>
            <li>
              Your stomach gets a new lining every few days to prevent it from
              digesting itself.
            </li>
            <li>
              There's a planet that rains glass sideways due to extreme winds.
            </li>
            <li>Ants never sleep. They also don’t have lungs.</li>
            <li>
              The longest-living cells in the body are brain cells, which can
              live an entire lifetime.
            </li>
            <li>
              Some metals are so reactive that they explode on contact with
              water.
            </li>
            <li>
              There are more stars in the universe than grains of sand on all of
              Earth's beaches.
            </li>
            <li>An ostrich's eye is bigger than its brain.</li>
            <li>A group of flamingos is called a "flamboyance."</li>
            <li>New York City has more species of ants than all of England.</li>
            <li>The human nose can remember 50,000 different scents.</li>
            <li>
              Venus is the hottest planet in our solar system, even though
              Mercury is closer to the sun.
            </li>
            <li>Some turtles can breathe through their butts.</li>
            <li>
              The fingerprints of koalas are virtually indistinguishable from
              those of humans.
            </li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dyk;
