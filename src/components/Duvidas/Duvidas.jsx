import "./Duvidas.css";
import Accordion from "react-bootstrap/Accordion";
import Button from "../ButtonCheckout/Button";

export default () => {
    return (
        <div className="duvidas-main">
            <div className="duvidas-title">
                <h1>Dúvidas Frequentes</h1>
            </div>
            <div className="duvidas-items">
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>
                            Por quanto tempo eu vou ter acesso ao
                            curso e a sala de sinais?
                        </Accordion.Header>
                        <Accordion.Body>
                            Você vai ter acesso vitálicio ao curso. Já
                            na sala de sinais, você vai ter acesso
                            conforme você paga a mensalidade de R$97.
                            Vale lembrar que você pode cancelar a sala
                            quando quiser.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>
                            Não conheço nada desse mercado. Esse curso
                            serve pra mim?
                        </Accordion.Header>
                        <Accordion.Body>
                            Sim! Nesse treinamento você vai aprender
                            desde o nível mais básico ao mais avançado
                            sobre opções binárias e ainda receberá
                            acesso de 1 mês gratis em nossa sala de
                            sinais ao vivo!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>
                            Tenho acesso ao conteúdo do curso quando
                            eu quiser?
                        </Accordion.Header>
                        <Accordion.Body>
                            Sim. Você pode assistir quando e como
                            quiser.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>
                            Porque preciso desse treinamento?
                        </Accordion.Header>
                        <Accordion.Body>
                            A melhor forma de começar no mercado é
                            investindo em conhecimento! Além do mais,
                            esse é um preço promocional desse produto!
                            Se decidir deixar pra depois, vai pagar
                            mais caro!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>
                            Quais as formas de pagamento?
                        </Accordion.Header>
                        <Accordion.Body>
                            Você pode fazer o pagamento atráves do
                            cartão de crédito em até 12x de R$19,78, à
                            vista por boleto bancário ou pix.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>
                            Quando tenho acesso ao curso?
                        </Accordion.Header>
                        <Accordion.Body>
                            Assim que você realizar o pagamento e o
                            mesmo ser aprovado, imediatamente você
                            receberá um e-mail com instruções, login e
                            senha para acessar a área de membros do
                            curso e assistir todo o conteúdo
                            disponível lá.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>
                            Não sei se pode dar certo!
                        </Accordion.Header>
                        <Accordion.Body>
                            Basta você ver os resultados dos alunos
                            apresentados aqui! Eles são a prova viva
                            de que quem executa aquilo que eu ensino,
                            tem resultados! Além disso você tem uma
                            garantia incondicional de 7 dias, ou seja,
                            seu RISCO ZERO!
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>
                            Como funciona a garantia?
                        </Accordion.Header>
                        <Accordion.Body>
                            A garantia de 7 dias é incondicional. Ou
                            seja, você não tem o que perder! Caso não
                            goste do que encontrar lá dentro, seu
                            dinheiro é reembolsado de forma 100% de
                            uma forma simples.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>
                            Não está interessado nisso agora?
                        </Accordion.Header>
                        <Accordion.Body>
                            Entendo 100%. Vou dedicar meu tempo a quem
                            confiou no meu resultado e no dos meus
                            alunos. Boa sorte em sua caminhada!
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            {/* <Button
                    text={"GARANTA JÁ O SEU COM 90% DE DESCONTO"}
                    color={"#15E000"}
                /> */}
        </div>
    );
};
