import React, { useEffect, useState } from "react";
import "./index.scss";
import { info } from "../../API/api";
import HomeCard from "../HomeCard/HomeCard";

function Home() {
  const [Char, setChar] = useState([]);
  const [list, setList] = useState(1);

  async function infos() {
    const {
      data: { results },
    } = await info.getCharacters(list);
    setChar(results);
  }
  useEffect(() => {
    infos();
  }, infos());

  function previousPage(e) {
    e.preventDefault();
    setList(list - 1);
  }
  function nextPage(e) {
    e.preventDefault();
    setList(list + 1);
  }

  async function searchCaracter(event) {
    event.preventDefault();
    const value = event.target[0].value;
    const {
      data: { results },
    } = await info.getChar(value);
    setChar(results);
  }
  return (
    <>
      <div className="search">
        <form onSubmit={searchCaracter}>
          <input placeholder="Pesquise o personagem" type="text"></input>
          <button type="submit">Pesquisar!</button>
        </form>
      </div>
      <div className="chosepage">
        <button onClick={previousPage}>Página anterior</button>
        <p>Página atual : {list}</p>
        <button onClick={nextPage}>Próxima página</button>
      </div>
      <div className="all">
        <div className="modal">
          {Char.map((Char) => (
            <div key={Char.id}>
              <HomeCard Char={Char} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
