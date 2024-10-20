import Themes from "./Themes";
import Footer from "./Footer";
import Authentication from "./Authentication";

// import images
import fleming from "../img/fleming.jpg";
import faraday from "../img/faraday.jpg";
import grahambell from "../img/alexgrahambell.jpg";
import newton from "../img/newton.jpg";
import pascal from "../img/blaisePascal.jpg";
import benz from "../img/benz.jpg";
import edison from "../img/thomasEdison.jpg";
import franklin from "../img/franklin.jpg";
import einstein from "../img/einstein.jpg";
import tesla from "../img/nikolatesla.jpg";
import galileo from "../img/galileo.jpg";
import nobel from "../img/alfredNobel.jpg";
import wright from "../img/wright.jpg";
import timBL from "../img/timBL.jpg";
import davinci from "../img/davinci.jpg";

import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Explore = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div className={` ${theme.bg} md:ml-52`}>
      <div className="py-8 px-16">
        <div>
          <Authentication />
          <Themes />
        </div>

        <header className={`${theme.text2} my-3`}>
          <h1 className="text-6xl font-bold">Explore various Innovators</h1>
          <h2 className="text-2xl font-bold mt-1">And their work</h2>
        </header>

        <div className="grid md:grid-cols-3 gap-10 mt-20">
          <div className="card">
            <img
              src={fleming}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Alexander Fleming
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1881-1955</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={faraday}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Michael Faraday
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1791-1867</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={grahambell}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Alexander Graham Bell
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1847-1922</span>
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
                <span className="tracking-wider text-blue-900">1643-1727</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={pascal}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Blaise Pascal
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1623-1662</span>
              </div>
            </div>
          </div>

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
                <span className="tracking-wider text-blue-900">1879-1955</span>
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
                <span className="tracking-wider text-blue-900">1564-1642</span>
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
                <span className="tracking-wider text-blue-900">1706-1790</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={tesla}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Nikolas Tesla
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1856-1943</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={edison}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Thomas Edison
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1847-1931</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={wright}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Wright Brothers
              </span>

              <div>
                <span className="tracking-wider text-blue-900 block">
                  Orville Wright: 1871-1948
                </span>
                <span className="tracking-wider text-blue-900">
                  Wilbur Wright: 1867-1912
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
                <span className="tracking-wider text-blue-900">1844-1929</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={nobel}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Alfred Nobel
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1833-1896</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={davinci}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Leonardo Da vinci
              </span>

              <div>
                <span className="tracking-wider text-blue-900">1452-1519</span>
              </div>
            </div>
          </div>

          <div className="card">
            <img
              src={timBL}
              alt=""
              className="w-full h-44 sm:h-60 object-fill"
            />
            <div className="m-4">
              <span className="text-2xl font-bold text-zinc-900">
                Tim Berners-lee
              </span>

              <div>
                <span className="tracking-wider text-blue-900">
                  1955 - till date
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Explore;
