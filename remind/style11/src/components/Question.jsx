import React from "react";
import me from "./Question.module.css";

const Question = () => {
  return (
    <div className={me.box}>
      <h2 className={me.text}>Q&A</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos excepturi
        corrupti quo blanditiis! Adipisci amet corporis ipsum odio minima
        aliquid quisquam! Dignissimos natus laborum qui veritatis quaerat eaque!
        Nemo, ullam.
      </p>
    </div>
  );
};

export default Question;