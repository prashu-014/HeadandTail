
import ErrorImg from "/notfound.jpg";

const Error = () => {
  return (
    <div className="w-full max-w-screen-md mx-auto p-4">
      <img
        src={ErrorImg}
        alt="error"
        className="w-full h-auto object-contain"
      />
    </div>
  );
};

export default Error;
