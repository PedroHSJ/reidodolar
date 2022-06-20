import Felipe from "../../imagens/FelipeCafe1.jpeg";
import "./Grupo.css";
import Button from "../ButtonCheckout/Button";
import "../../global.css"

export default () => {
    return (
        <div className="main">
            <h1 style={{ color: "#0088cc" }}>
                GRUPO OFICIAL GRATUITO NO TELEGRAM
            </h1>
            <img
            className="grupo-img"
                src={Felipe}
                alt="Foto de perfil"
                style={{
                    border: "5px solid #0088cc",
                    borderRadius: "50%",
                    marginBottom: "20px",
                }}
            />
            <Button text={"ENTRA AGORA NO GRUPO OFICIAL DO TELEGRAM"}
            color={"#0088cc"}
            link={"https://t.me/reidodolar"}
            />
        </div>
    );
};
