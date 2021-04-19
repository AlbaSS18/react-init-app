import './App.css';
import * as React from "react";

const name = 'Serena';

const getName = () => 'Alba';


// Componente funcional
const Dumbo = () => {
    const image = 'https://img.ecartelera.com/noticias/fotos/52700/52758/1.jpg';
    return <img src={image}/>
}

// Componente de clase
class Bambi extends React.Component {

    image = 'https://media.gq.com.mx/photos/5be9e132ba170c3d2acfd96d/master/pass/bambi_2088.jpg';

    render() {
        return <img src={this.image}/>
    }
}

function App() {
  return (
    <div className="App">
        <p>Hola {getName() + name}</p>
        <Dumbo/>
        <Bambi/>
    </div>
  );
}

export default App;
