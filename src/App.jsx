import "./App.css";
import TabelaJogos from "./components/TabelaJogos";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1>Copa do Mundo Feminina 2023</h1>
      <section className="cards">
        <Card />
      </section>
      <h2>Tabela de jogos</h2>
      <section className="tabela_jogos">
        <TabelaJogos />
      </section>
    </>
  );
}

export default App;
