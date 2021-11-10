import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <main>
      <section className="quiz quiz-small">
        <form className="setup-form">
          <h2>Welcome to Frank's Quiz!</h2>
          {/* amount */}
          <div className="form-control">
            <label htmlFor="amount">number of questions</label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={quiz.amount}
              className="form-input"
              onChange={handleChange}
              min={1}
              max={100}
            />
          </div>
          {/* category */}
          <div className="form-control">
            <label htmlFor="category">select category</label>
            <select
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="politics">politics</option>
              <option value="history">history</option>
              <option value="sports">sports</option>
            </select>
          </div>
          {/* difficulty */}
          <div className="form-control">
            <label htmlFor="difficulty">select difficulty</label>
            <select
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              can't generate questions, try a different option...
            </p>
          )}
          <button className="submit-btn" onClick={handleSubmit}>
            start quiz
          </button>
        </form>
      </section>
    </main>
  );
};

export default SetupForm;
