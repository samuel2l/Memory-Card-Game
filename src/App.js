import { useState, useEffect } from "react";
import halle from "../src/halle.webp";
import cole from "../src/colee.jpg";
import kylie from "../src/kylie (1).jpg";
import zendaya from "../src/bw5.jpg";
function Card(props) {
  return (
    <button>
      <img src={props.img} alt="card pic" width={120} onClick={props.onClick} />
    </button>
  );
}
let id_arr = [];
let best = 0;
export default function App() {
  const [score, setScore] = useState(0);

  function handleClick(id) {
    if (id_arr.includes(id)) {
      setScore(0);
      alert("Game Over");
      id_arr = [];
      best = best > score ? best : score;
      return;
    } else {
      id_arr.push(id);
      setScore(score + 1);
    }
  }

  const loc = [
    {
      id: 1,
      name: "halle",
      img: halle,
    },
    {
      id: 2,
      name: "cole",
      img: cole,
    },
    {
      id: 3,
      name: "kylie",
      img: kylie,
    },
    {
      id: 4,
      name: "zendaya",
      img: zendaya,
    },
  ];

  return (
    <>
      <p>Best:{best}</p>
      <p>Score:{score}</p>

      {loc.map((l) => {
        return (
          <>
            <Card
              key={l.id}
              img={l.img}
              name={l.name}
              onClick={() => {
                handleClick(l.id);
              }}
            />
          </>
        );
      })}
    </>
  );
}
