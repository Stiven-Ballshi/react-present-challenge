import "./App.css";
import presentIgm from "./assets/original.jpg";

const presents = [
  {
    nest: 1,
    children: [
      {
        nest: 2,
      },
      {
        nest: 2,
      },
    ],
  },
  {
    nest: 2,
    children: [
      {
        nest: 2,
      },
      {
        nest: 2,
      },
    ],
  },
];

function OpenPresent(present: any) {
  return <img className="present-img" src={presentIgm} />;
}

function App() {
  return (
    <div className="container">
      {presents.map((present, index) => {
        return <OpenPresent present={present} index={index} />;
      })}
    </div>
  );
}

export default App;
