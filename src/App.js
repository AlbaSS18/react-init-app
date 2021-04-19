import './App.css';

const name = 'Serena';

const getName = () => 'Alba';


const ImageComp = () => {
    const image = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png';
    return <img src={image}/>
}

function App() {
  return (
    <div className="App">
        <p>Hola {getName() + name}</p>
        <ImageComp/>
        <ImageComp/>
    </div>
  );
}

export default App;
