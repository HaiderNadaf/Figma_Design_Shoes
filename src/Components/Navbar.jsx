const Navbar = () => {
  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <svg
              className="bi"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>
          <div className="logo">
            <img src="./images/logo.png"></img>
          </div>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <img src=""></img>
          </li>

          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              Location
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              About
            </a>
          </li>
          <li>
            <a href="#" className="nav-link px-2 link-secondary">
              contacts
            </a>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <button
            className="btn  btn-danger"
            style={{ width: "75px", height: "38px" }}
          >
            Login
          </button>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
