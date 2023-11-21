import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow sticky-top">
                <div className="container">
                    <a id="nome" className="navbar-brand text-light" href="#"><strong>Poluição Sonora</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="bi bi-list text-light pt-1"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link text-light active" aria-current="page" href="#contexto">Contexto</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#objetivo">Objetivo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#equipamentos">Equipamentos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#Conclusao">Conclusão</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;