import { useState } from "react";


const QuestionDetails = ({ query, index }) => {
  const [correctionMessage, setCorrectionMessage] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);

  const chooseAnswer = (option) => {
    setSelectedOption(option);
    if (query.correctOption === option) {
      setCorrectionMessage("Great!, you got it");
    } else {
      setCorrectionMessage("oops!, you're wrong");
    }
  };

  return (
    <div class="my-10">
      <h2 className="text-xl">{index + 1}. {query.question}</h2>
      <ul className="mt-2">
        {query.options.map((option, index) => (
          <li key={index} className="my-2">
            <input
              type="radio"
              name="quiz"
              id={`option-${index}`}
              onClick={() => chooseAnswer(option)}
              checked={selectedOption === option}
            />
            <span className="mx-2 tracking-wider font-semibold">{option}</span>
          </li>
        ))}
      </ul>

      {correctionMessage && (
        <p
          className={`mt-4 text-xl font-semibold ${
            selectedOption === query.correctOption
              ? "text-green-600"
              : "text-red-500"
          }`}
        >
          {correctionMessage}
        </p>
      )}
    </div>
  );
};

export default QuestionDetails;
