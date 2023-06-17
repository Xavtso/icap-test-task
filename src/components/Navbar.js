import '../styles/Navbar.css'

const Navbar = function () {
  return (
    <nav className="navbar">
      <img
        src="https://icapgroupgmbh.com/Logo%20B%20Horizontal%20version.png"
        alt="logo"
        className="navbar-logo"
      />
      <div className="nav-items-container">

        <a href="#start" className="nav-item">
          Start
        </a>
        <a href="#losungen" className="nav-item">
          Lösungen
        </a>
        <a href="#contact" className="nav-item">
          Kontakt
        </a>
        <a href="#uberuns" className="nav-item">
          Über uns
        </a>
        <a href="#impressun" className="nav-item">
          Impressum
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
