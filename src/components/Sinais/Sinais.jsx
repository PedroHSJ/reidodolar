import "./Sinais.css";
import Carousel from "react-bootstrap/Carousel";

export default () => {
    return (
        <div className="sinais-main">
            <div className="sinais-title">
                <h1>Sala De Sinais</h1>
                <h3>GRATUITA POR 1 MÊS</h3>
            </div>
            <div className="sinais-carousel">
                <Carousel fade>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Daniel}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Sinais}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block"
                            src={Daniel}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

              
                
            </div>
        </div>
    );
};
