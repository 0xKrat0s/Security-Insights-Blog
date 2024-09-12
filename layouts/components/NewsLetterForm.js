import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function Newsletter({ status, message, onValidated }) {
  const [email, setEmail] = useState("");

  const resetForm = () => {
    setEmail("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
    resetForm();
  };

  return (
    <>
      <form
        action="https://click.us14.list-manage.com/subscribe/post?u=d9904c2c81e977ee73bf874f7&amp;id=e3c3beb5ce"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        onSubmit={handleSubmit}
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required=""
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div id="mce-responses" className="clear foot">
            <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
            <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
          </div>
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
            <input
              type="text"
              name="b_d9904c2c81e977ee73bf874f7_e3c3beb5ce"
              tabIndex="-1"
              value=""
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
                value="Subscribe"
              />
            </div>
          </div>
        </div>
      </form>

      {status === "sending" && (
        <div className="mt-4 text-primary">sending...</div>
      )}
      {status === "error" && (
        <div
          className="mt-4 text-red-700"
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div className="mt-4 text-green-700">Subscribed!</div>
      )}
    </>
  );
}

export default Newsletter;
