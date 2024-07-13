import data from './data.json';
import color from './col.json';
import './App.css';
const myName = "Stapan"
const numene = 2;
const numtvo = 9;
let result = numene + numtvo;
function App() {
  return (
    <div className="App">
    
      <h1>{myName}</h1>
      <p>Ласкаво просимо до нашого сайту!</p>
      <img
      src="https://www.buildrestfoods.com/wp-content/uploads/2020/08/green-apply-416x416.jpg"
      />
       <h1>{data.name}</h1>
      <a
      href={data.url}>{data.name}</a>
      <p>{result}</p>
      <ul>
                {color.map((color, index) => (
                    <li key={index}>{color}</li>
                ))}
            </ul>
    </div>
  );
}

export default App;
