import Spinner from "@/app/components/Common/Spinner";

const Button = ({ children, isBusy, ...props }) => {
  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center min-w-[120px]"
      {...props}
    >
      {isBusy && (
        <>
          <Spinner />
          <span className="mr-2" />
        </>
      )}
      {children}
    </button>
  );
};

export default Button;
