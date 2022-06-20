import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Metodo from "./components/Metodo/Metodo";
import Sinais from "./components/Sinais/Sinais";
import Modulos from "./components/Modulos/Modulos";
import Detalhes from "./components/Detalhes/Detalhes";
import Checkout from "./components/Checkout/Checkout";
import Duvidas from "./components/Duvidas/Duvidas";
import Footer from "./components/Footer/Footer";
import Grupo from "./components/Grupo/Grupo";
import Avaliacao from "./components/Avaliacao/Avaliacao";
import ProvaSocial from "./components/ProvaSocial/ProvaSocial";

function App() {
    return (
        <div className="App">
            <Header />
            <Metodo />
            <Modulos />
            <Detalhes />
            {/* <Sinais /> */}
            <Checkout />
            <Avaliacao />
            <ProvaSocial />
            <Duvidas />
            <Grupo />
            <Footer />
        </div>
    );
}

export default App;
