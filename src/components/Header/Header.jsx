import "./Header.css";
import "primeicons/primeicons.css";
import Logo from "../../imagens/logo.jpeg";
import Button from "../ButtonCheckout/Button";

export default () => {
    return (
        <>
            <nav
                className="navbar navbar-expand-lg fixed-top"
                style={{ backgroundColor: "#000" }}
            >
                <div className="container">
                    <img src={Logo} alt="" />
                </div>
            </nav>
            <a
                id="telegram-fixed"
                href="https://t.me/Matheusm0tta"
                target="_blank"
            >
                <i className="pi pi-telegram" style={{color: "#0088cc"}}></i>
            </a>

            <div className="header">
                <div className="header-text">
                    <h1 style={{ color: "#15E000" }}>
                        Trader Absoluto 3.0
                    </h1>
                    <h3 style={{ color: "#fff" }}>
                        Assista O Vídeo E Descubra Como Você Pode
                        Ganhar Comigo A Partir Do Celular ou PC.
                    </h3>
                </div>

                <div className="header-video">
                    <iframe
                        src="https://www.youtube.com/embed/-6xWXth6o7c"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
            <div className="header-button">
                <Button
                    text={"QUERO TER ACESSO AO CONTEÚDO DO VÍDEO"}
                    color={"#15E000"}
                    link={"https://pay.kiwify.com.br/3kvc8th"}
                />
                <img
                    className="bandeiras"
                    src="https://www.ativomilionario.com.br/wp-content/uploads/2022/05/cartoesbr.png"
                    alt=""
                />
                <i
                    className="pi pi-angle-double-down"
                    style={{
                        fontSize: "2em",
                        color: "#fff",
                        marginTop: "20px",
                    }}
                ></i>
            </div>
        </>
    );
};
