const HeroSection = () => {
  return (
    <div className="container my-5">
      <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis large-text">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="lead fix-text">
            YOUR FEET DESERVE THE BEST AND WE'RE HERE TO <br /> HELP YOU WITH
            OUR SHOES. YOUR FEET DESERVE <br /> THE BEST AND WE'RE HERE TO HELP
            YOU WITH OUR <br /> SHOES.
          </p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <button type="button" className="btn btn-danger me-md-2 fw-bold">
              Shop Now
            </button>
            <button type="button" className="btn btn-outline-secondary">
              Category
            </button>
          </div>
          <br />
          <div>
            <p className="fix-text">Also Available On</p>
            <div className="d-grid gap-3 d-md-flex justify-content-md-start">
              <img
                className="amazon"
                src="../images/amazon.png"
                alt="amazon logo"
              />
              <img
                className="flipkart"
                src="../images/flipkart.png"
                alt="flipkart logo"
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <img
            className="rounded-lg-3"
            src="../images/hero-image.png"
            alt="shoes-images"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
