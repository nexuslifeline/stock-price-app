import PropTypes from "prop-types";

const SearchInput = ({ value, onClear, ...rest }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        className="border p-3 w-full rounded-lg text-lg pr-10"
        value={value}
        {...rest}
      />
      {value && (
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 text-gray-600 text-xl"
          onClick={onClear}
        >
          &times;
        </button>
      )}
    </div>
  );
};

SearchInput.propTypes = {
  value: PropTypes.string,
  onClear: PropTypes.func
};

export default SearchInput;
