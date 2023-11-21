import React from 'react'

const Funcionamento = () => {
    return (
        <div>
            <div id="funcionamento" className="p-5 fs-3">
                <div>
                    O desenvolvimento de um sensor de decibéis para as salas de aula e hospitais é uma medida importante para garantir um ambiente adequado e saudável para as pessoas, pois o ruído excessivo pode ter efeitos negativos em atividades que estimulam a atenção e a concentração. Nos ambientes de aprendizado o ruído pode prejudicar a comunicação, dificultando o aprendizado.
                </div>
                <div className="mt-5">
                    O protótipo, por meio de um potenciômetro, possibilita ao usuário definir  um valor de entrada e, quando ultrapassado esse parâmetro, um buzzer (alarme sonoro) e LEDs  são ativados. Será adicionado um módulo ESP01 (módulo wireless, desenvolvido para conectar um microcontrolador a uma rede WiFi) juntamente com um módulo RTC (Real Time Clock)  capaz de fornecer em tempo real o horário e um calendário completo para armazenagem de dados com maior precisão. Dessa forma se pretende aplicar, coletar e analisar dados dos ruídos sonoros em determinados ambientes.
                </div>
                <div id="equipamentos" className="d-flex mt-3 justify-content-between">
                    <div id="card" className="text-center">
                        <div id="card-title">
                            Potenciometro
                        </div>
                        <div id="card-content">
                            <img id="imagem-content" src="src/assets/img/pngwing.com.png" alt="potenciometro" />
                        </div>
                    </div>


                    <div id="card" className="text-center">
                        <div id="card-title">
                            Buzzer
                        </div>
                        <div id="card-content">
                            <img id="imagem-content" src="src/assets/img/buzzer.png" alt="buzzer" />
                        </div>
                    </div>

                    
                    <div id="card" className="text-center">
                        <div id="card-title">
                            LED
                        </div>
                        <div id="card-content">
                            <img id="imagem-content" src="src/assets/img/led.png" alt="led" />
                        </div>
                    </div>
                </div>

                <div className="d-flex mt-3 justify-content-center">
                    <div id="card" className="text-center">
                        <div id="card-title">
                            Módulo ESP01
                        </div>
                        <div id="card-content">
                            <img id="imagem-content" src="src/assets/img/moduloESP01.png" alt="potenciometro" />
                        </div>
                    </div>


                    <div id="card" className="text-center">
                        <div id="card-title">
                        Módulo RTC
                        </div>
                        <div id="card-content">
                            <img id="imagem-content" src="src/assets/img/moduloRTC.png" alt="potenciometro" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Funcionamento;
