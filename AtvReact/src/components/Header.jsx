import React from 'react'

const Header = () => {
    return (
        <div>
            <header className="container-fluid d-flex align-items-center justify-content-center pt-3">
                <div className="row">
                    <div className="col-12">
                        <h1 id="titulo" className="text-center text-light fadeInLeft">
                            Sensor de decibelímetro para monitorar<br/> salas de aula
                        </h1>
                    </div>
                </div>
            </header>
        </div >
    );
}

export default Header;