const alertStyles = {
  success: "bg-green-100 text-green-800 border-green-500",
  error: "bg-red-100 text-red-800 border-red-500",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-500",
  info: "bg-blue-100 text-blue-800 border-blue-500"
};
const Alert = ({ type = "info", message, className, onClose }) => {
  return (
    <div
      className={`flex items-center justify-between p-4 border rounded-lg ${alertStyles[type]} my-4 ${className}`}
      role="alert"
    >
      <span>{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
          aria-label="Close"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
