import "./css/navbar.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg rtl shadow-sm">
            <ul className="d-flex navbar-nav">
                <li className="nav-item nav-title">
                    <img src={"./images/logoipsum-247.svg"} alt="svg logo"/>
                </li>
                <li className="nav-item nav-title">
                    <a href="" className="nav-link">
                        ورزشی
                    </a>
                </li>
                <li className="nav-item nav-title">
                    <a href="" className="nav-link">
                        اقتصاد
                    </a>
                </li>
                <li className="nav-item nav-title">
                    <a href="" className="nav-link">
                        سیاسی
                    </a>
                </li>
                <li className="nav-item nav-title">
                    <a href="" className="nav-link">
                        فرهنگ و هنر
                    </a>
                </li>
                <li className="nav-item nav-title">
                    <a href="" className="nav-link">
                        تگنولوژی
                    </a>
                </li>
            </ul>
            {/* <form action="" className="form-inline">
         <div className="input-group">
             <input type="text" placeholder="Search" className="form-control"/>
             <div className="input-group-append">
                 <button className="btn btn-outline-light bg-secondary">
                     <i className="fas fa-search"></i>
                 </button>
             </div>
         </div>
        </form> */}
            <div className="search">
                <input type="text" placeholder="search"/>
                <div className="symbol">
                    <svg className="cloud" src={"./images/logoipsum-247.svg"}></svg>
                    <svg className="lens"></svg>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
