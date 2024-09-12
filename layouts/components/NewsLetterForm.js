import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";

function CustomForm({ status, message, onValidated }) {
  // State and handlers are removed as they are no longer needed

  return (
    <>
      <form
        action="https://click.us14.list-manage.com/subscribe/post?u=d9904c2c81e977ee73bf874f7&amp;id=e3c3beb5ce"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="py-6"
      >
        <input type="hidden" name="u" value="d9904c2c81e977ee73bf874f7" />
        <input type="hidden" name="id" value="e3c3beb5ce" />
        <input type="hidden" name="ht" value="97e7f7c64f4ea5f559b27b7c523dc58773a40117" />
        <input type="hidden" name="mc_signupsource" value="hosted" />

        <fieldset className="relative">
          <input
            className="newsletter-input form-input h-12 w-full rounded-3xl border-none bg-theme-light px-5 py-3 pr-12 text-dark placeholder:text-xs dark:bg-darkmode-theme-dark"
            type="email"
            name="EMAIL"  // Ensure these match Mailchimp's requirements
            id="mce-EMAIL"
            placeholder="Type your email and hit enter"
          />
          <FaEnvelope className="absolute top-1/2 right-5 -translate-y-1/2 text-xl transition duration-75" />
        </fieldset>
        <button className="d-block btn btn-primary mt-4 w-full" type="submit">
          Subscribe
        </button>
      </form>

      {/* Status and message display are also removed */}
    </>
  );
}

export default CustomForm;
