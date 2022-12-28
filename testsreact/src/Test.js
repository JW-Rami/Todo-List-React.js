import React from "react";
import "./Test.css";
import { useState } from "react";

function Test() {
  const [dataArr, setDataArr] = useState([
    { nom: "Juliette" },
    { nom: "John" },
    { nom: "Joris" },
    { nom: "Julien" },
    { nom: "Julienne" },
    { nom: "Julius" },
  ]);

  return (
    <>
      <div className="test">
        {dataArr.map((item, index) => {
            console.log(index);
          return <p key={index} >Nom: {item.nom}</p>;
        })}
      </div>
    </>
  );
}

export default Test;