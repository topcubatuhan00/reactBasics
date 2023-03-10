import './App.css';
import React,{useState} from 'react'
import Dashboard from './layouts/Dashboard';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';

function App() {

    const [isShowed,setShowed] = useState(false)

    return (
        <div className="App">
            <Container fluid className='main'>
                <Dashboard isShowed={isShowed} setShowed={setShowed}/>
            </Container>
        </div>
    );
}

export default App;
