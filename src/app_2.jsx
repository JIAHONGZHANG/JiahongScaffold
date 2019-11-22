import React, { Component } from 'react';
import ReactDom from 'react-dom';
import './bootstrap-theme-customise.scss';
import { Container, Row, Col, Carousel, Button} from 'react-bootstrap';
import ReactUrl from '../public/react-brands.svg';
import BootstrapUrl from '../public/bootstrap-brands.svg';
import './animate.css';

class App2 extends Component {
    componentDidMount() {
        const react_ele = document.querySelector('.react-image')
        react_ele.classList.add('animated', 'bounceInLeft')

        this.afterAnimate('.react-image', 'bounceInLeft', () => {
            document.querySelector('.react-image').id = 'react-icon'
        })
    }

    afterAnimate(ele, animationName, callback) {
        const node = document.querySelector(ele)
        node.classList.add('animated', animationName)

        function handleAnimationEnd() {
            node.classList.remove('animated', animationName)
            node.removeEventListener('animationend', handleAnimationEnd)

            if (typeof callback === 'function') callback()
        }

        node.addEventListener('animationend', handleAnimationEnd)
    }

    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1980x1020?text=First slide"
                        alt="First slide"
                    />
                    <Carousel.Caption className="">
                        <Container style={{width: "50%"}}>
                        <Row className="justify-content-center align-items-center" style={{height: "100%"}}>
                            <Col xs={5}><img src={ReactUrl} alt="react-logo" className="react-image"/></Col>
                            <Col xs={5}><img src={BootstrapUrl} alt="bootstrap-logo" className="animated bounceInRight"/></Col>
                        </Row>
                        </Container>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1980x1020?text=Second slide"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://via.placeholder.com/1980x1020?text=Third slide"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

ReactDom.render(<App2 />, document.getElementById('root'));