import './App.css';
import * as React from "react";
import Pinocho from "./Cartoons/Pinocho";
import ReyLeon from "./Cartoons/ReyLeon";
import Cartoon from "./Cartoons/Cartoon";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Counter from "./Counter";


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

        <Cartoon name={'Rey León'} year={1940} imageUrl={'https://1.bp.blogspot.com/-OdvUKkNnGOE/XS-UZHYGNYI/AAAAAAAAHD4/NfQj80DHJoQoun3UyUcsJUjIdaw-Ul37QCLcBGAs/s1600/thumb-1920-689000.jpg'}/>

        <Cartoon name={'Pinocho'} year={1994} imageUrl={'https://lamenteesmaravillosa.com/wp-content/uploads/2017/11/pinocho-con-manzana.jpg'}/>

        <Select/>

        <Input/>

        <Button/>

        <Counter/>

    </div>
  );
}

export default App;
