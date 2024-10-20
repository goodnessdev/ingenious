import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import Themes from "./Themes";
import Footer from "./Footer";
import Authentication from "./Authentication";

// import images
import benz from "../img/benz.jpg";
import edison from "../img/thomasEdison.jpg";
import franklin from "../img/franklin.jpg";
import einstein from "../img/einstein.jpg";
import galileo from "../img/galileo.jpg";
import newton from "../img/newton.jpg";

const Home = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div className={`${theme.bg} md:ml-52`}>
      <main className="px-16 py-6">

        <div>
          <Authentication />
          <Themes />
        </div>

        <header className={`${theme.text2} my-3`}>
          <h1 className="text-6xl font-bold">Discover Innovations</h1>
          <h2 className="text-2xl font-bold mt-1">And genius ideas</h2>
        </header>

        <div>
          <div className="mb-20">
            <h4
              className={`${theme.text} mt-10 pb-2 border-b border-amber-400 font-semibold`}
            >
              Innovators
            </h4>
            <div className="mt-8 grid lg:grid-cols-3 gap-10">
              
              <div className="card">
                <img
                  src={edison}
                  alt=""
                  className="w-full h-44 sm:h-60 object-center"
                />
                <div className="m-4">
                  <span className="text-2xl font-bold text-zinc-900">
                    Thomas Edison
                  </span>
                  <div>
                    <span className="tracking-wider text-blue-900">
                      1847-1931
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <img
                  src={franklin}
                  alt=""
                  className="w-full h-44 sm:h-60 object-fill"
                />
                <div className="m-4">
                  <span className="text-2xl font-bold text-zinc-900">
                    Benjamin Franklin
                  </span>
                  <div>
                    <span className="tracking-wider text-blue-900">
                      1706-1790
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <img
                  src={benz}
                  alt=""
                  className="w-full h-44 sm:h-60 object-fill"
                />
                <div className="m-4">
                  <span className="text-2xl font-bold text-zinc-900">
                    Karl Benz
                  </span>
                  <div>
                    <span className="tracking-wider text-blue-900">
                      1844-1929
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className={`m-3 text-center md:text-end`}>
              <Link
                to="/explore"
                className={`${theme.text3} underline font-bold`}
              >
                More...
              </Link>
            </div>
          </div>

          <div>
            <h4
              className={`${theme.text} mt-10 pb-2 border-b border-amber-400 font-semibold`}
            >
              Most Popular Innovators
            </h4>
            <div className="mt-8 grid md:grid-cols-3 gap-10">

              <div className="card">
                <img
                  src={einstein}
                  alt=""
                  className="w-full h-44 sm:h-60 object-fill"
                />
                <div className="m-4">
                  <span className="text-2xl font-bold text-zinc-900">
                    Albert Einstein
                  </span>
                  <div>
                    <span className="tracking-wider text-blue-900">
                      1879-1955
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <img
                  src={newton}
                  alt=""
                  className="w-full h-44 sm:h-60 object-fill"
                />
                <div className="m-4">
                  <span className="text-2xl font-bold text-zinc-900">
                    Isaac Newton
                  </span>
                  <div>
                    <span className="tracking-wider text-blue-900">
                      1643-1727
                    </span>
                  </div>
                </div>
              </div>

              <div className="card">
                <img
                  src={galileo}
                  alt=""
                  className="w-full h-44 sm:h-60 object-fill"
                />
                <div className="m-4">
                  <span className="text-2xl font-bold text-zinc-900">
                    Galileo Galilei
                  </span>
                  <div>
                    <span className="tracking-wider text-blue-900">
                      1564-1642
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
