import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="App">
      <Skills skills={["TypeScript", "JavaScript", "React", "Next.js", "tRPC", "HTML", "SAAS", "CSS"]} />
    </div>
  );
};

export default App;
