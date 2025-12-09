
const TriviaQuestions = ({ questions }) => {

  return (
    <div className="quiz-container">
      {questions.map((question, index) => (
        <h2 className="question" key={index}>{question.question}</h2>
      ))}
    </div>
  );
};

export default TriviaQuestions;

