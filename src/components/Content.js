import ReactMarkdown from "react-markdown";

const Content = ({ data }) => {
  return (
    <div className="w-full px-4 sm:px-8 md:px-10 lg:px-12">
      <div className="w-full max-w-7xl mx-auto mt-10 sm:mt-16 lg:mt-20">
        <h2 className="text-xl md:text-4xl font-medium">
          {data.title}{" "}
          <span className="font-thin opacity-50">#{data.number}</span>
        </h2>
        <div className="w-full max-w-7xl mx-auto mt-10 p-4 sm:p-8 md:p-10 lg:p-12 mb-36 border-2 border-neutral prose">
          <ReactMarkdown>{data.body}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};
export default Content;
