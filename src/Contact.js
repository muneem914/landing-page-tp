import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contactUsSection">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="contactLeftside col-12 col-lg-5">
                  <h1 className="mainHeading fw-bold">
                    Connect With Our <br /> Sales Team.
                  </h1>
                  <p className="main_hero_para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Deserunt eaque alias similique.
                  </p>
                  <figure>
                    <img
                      src="./images/hero1.jpg"
                      alt="contatUsImg"
                      className="img-fluid"
                    />
                  </figure>
                </div>

                {/* right side contact form  */}
                <div className="contactRightside col-12 col-lg-7">
                  <form method="POST">
                    <div className="row">
                      <div className="col-12 col-lg-6 contactInputField">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="col-12 col-lg-6 contactInputField">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 col-lg-6 contactInputField">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Phone Number "
                        />
                      </div>
                      <div className="col-12 col-lg-6 contactInputField">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Email ID"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 contactInputField">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Add Address"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12 ">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          placeholder="Enter Your Message"
                        />
                      </div>
                    </div>
                    <div class="form-check formCheckboxStyle">
                      <input
                        class="formCheckInput"
                        type="checkbox"
                        value=""
                        id="flexCheckChecked"
                      />
                      <label
                        class="form-check-label"
                        className="main_hero_para"
                      >
                        I agree that the automation may contact me at the email
                        address or phone number above
                      </label>
                    </div>
                    <button type="submit" className="btn btn_style w-100">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
