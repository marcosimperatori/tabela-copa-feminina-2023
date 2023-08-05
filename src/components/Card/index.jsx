import { useState, useEffect } from "react";
import styles from "./Card.module.css";

const Card = () => {
  const [grupos, setGrupos] = useState([]);

  useEffect(() => {
    const buscarGrupos = async () => {
      const response = await fetch(
        "https://raw.githubusercontent.com/edsonmaia/apifakecopa2023/main/selecoes.json"
      );
      const data = await response.json();
      setGrupos(data);
    };
    buscarGrupos();
  }, []);

  return grupos.map((grupo) => (
    <section className={styles.card} key={grupo.grupo}>
      <div
        className={styles.linha}
        style={{ backgroundColor: grupo.cor }}
      ></div>
      <h2>Grupo {grupo.grupo}</h2>
      <ul>
        {grupo.selecoes.map((pais) => {
          return (
            <li key={pais.sigla}>
              <img
                src={`/public/bandeiras/${pais.sigla}.png`}
                alt={pais.selecao}
              />
              {pais.selecao}
            </li>
          );
        })}
      </ul>
    </section>
  ));
};

export default Card;
