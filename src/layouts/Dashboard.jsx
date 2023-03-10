import React,{useState} from 'react'
import ProducList from '../pages/ProductList'
import { Container } from 'semantic-ui-react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import MenuPage from './MenuPage.jsx'
import StockList from './../pages/StockList';
import StockAdd from './../pages/StockAdd';
import Navi from './Navi'
import { Button } from 'react-bootstrap'

export default function Dashboard({isShowed, setShowed}) {
    return (
        <div>
            <ToastContainer position='bottom-right' />
            <Navi showed={isShowed} setShowed={setShowed} />
            <MenuPage isShow={isShowed} setShow={setShowed}/>
            <Container style={{paddingTop:'100px'}}>
                <Route exact path="/" component={ProducList} />
                <Route path="/stock" component={StockList} />
                <Route path="/stockAdd" component={StockAdd} />
            </Container>

        </div>
    )
}