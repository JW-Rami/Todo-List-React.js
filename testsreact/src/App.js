import logo from "./logo.svg";
import "./App.css";

function App() {
  const handleButton = (e) => {
    const bouton = e.target.value;
    console.log(bouton);
    console.log("bonsoir");
  };
  const handleChange = (e) => {
    const bouton = e.target.value;
    console.log(bouton);
    console.log("bonsoir");
  };
  return (
    <>
      <section className="page-container">
        <form>
          <label>TACHE A FAIRE</label>
          <input onChange={handleChange} type="text" />
          <button>Ajouter</button>
        </form>
        <button onClick={handleButton}>dkopke</button>
      </section>
    </>
  );
}
export default App;
