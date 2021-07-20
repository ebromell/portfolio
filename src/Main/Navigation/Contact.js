import React from "react";

export default function Contact() {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="group">
        <div className="item">
          <form
            action="https://formspree.io/f/meqpwygg"
            target="_blank"
            method="POST"
          >
            <div className="form_group field">
              <label for="name">Name</label>
              <input type="text" name="name" id="name" />
              <br />
              <label for="email">Email</label>
              <input type="text" name="email" id="email" />
              <br />
              <label for="message">Message</label>

              <textarea
                cols="30"
                rows="5"
                name="message"
                id="message"
              ></textarea>
              <br />

              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        <div className="item item-double">
          <p>
            <br />
            <a
              href="https://www.linkedin.com/in/eric-bromell-200b76a9/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <br />
            <a href="https://github.com/ebromell" target="_blank" rel="noreferrer">
              {" "}
              Github{" "}
            </a>
          </p>
          <p>
            <iframe 
            title = "wtfc"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197640.73849282094!2d-76.76058093468039!3d39.28515394282665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c803aed6f483b7%3A0x44896a84223e758!2sBaltimore%2C%20MD!5e0!3m2!1sen!2sus!4v1614114475327!5m2!1sen!2sus"
              width="300"
              height="300"
              style={{border: 0}}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </p>
        </div>
      </div>
    </section>
  );
}
