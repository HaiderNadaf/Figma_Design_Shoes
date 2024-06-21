const Hero = () => {
  return (
    <div className="main">
      <div className="infor">
        <h1 className="poppins-paragraph">
          YOUR FEETS
          <br />
          DESEVER
          <br />
          THE BEST
        </h1>
      </div>

      <div className="para">
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE
          <br />
          TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE <br />
          THE BEST AND WE’RE HERE TO HELP YOU WITH OUR <br />
          SHOES.
        </p>
        <div className="Button">
          <button
            className="btn  btn-danger"
            style={{ width: "101px", height: "38px", marginRight: "20px" }}
          >
            Shop Now
          </button>
          <button className="btn  btn-dark">Category</button>
        </div>

        <div>
          <p> also availabe on</p>
          <img
            src="./images/amazonn.png"
            alt="amazon"
            style={{ width: "28px", height: "26px", marginRight: "12px" }}
          ></img>
          <img
            src="./images/flipkarts.png"
            alt="amazon"
            style={{ width: "23px", height: "26px" }}
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Hero;
