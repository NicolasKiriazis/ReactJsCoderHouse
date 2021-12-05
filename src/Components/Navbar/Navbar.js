import '../Navbar/Navbar.css'


const Navbar = () => {

    return (

        <div>

            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src="https://i.ibb.co/0cCgjfS/zgames-logo-chico.png" alt="zgames-logo-png"></img></a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">

                        <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>

                        <li className="nav-item dropdown">
                        
                        <a clasName="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Categorias</a>
                        
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        
                        <li><a className="dropdown-item" href="#">Playstation 4</a></li>
                        <li><a className="dropdown-item" href="#">Playstation 5</a></li>

                        </ul>
                        
                        </li>
                    </div>
                </div>
            </nav>

        </div>

    )

}





export default Navbar
