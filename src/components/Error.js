import errorIcon from "../assets/sad.svg";

const Error = ({error}) => {
  return (
    <div className="w-full p-4 sm:p-8 md:p-10 lg:p-12 my-10 flex flex-col items-center justify-center">
      <img src={errorIcon} alt="error" className="w-24 h-24" />
      <p className="text-lg font-medium">{error}</p>
    </div>
  )
}
export default Error