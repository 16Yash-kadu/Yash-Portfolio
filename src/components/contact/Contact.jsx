import { useState } from "react";
import "./contact.css";
import { IoMail } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { FaAddressCard } from "react-icons/fa";

const Contact = () => {
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d1404e78-8799-4154-ac33-f9d3fe88bd27");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
    alert("Form Submitted Successfully");
  };

  const validateEmail = (email) => {
    if (!email.includes("@") || !email.endsWith("gmail.com")) {
      setEmailError("Email must contain '@' and end with 'gmail.com'");
      return false;
    } else {
      setEmailError("");
      return true;
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, ""); // Remove non-digits
    if (input.length <= 10) {
      setPhone(input);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (validateEmail(email)) {
      onSubmit(e);
    }
  };

  return (
    <div id="contact" className="contactContainer">
      <h1 className="fw-bold text-center mt-5 mb-5">Contact us</h1>

      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <p className="px-2 mt-3">CONTACT INFO</p>
            <h2 className="fw-bold px-2">Get in touch</h2>

            <div className="email mt-4 mb-3">
              <div className="d-flex align-center">
                <div className="px-2">
                  <IoMail />
                </div>

                <h5 className="px-2" style={{ color: "#A7A7A7" }}>
                  Talk to us :
                </h5>
              </div>
              <h5 className="px-4">yashkadu165@gmil.com</h5>
            </div>
            <div className="email mt-2 mb-3">
              <div className="d-flex align-center">
                <div className="px-2">
                  <IoCallOutline />
                </div>{" "}
                <h5 className="px-2" style={{ color: "#A7A7A7" }}>
                  Call us :
                </h5>
              </div>
              <h5 className="px-4">+91 9022331539</h5>
            </div>
            <div className="email">
              <div className="d-flex align-center">
                <div className="px-2">
                  <FaAddressCard />
                </div>{" "}
                <h5 className="px-2" style={{ color: "#A7A7A7" }}>
                  Address us :
                </h5>
              </div>
              <h5 className="px-4">
                Yashoda nagar, Khule Layout, Kandli, Paratwada, Amravati.
              </h5>
            </div>
          </div>
          <div className="col-lg-7">
            <form onSubmit={handleSubmit}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 mt-2 mb-2">
                    <label className="mb-2">First Name :</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      className="form-control w-100"
                      id="inputField"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mt-2 mb-2">
                    <label className="mb-2">Last Name :</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      className="form-control w-100"
                      id="inputField"
                      required
                    />
                  </div>
                  <div className="col-lg-6 mt-2 mb-2">
                    <label className="mb-2">Email :</label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      className="form-control w-100"
                      id="inputField"
                      required
                    />
                    {emailError && <p style={{ color: "red" }}>{emailError}</p>}
                  </div>
                  <div className="col-lg-6 mt-2 mb-2">
                    <label className="mb-2">Phone :</label>
                    <div className="input-group">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Phone"
                        className="form-control w-100"
                        id="inputField"
                        value={phone}
                        onChange={handlePhoneChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 mt-2 mb-2">
                    <div className="form-group">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="mb-2"
                      >
                        Message :
                      </label>
                      <textarea
                        name="message"
                        className="form-control w-100"
                        id="exampleFormControlTextarea1"
                        rows="4"
                        placeholder="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div
                    className="col-lg-6 mt-4 mb-5 text-center"
                    style={{ margin: "auto" }}
                  >
                    <button type="submit" className="btn">
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
