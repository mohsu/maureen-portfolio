import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { UilGithub, UilLinkedin, UilEnvelope } from '@iconscout/react-unicons'

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_r0jcplm",
        "template_1t76uxq",
        {
          form_name: form.name,
          to_name: "Maureen Hsu",
          from_email: form.email,
          to_email: "maureen.hsu@gmail.com",
          message: form.message,
        },
        "Jqq9AvwIuSjoMiA5c"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className="xl:mt-8 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-1 bg-black-100 p-4 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get In Touch</p>
        <div className="flex flex-1 flex-col items-start justify-center space-y-4 text-secondary mt-8 gap-3">
          <div className="flex items-center space-x-2">
            <UilEnvelope className={styles.contactIcon} />
            <p className="text-left">yh863@cornell.edu</p>
          </div>
          <div className="flex items-center space-x-2">
            <a href="https://github.com/mohsu" className="flex items-center text-left">
              <UilGithub className={`${styles.contactIcon} mr-4`} />
              github.com/mohsu
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <a href="https://linkedin.com/in/maureen-hsu" className="flex items-center text-left">
              <UilLinkedin className={`${styles.contactIcon} mr-4`} />
              linkedin.com/in/maureen-hsu
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex-2 flex-col flex-grow bg-black-100 p-4 rounded-2xl min-h-[50vh]"
      >
        <div>
          <p className={styles.sectionSubText}>Contact me</p>
          {/* <h3 className={styles.sectionHeadText}>Contact.</h3> */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-8 flex flex-col gap-4"
          >
            <label className="flex flex-col">
              {/* <span className="text-white font-medium mb-4">Your Name</span> */}
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Name"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              {/* <span className="text-white font-medium mb-4">Your email</span> */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              {/* <span className="text-white font-medium mb-4">Your Message</span> */}
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
