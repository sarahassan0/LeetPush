import PropTypes from "prop-types";
import { useState } from "react";

Form.propTypes = {
  setLeetCodeID: PropTypes.func.isRequired,
  type: PropTypes.string,
};

export default function Form({ setLeetCodeID, type }) {
  const [input, setInput] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setLeetCodeID(input);

    if (type === "update")
      setUpdateMessage("Username updated successfully!");
    else
      setUpdateMessage("");
  }

  return (
    <div className="mb-3">
      <form onSubmit={e => handleSubmit(e)}
            className="w-full flex justify-evenly">
        <input placeholder="LeetCode username"
               name="username"
               value={input}
               onChange={(e) => setInput(e.target.value)}
               className="px-3 py-1 text-sm focus:input-focus focus:outline-lp-grey rounded-lg" />
        <button className="bg-lp-green-bg text-sm font-semibold px-3 py-1 rounded-lg">
          Submit
        </button>
      </form>

      {updateMessage && (
        <p className="text-center text-sm mt-3 text-lp-green font-semibold">
          {updateMessage}
        </p>
      )}
    </div>
  );
}
