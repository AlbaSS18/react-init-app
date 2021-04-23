import './App.css';
import * as React from "react";
import Pinocho from "./Cartoons/Pinocho";
import ReyLeon from "./Cartoons/ReyLeon";
import Cartoon from "./Cartoons/Cartoon";
import Select from "./Select";
import Input from "./Input";
import Button from "./Button";
import Counter from "./Counter";
import ColorPicker from "./ColorPicker";
import Text from "./Text";
import UsersList from "./Users";
import ProductsPage from "./ProductsPage";
import {useState, useRef} from "react";
import LanguageSelector from "./LanguageSelector";

import LanguageContext from './language.context'
import MainContainer from './MainContainer'
import ErrorBoundary from "./ErrorBoundary";
import Link from "./Link";
import ButtonCounter from "./ButtonCounter";

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

const numbers = [1,2,3,4,5]

const users = [
    {
        id: 1,
        username: 'albass',
        name: 'Alba'
    },
    {
        id: 2,
        username: 'mifs',
        name: 'Miguel'
    },
    {
        id: 3,
        username: 'jacques',
        name: 'James'
    }
]

/*
class App extends React.Component{

    state = {
        login: false,
        name: '',
        age: 0,
        description: 'Eyy, hola',
        color: 'orange',
        colorPicker: '#c9c9c9'
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        //console.log(prevProps, prevState);
    }

    toogleComponent = () => {
        this.setState({login: !this.state.login})
    }

    renderMessage = () => {
        if(this.state.login)
            return <p>Bienvenido</p>
        return <p>No estás logueado</p>
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }


    handleChange = e => {
        this.setState({[e.target.name]: e.target.value})
    }

    handleName = e => {
        this.setState({name: e.target.value})
    }

    handleAge = e => {
        this.setState({age: e.target.value})
    }

    handleColor = e => {
        this.setState({colorPicker: e.target.value})
    }

    render() {
        return (
            <div className="App">
                <p>Hola {getName() + name}</p>
                <Dumbo/>
                <Bambi/>

                <Cartoon name={'Rey León'} year={1940} imageUrl={'https://1.bp.blogspot.com/-OdvUKkNnGOE/XS-UZHYGNYI/AAAAAAAAHD4/NfQj80DHJoQoun3UyUcsJUjIdaw-Ul37QCLcBGAs/s1600/thumb-1920-689000.jpg'}/>

                <Cartoon name={'Pinocho'} year={1994} imageUrl={'https://lamenteesmaravillosa.com/wp-content/uploads/2017/11/pinocho-con-manzana.jpg'}/>

                <Select/>


                {this.renderMessage()}

                <button onClick={this.toogleComponent}>Login</button>

                <Button/>

                <Counter/>
                <ul>
                    {numbers.map((number, index) => (
                        <li key={index}>{number}</li>
                    ))}
                </ul>

                <ul>
                    {users.map((user, index) => (
                        <li key={user.id}>{user.name} - {user.username}</li>
                    ))}
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleChange}/>
                    </label>
                    <label>
                        Age:
                        <input type="input" name="age" onChange={this.handleChange}/>
                    </label>
                    <textarea value={this.state.description} name="description" onChange={this.handleChange}></textarea>
                    <select name="color" value={this.state.color} onChange={this.handleChange}>
                        <option value="red">Red</option>
                        <option value="orange">Orange</option>
                        <option value="yellow">Yellow</option>
                        <option value="blue">Blue</option>
                    </select>
                    <input type="submit" value="Submit"/>
                </form>

                <ColorPicker color={this.state.colorPicker} changeColor={this.handleColor}/>
                <Text colorSelected={this.state.colorPicker} />

                <UsersList/>


                <ProductsPage/>
            </div>
        );
    }
}
*/

const App = () => {

    const [showComponent, setShowComponent] = useState(true);

    const [language, setLanguage] = useState('es');

    const name = useRef();
    const age = useRef();


    const sendData = () => {
        console.log(name.current.value, age.current.value)
    }

    return (
        <div className="App">
            {/*Gestión de errores*/}
            <ErrorBoundary>
                {showComponent && <Counter/>}
            </ErrorBoundary>

            <button onClick={() => setShowComponent(false)}>Toogle</button>

            <UsersList/>

            {/*React Context*/}
            <LanguageContext.Provider value={{language: language, changeLanguage: (language) => {setLanguage(language)}}}>
                <LanguageSelector changeLanguage={language => setLanguage(language)}/>
                <MainContainer />
            </LanguageContext.Provider>

            {/*Referencias*/}
            <input ref={name} type="text" />
            <input ref={age} type="number" />
            <button onClick={sendData}>Send data</button>


            {/*Prototypes*/}
            <Link label="Ir a google"/>

            {/*Style Components*/}
            <ButtonCounter info>My first Component</ButtonCounter>
            <ButtonCounter warning>My warning Component</ButtonCounter>
            <ButtonCounter danger>My danger Component</ButtonCounter>
            <ButtonCounter success>My success Component</ButtonCounter>

        </div>




    )
}

export default App;
