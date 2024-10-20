import { useState, useEffect } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

import QuestionDetails from "./QuestionDetails";
import Themes from "./Themes";
import Authentication from "./Authentication";
import Footer from "./Footer";

const Quiz = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  const [queries, setQueries] = useState(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch("/api/quiz");
      const data = await response.json();

      if (response.ok) {
        setQueries(data);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className={`${theme.bg} md:ml-52 font-nunito`}>
      <div className="px-16 py-6">
        <div>
          <Authentication />
          <Themes />
        </div>
        <h2
          className={`${theme.text} tracking-widest text-2xl font-bold text-center border-b p-5`}
        >
          QUIZ
        </h2>
        <div className={`text-black bg-yellow-200 p-5 rounded-2xl shadow-2xl`}>
          {queries &&
            queries.map((query, index) => (
              <QuestionDetails key={index} query={query} index={index} />
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Quiz;
