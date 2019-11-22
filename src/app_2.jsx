import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './bootstrap-theme-customise.scss';
import {Container, Row, Col} from 'react-bootstrap';
import ReactUrl from '../public/react-brands.svg';
import BootstrapUrl from '../public/bootstrap-brands.svg';
import ArrowUrl from '../public/arrows-alt-h-solid.svg';
import './animate.css';

class App2 extends Component {
    componentDidMount(){
       const react_ele = document.querySelector('.react-image')
       react_ele.classList.add('animated', 'bounceInLeft')

       this.afterAnimate('.react-image', 'bounceInLeft', ()=>{
        document.querySelector('.react-image').id = 'react-icon'
       })
    }

    afterAnimate(ele, animationName, callback){
        const node = document.querySelector(ele)
        node.classList.add('animated', animationName)
    
        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)
    
            if (typeof callback === 'function') callback()
        }
    
        node.addEventListener('animationend', handleAnimationEnd)
    }

    render(){
        return (
            <div className="bootstrap-reset" style={{overflow:"hidden"}}>
                <Container style={{height: "100%"}}>
                    <Row className="justify-content-center align-items-center" style={{height: "100%"}}>
                        <Col xs={5}><img src={ReactUrl} alt="react-logo" className="react-image"/></Col>
                        <Col xs={2}><img src={ArrowUrl} alt="arrow"/></Col>
                        <Col xs={5}><img src={BootstrapUrl} alt="bootstrap-logo" className="animated bounceInRight"/></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

ReactDom.render(<App2 />, document.getElementById('root'));