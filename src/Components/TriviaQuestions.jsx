const shuffle = (array) => {
  //Copies the original array
  return (
    [...array]
      //Add a random number to each item
      .map((item) => ({ item, id: Math.random() }))
      //Sort items by the random number
      .sort((a, b) => a.id - b.id)
      //Remove the random numbers
      .map((obj) => obj.item)
  );
};

const TriviaQuestions = ({ questions }) => {
  const quizQuestions = questions.map((question, index) => {
    const options = [question.correct_answer, ...question.incorrect_answers];
    const shuffledOptions = shuffle(options);
    console.log(shuffledOptions);
    return (
      <div key={index} className="question-block">
        <h2 className="question">{question.question}</h2>
        <ul className="options-list">
          {shuffledOptions.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div className="quiz-page">
      <div className="quiz-container">{quizQuestions}</div>
      <button className="check-answers-btn">Check answers</button>
    </div>
  );
};

export default TriviaQuestions;
