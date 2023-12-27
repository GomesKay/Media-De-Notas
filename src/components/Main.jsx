import { useState } from "react";
import styles from "./Main.module.css";

export function Main() {
  const [yourName, setYourName] = useState("");
  const [noteOne, setNoteOne] = useState(0);
  const [noteTwo, setNoteTwo] = useState(0);
  const [noteThree, setNoteThree] = useState(0);
  const [res, setRes] = useState(0);
  const [status, setStatus] = useState("");

  function handleName(event) {
    setYourName(event.target.value);
  }

  function handleNoteOne(event) {
    setNoteOne(Number(event.target.value));
  }

  function handleNoteTwo(event) {
    setNoteTwo(Number(event.target.value));
  }

  function handleNoteThree(event) {
    setNoteThree(Number(event.target.value));
  }

  function handleCalculator() {
    const result = ((noteOne + noteTwo + noteThree) / 3).toFixed(1);

    if (result >= 5) {
      setStatus("Aprovado");
    } else {
      setStatus("Reprovado");
    }

    setRes(result);
  }

  return (
    <main className={styles.main}>
      <div className={styles.div}>
        <article className={styles.article}>
          <div>
            <h2>Seu nome:</h2>
            <input type="text" maxLength={15} onChange={handleName} />
          </div>
          <table>
            <thead>
              <tr>
                <th>Estudante</th>
                <th>Média</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{yourName}</td>
                <td>{res}</td>
                <td>{status}</td>
              </tr>
            </tbody>
          </table>
        </article>

        <aside className={styles.aside}>
          <h2>Suas Notas</h2>
          <h3>Nota 1</h3>
          <input type="number" min={0} onChange={handleNoteOne} />
          <h3>Nota 2</h3>
          <input type="number" min={0} onChange={handleNoteTwo} />
          <h3>Nota 3</h3>
          <input type="number" min={0} onChange={handleNoteThree} />
          <button onClick={handleCalculator}>Calcular</button>
        </aside>
      </div>
    </main>
  );
}
