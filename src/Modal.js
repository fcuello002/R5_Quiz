import React from "react";
import { useGlobalContext } from "./context";

const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  const percentScore = ((correct / questions.length) * 100).toFixed(0);

  const determineLetterGrade = () => {
    if (percentScore > 90) {
      return <p>You got an A! Congrats!!</p>;
    } else if (percentScore > 80) {
      return <p>You got a B! Well done!</p>;
    } else if (percentScore > 70) {
      return <p>You got a C! You passed!</p>;
    } else if (percentScore > 60) {
      return <p>You got a D! Your knowledge of the subject at hand is poor!</p>;
    } else {
      return <p>You got an F! You failed!</p>;
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <p>You answered {percentScore}% of questions correctly</p>
        {determineLetterGrade()}
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
