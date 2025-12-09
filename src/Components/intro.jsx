

const Intro = ({navigateTo}) => {
  return (
    <div className="intro">
      <h1>Quizzical 🎯</h1>
      <p>A fun trivia game to test how much you really know. 💡🧠❓</p>
      <button onClick={navigateTo}>Start quiz</button>
    </div>
  );
};

export default Intro;
