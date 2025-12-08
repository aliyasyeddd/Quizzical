import Intro from "./Components/intro"
import TriviaQuestions from "./Components/TriviaQuestions"
import { useState } from "react";
import { decode } from "html-entities";

function App() {
  
  const [questions, setQuestions] = useState(null);
  

  function getQuestions() {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=10&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => data.results.map((result) => {
        console.log(decode(result.question))
      }));
  }
  getQuestions()

  return (
    <>
    {/* {questions ? <TriviaQuestions /> :  <Intro />}  */}
     <Intro />
     <TriviaQuestions /> 
    </>
  )
}

export default App
