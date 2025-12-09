import Intro from "./Components/intro"
import TriviaQuestions from "./Components/TriviaQuestions"
import { useState,useEffect } from "react";
import { decode } from "html-entities";

function App() {
   const [currentPage, setCurrentPage] = useState('intro');
  const [questions, setQuestions] = useState([]); 

  const goToTrivia = () => {
    setCurrentPage("triviaQuestions");
  };

  useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple")
      .then((res) => res.json())
      .then((data) => {
        const decoded = data.results.map((q) => ({
          ...q,
          question: decode(q.question)
        } 
      ));
        console.log(decoded)
        setQuestions(decoded);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {currentPage === "intro" && <Intro navigateTo={goToTrivia} />}
      {currentPage === "triviaQuestions" && <TriviaQuestions questions={questions} />}
    </>
  );
}

export default App;

