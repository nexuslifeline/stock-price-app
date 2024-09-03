import React from "react";
import PropTypes from "prop-types";

const Spinner = ({ size = "small" }) => {
  const sizes = {
    small: "w-5 h-5 border-2",
    medium: "w-12 h-12 border-4",
    large: "w-20 h-20 border-8"
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className={`${sizes[size]} border-t-transparent border-white border-solid rounded-full animate-spin`}
      ></div>
    </div>
  );
};

Spinner.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default Spinner;
