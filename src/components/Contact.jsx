import React from "react";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";



import { slideIn } from "../utils/motion";
import EarthCanvas from "../canvas/Earth";

// template_lbtxyz1
// service_6wvqh89
// qg_Ehcj_RGXCzUEKN

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
    // template_lbtxyz1
    // service_6wvqh89
    // qg_Ehcj_RGXCzUEKN
    console.log(form)

    emailjs
      .send(
        "service_6wvqh89",
        "template_lbtxyz1",
        {
          from_name: form.name,
          to_name: "Bipul",
          from_email: form.email,
          to_email: "bipulkumar2540@gmail.com",
          message: form.message,
        },
        "qg_Ehcj_RGXCzUEKN"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you, I will get back to you as soon as possible");
          console.log(form)
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("something went wrong")
        }
      );
  };
  return (
    <div className={`${styles.paddingX} mt-20 xl:mt-22 xl:flex-row flex-col-reverse flex md:gap-10 lg:gap-20 overflow-hidden justify-between`}>
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={`${styles.sectionSubText}`}>Get in Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="what's your name"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="what's your email"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              type="text"
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="what do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>

          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none text-white w-fit font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:felx-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default Contact;
