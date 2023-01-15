import React from "react";
import { motion } from "framer-motion";
import "./index.scss";

function FramerMotion() {
  const ferrisOfTechs = [
    "html-1.svg",
    "css-3.svg",
    "javascript-1.svg",
    "sass-1.svg",
    "react-2.svg",
    "redux.svg",
    "git-icon.svg",
    "java-14.svg",
    // "tailwindcss.svg",
    // "html.svg",
    // "scss.svg",
  ];
  return (
    <div className="FramerMotion">
      {ferrisOfTechs.map((tech, index: number) => {
        return (
          <motion.div
            className="ferris-wheel-techs"
            key={index + 1}
            initial="initial"
            animate={["animate", "initialHide"]}
            variants={{
              initial: {
                opacity: 0,
              },
              initialHide: {
                opacity: 1,
                transition: {
                  delay: index + 1,
                },
              },
              animate: {
                rotate: -360,
                transition: {
                  duration: ferrisOfTechs.length,
                  repeat: Infinity,
                  delay: index + 3,
                  ease: "linear",
                },
              },
            }}
          >
            <div className="image-parent">
              <img
                className="tech-icon"
                src={require(`./tech-icons/${tech}`)}
                alt={tech}
              />
            </div>
          </motion.div>
        );
      }, [])}
    </div>
  );
}

export default FramerMotion;