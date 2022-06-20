import FooterImg from "../../imagens/FelipeLoiro.jpeg";
import "./Footer.css";

export default () => {
    return (
        <footer>
            <h1>DANIEL CORDEIRO</h1>
            <a
                href="https://www.instagram.com/reidodolar_/"
                target="_blank"
                style={{ textDecoration: "none" }}
            >
                <h5>@reidodolar_</h5>
            </a>
            <p>
                Estou no mercado de opções binarias há mais de 6 anos
                e já ajudei mais de 650 pessoas a lucrarem com esse
                mercado. Depois de vários anos quebrando banca, eu
                consegui um método que me levou para a tão sonhada
                consistência e então, decidi ajudar outras pessoas a
                chegarem nesse objetivo e desfrutar de toda liberdade
                que ele proporciona. Aqui no Trader Absoluto, eu
                coloquei todo o passo-a-passo que você precisa para
                lucrar diariamente e transformar a sua vida
                trabalhando a hora que você quiser com o mercado de
                opções ao seu favor!
            </p>
            <img
                src={FooterImg}
                alt="Foto de perfil"
                style={{ border: "3px solid #fff" }}
            />
            <h3>CONTATOS</h3>
            <div className="footer-icons">
                <a
                    href="https://www.instagram.com/reidodolar_/"
                    target="_blank"
                >
                    <i className="pi pi-instagram"></i>
                </a>

                <a href="https://t.me/Matheusm0tta" target="_blank">
                    <i className="pi pi-telegram"></i>
                </a>

                {/* <a href="http://" target="_blank">
                    <i className="pi pi-whatsapp"></i>
                </a> */}
            </div>
            {/* <span>
                developed by{" "}
                <a
                    href="https://github.com/PedroHSJ"
                    target="_blank"
                    style={{
                        textDecoration: "none",
                        color: "#0088cc",
                    }}
                >
                    @pedrohenrique
                </a>
            </span> */}
        </footer>
    );
};
