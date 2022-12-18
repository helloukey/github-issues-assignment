import useIssueContext from "../hooks/useIssueContext";

const Pagination = ({ totalPages, currentPage, perPage }) => {
  const { dispatch } = useIssueContext();

  const handlePrevious = () => {
    dispatch({type: "SET_CURRENT_PAGE", payload: currentPage - 1})
  };
  const handleNext = () => {
    dispatch({type: "SET_CURRENT_PAGE", payload: currentPage + 1})
  };

  return (
    <div className="btn-group w-full justify-center mt-4 mb-36">
      <button
        onClick={handlePrevious}
        className={`btn ${currentPage === 0 ? "btn-disabled" : ""}`}
      >
        «
      </button>
      <button className="btn pointer-events-none">Page {currentPage + 1}</button>
      <button
        onClick={handleNext}
        className={`btn ${
          currentPage + 1 === Math.ceil(totalPages / perPage) ? "btn-disabled" : ""
        }`}
      >
        »
      </button>
    </div>
  );
};
export default Pagination;
