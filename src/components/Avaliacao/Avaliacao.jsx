import "./Avaliacao.css";
import Garantia from "../../imagens/garantia1.png";
import "../../global.css";

export default () => {
    return (
        <div
            className="main"
            style={{ backgroundColor: "#000", borderRadius: "35px", paddingTop: "15px" }}
        >
            <img
                id="img-garantia"
                src={Garantia}
                style={{
                    marginBottom: "15px",
                    backgroundColor: "#000",
                }}
            />
            <h1 style={{ backgroundColor: "#000" }}>
                Ainda na dúvida?
                <h2
                    style={{
                        color: "#15E000",
                        backgroundColor: "#000",
                    }}
                >
                    {" "}
                    Não se preocupe.
                </h2>
            </h1>
            <h4 style={{ backgroundColor: "#000" }}>
                Ou você tem resultados aqui, ou 100% do seu dinheiro
                de volta.
            </h4>
            <p style={{ backgroundColor: "#000" }}>
                Não existe promessa de ganho fixo, não seja enganado.
                Por isso, você pode cancelar por qualquer motivo em
                até 7 dias depois do pagamento que faremos seu
                reembolso na hora. Ou seja, ZERO RISCO. Você receberá
                de volta CADA CENTAVO que investiu no curso.
            </p>
        </div>
    );
};
