import Themes from "./Themes";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";
import Footer from "./Footer";
import Authentication from "./Authentication";

const About = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className={`${theme.bg} h-full md:ml-52`}>
      <div className="px-16 py-8">
        <Authentication />
        <Themes />

        <div>
          <div
            className={`grid md:grid-cols-2 gap-8 p-10 font-semibold rounded-2xl shadow-2xl bg-gradient-to-bl from-blue-400 to-gray-200 text-black`}
          >
            <div>
              <p className="text-2xl my-2">Welcome to Ingenious Labs! </p>
              <p>
                At Ingenious Labs, were dedicated to celebrating the remarkable
                minds that have shaped our world through their innovative
                inventions. Our platform is a tribute to the brilliant inventors
                who have dared to dream, experiment, and create the
                groundbreaking technologies and ideas that continue to propel
                humanity forward.
              </p>
              <p className="my-2">
                We believe that every invention has a story—one of curiosity,
                persistence, and ingenuity. Our mission is to bring these
                stories to life, offering a comprehensive and engaging look into
                the lives and works of history most influential inventors. From
                the lightbulb to the internet, we cover a wide spectrum of
                inventions that have transformed the way we live, work, and
                communicate. Through meticulously curated content, in-depth
                articles, and interactive features, Ingenious Labs aims to
                inspire the next generation of inventors by showcasing the
                endless possibilities of human creativity.
              </p>
            </div>

            <div className="mt-10">
              <p>
                Join us on this journey of discovery and innovation, as we
                explore the fascinating world of inventors and their timeless
                contributions to society.
              </p>
              <p className="my-2">
                At Ingenious Labs, we believe that every great invention begins
                with a single spark of curiosity. Our platform is designed to
                ignite that spark in our visitors, encouraging them to delve
                into the captivating stories of inventors who have changed the
                world with their groundbreaking ideas. Whether it's the
                pioneering work of Thomas Edison or the revolutionary
                advancements of modern-day tech innovators, our content spans a
                wide array of disciplines and eras, ensuring there's something
                to captivate every curious mind.
              </p>
              <p className="my-2">
                Stay curious, stay inspired, and keep inventing with Ingenious
                Labs! Join us as we celebrate the brilliance of human creativity
                and the enduring spirit of innovation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
