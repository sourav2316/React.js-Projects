const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-center align-items-center py-3 mb-4 ">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <img
            src="../images/logo.png"
            alt="logo"
            className="bi me-2 logoFix {{width:40, height:32}}"
          />
        </a>

        <ul className="nav nav-pills text-fix">
          <li className="nav-item ">
            <a href="#" className="nav-link " aria-current="page">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link active">
              CONTACT
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
