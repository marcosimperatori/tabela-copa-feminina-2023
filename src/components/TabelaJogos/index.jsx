import { useEffect, useState } from "react";
import styles from "./TabelaJogos.module.css";

const TabelaJogos = () => {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    const buscarJogos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/marcosimperatori/tabela-copa-feminina-2023/main/src/data/tabela_jogos.json"
      );
      const data = await response.json();
      setJogos(data);
    };
    buscarJogos();
  }, []);

  return (
    <table className={styles.table}>
      <thead>
        <th>Dia</th>
        <th>Data</th>
        <th>Hora</th>
        <th>Grupo</th>
        <th colSpan={5}>Jogo</th>
      </thead>
      <tbody>
        {jogos.map((jogo) => (
          <tr key={jogo.jogo}>
            <td>{jogo.dia}</td>
            <td>{jogo.data}</td>
            <td>{jogo.hora}</td>
            <td>{jogo.grupo}</td>
            <td>
              <span className={styles.direita}>
                {jogo.mandante}
                <img
                  src={`/public/bandeiras/${jogo.sigla_mandante.toLowerCase()}.png`}
                  alt={jogo.mandante}
                />
              </span>
            </td>
            <td className={styles.gols}>{jogo.gols_mandante}</td>
            <td>X</td>
            <td className={styles.gols}>{jogo.gols_visitante}</td>
            <td>
              <span className={styles.esquerda}>
                <img
                  src={`/public/bandeiras/${jogo.sigla_visitante.toLowerCase()}.png`}
                  alt={jogo.visitante}
                />
                {jogo.visitante}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TabelaJogos;
