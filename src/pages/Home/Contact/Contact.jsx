import { useRef } from "react";
import emailjs from "@emailjs/browser";

import {
  FaArrowRight,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formField = e.target;

    emailjs
      .sendForm(
        "service_cahdvt4",
        "template_51y9nkc",
        form.current,
        "4y8k-20FZ7nwO-oKK"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            toast.success("Message Sent!");
            formField.reset();
          }
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };

  return (
    <div className="min-h-screen bg-primary">
      <div className="max-w-6xl mx-5 md:mx-10 lg:mx-auto py-24 flex flex-col md:flex-row gap-16">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold text-secondary">{`Let's get in touch`}</h2>
          <p className="my-8 text-xl md:pr-16 leading-8 text-secondary">
            I enjoy discussing new projects and design challenges. Please share
            as much info, as possible so we can get the most out of our first
            catch-up.
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-3">
            Living In:
          </h3>
          <p className="text-lg text-secondary mb-8">
            Mirpur - 1, Dhaka - 1216, Bangladesh
          </p>
          <h3 className="text-2xl font-semibold text-secondary mb-3">Call:</h3>
          <p className="text-lg text-secondary mb-8">+880 1752 818 764</p>
          <div className="text-[#757575] text-2xl flex gap-4">
            <a
              href="https://www.facebook.com/shahedalaminshihab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <FaFacebook />
            </a>
            <a
              href="https://www.instagram.com/_iamshihab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <FaInstagram />
            </a>
            <a
              href="https://github.com/shihab01118"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/shahed-al-amin-shihab"
              target="_blank"
              rel="noreferrer"
              className="hover:text-secondary"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="md:w-1/2">
          <h2 className="text-4xl font-semibold text-secondary">
            Estimate your Project?
          </h2>
          <form ref={form} onSubmit={sendEmail} className="mt-8">
            <div className="form-control">
              <label htmlFor="name">
                <span className="text-secondary">What is Your Name:</span>
              </label>
              <input
                name="user_name"
                id="name"
                type="text"
                className="input bg-transparent border-b-2 border-b-[#00DF89] focus:outline-none focus:border-b-secondary rounded-none mt-1"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label htmlFor="email">
                <span className="text-secondary">Your Email Address:</span>
              </label>
              <input
                name="user_email"
                id="email"
                type="email"
                className="input bg-transparent border-b-2 border-b-[#00DF89] focus:outline-none focus:border-b-secondary rounded-none mt-1"
                required
              />
            </div>
            <div className="form-control mt-5">
              <label htmlFor="textarea">
                <span className="text-secondary">How can I Help you?</span>
              </label>
              <textarea
                name="message"
                id="textarea"
                className="textarea rounded-none bg-transparent border-b-2 border-b-[#00DF89] focus:outline-none focus:border-b-secondary h-28 mt-1"
              ></textarea>
            </div>
            <div className="mt-7">
              <button
                type="submit"
                className="py-3 px-7 rounded-none capitalize text-lg text-white bg-secondary border-none hover:bg-[#424649] flex gap-3 items-center"
              >
                Send <FaArrowRight size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
