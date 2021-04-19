import './App.css';

const name = 'Serena';

const getName = () => 'Alba';

const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'

function App() {
  return (
    <div className="App">
        <p>Hola {getName() + name}</p>
        <img src={image} />
    </div>
  );
}

export default App;
