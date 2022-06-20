import "./Modulos.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "../ButtonCheckout/Button";

import FotoModulo1 from "../../imagens/modulo1.jpeg";
import FotoModulo2 from "../../imagens/modulo2.jpeg";
import FotoModulo3 from "../../imagens/modulo3.jpeg";

export default () => {
    return (
        <div className="main">
            <div className="modulos-title">
                <h1>Módulos</h1>
            </div>
            <div className="modulos-items">
                <>
                    {/* <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            MÓDULO #1
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            MÓDULO #2
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            MÓDULO #3
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            MÓDULO #4
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            MÓDULO #5
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            MÓDULO #6
                        </Accordion.Header>
                        <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna
                            aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi
                            ut aliquip ex ea commodo consequat. Duis
                            aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu
                            fugiat nulla pariatur. Excepteur sint
                            occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id
                            est laborum.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion> */}
                </>
                <img
                    src={FotoModulo1}
                    style={{ width: "95%", borderRadius: "5px" }}
                />
                <img
                    src={FotoModulo2}
                    style={{ width: "95%", borderRadius: "5px" }}
                />
                <img
                    src={FotoModulo3}
                    style={{ width: "95%", borderRadius: "5px" }}
                />

                <Button
                    text={"QUERO TER ACESSO À TODOS OS MÓDULOS"}
                    color={"#15E000"}
                    link={"https://pay.kiwify.com.br/3kvc8th"}
                />
            </div>
        </div>
    );
};
