const Header = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              className="myntra_home"
              src="../images/brand_logo.png"
              alt="Myntra Home"
            />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <a href="#" className="nav-link px-2 fix-text">
              MENU
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 fix-text">
              LOCATION
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 fix-text">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 fix-text">
              CONTACT
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button type="button" className="btn btn-danger">
            Login
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
