import depoimento1 from "../../imagens/depoimentoFoto1.jpeg";
import depoimento2 from "../../imagens/depoimentoFoto2.jpeg";
import depoimento3 from "../../imagens/depoimentoFoto3.jpeg";
import depoimento4 from "../../imagens/depoimentoFoto4.jpeg";
import depoimento5 from "../../imagens/depoimentoFoto5.jpeg";
import depoimento6 from "../../imagens/depoimentoFoto6.jpeg";

import "./ProvaSocial.css";

export default () => {
    return (
        <div className="main">
            <h1 style={{ color: "red", marginTop: "15px" }}>
                VEJA O QUE ESTÃO FALANDO SOBRE O CURSO
            </h1>
            <div className="img-row-1">
                <div className="img-row-2">
                    <img src={depoimento1} alt="" />
                    <img src={depoimento2} alt="" />
                    <img src={depoimento3} alt="" />
                    <img src={depoimento4} alt="" />
                    <img src={depoimento5} alt="" />
                    <img src={depoimento6} alt="" />
                </div>
            </div>
        </div>
    );
};
