import { useState } from "react";
import "./App.css";
import presentImg from "./assets/original.jpg";

type Present = {
  presents: Present[];
  scale?: number;
};

function App() {
  const [presents, setPresents] = useState<Present[]>([
    {
      presents: [
        {
          presents: [
            {
              presents: [],
            },
          ],
        },
        {
          presents: [],
        },
      ],
    },
    {
      presents: [
        {
          presents: [],
        },
      ],
    },
    {
      presents: [],
    },
    {
      presents: [],
    },
  ]);
  return (
    <div className="container">
      <div className="inner">
        {presents.map((present, clickedIdx) => {
          return (
            <button
              key={clickedIdx}
              onClick={() => {
                setPresents((prevPresents) => {
                  return prevPresents.flatMap((value: any, index: number) => {
                    if (clickedIdx === index) {
                      return value.presents.map((currPres: Present[]) => ({
                        ...currPres,
                        scale: 0.8 * (present.scale ?? 0.8),
                      }));
                    } else {
                      return value;
                    }
                  });
                });
              }}
            >
              <img
                style={{ scale: `${present?.scale ?? 1}` }}
                className="present-img"
                src={presentImg}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
