import "./Detalhes.css";
import Button from "../ButtonCheckout/Button";
import "../../global.css"

export default () => {
    const DetalhesItems = (props) => {
        return (
            <div className="detalhe-item">
                <i
                    style={{ fontSize: "3rem" }}
                    className="pi pi-check-square"
                ></i>
                <h4>{props.title}</h4>
            </div>
        );
    };

    return (
        <div className="main">
            <div className="detalhes-title">
                <h1>
                    VEJA EM DETALHES O QUE VOCÊ VAI APRENDER NESSE
                    CURSO.
                </h1>
            </div>
            <div className="detalhes-items">
                <DetalhesItems title="COMO FUNCIONA O MERCADO?" />
                <DetalhesItems title="PASSO A PASSO PARA A CONSISTÊNCIA" />
                <DetalhesItems title="NOSSO GERENCIMENTO ÚNICO" />
                <DetalhesItems title="COMO PEGAR OS SINAIS" />
                <DetalhesItems title="PULLBACK" />
                <DetalhesItems title="FIBONACCI" />
                <DetalhesItems title="GATILHOS DE ENTRADA" />
                <DetalhesItems title="RETRAÇÃO DE MERCADO" />
                <DetalhesItems title="INDICADORES DO REI" />
                <DetalhesItems title="SALA DE SINAIS GRATUITA - (1 MÊS)" />





            </div>
            {/* <Button
                text={"GARANTA JÁ O SEU COM 90% DE DESCONTO"}
                color={"#15E000"}
            /> */}
        </div>
    );
};
