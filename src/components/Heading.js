import { useEffect, useState } from "react";
import useFetchIssues from "../hooks/useFetchIssues";
import useIssueContext from "../hooks/useIssueContext";

const Heading = () => {
  const [ownerName, setOwnerName] = useState("");
  const [repoName, setRepoName] = useState("");
  const { fetchIssues, data, loading, error } = useFetchIssues();
  const { dispatch } = useIssueContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "SET_OWNER_NAME", payload: ownerName });
    dispatch({ type: "SET_REPO_NAME", payload: repoName });
    fetchIssues(ownerName, repoName);
  };

  useEffect(() => {
    dispatch({ type: "SET_DATA", payload: data });
    dispatch({ type: "SET_LOADING", payload: loading });
    dispatch({ type: "SET_ERROR", payload: error });
    dispatch({ type: "SET_CURRENT_PAGE", payload: 0 });

    // Reset input fields on successful data
    if (data) {
      setOwnerName("");
      setRepoName("");
    }
  }, [data, dispatch, error, loading]);

  return (
    <header className="w-full p-4 sm:p-8 md:p-10 lg:p-12 mt-10">
      <h2 className="text-xl md:text-4xl text-center font-medium">
        Search Repository Issues
      </h2>

      {/* Search */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-7xl grid grid-cols-2 sm:grid-cols-5 items-center gap-4 my-8 justify-center mx-auto"
      >
        <input
          type="text"
          placeholder="Enter Repository Owner..."
          className="input input-bordered w-full col-span-2"
          onChange={(e) => setOwnerName(e.target.value)}
          value={ownerName}
          required
        />
        <input
          type="text"
          placeholder="Enter Repository Name..."
          className="input input-bordered w-full col-span-2"
          onChange={(e) => setRepoName(e.target.value)}
          value={repoName}
          required
        />
        <button
          type="submit"
          className={`btn btn-block ${
            loading ? "btn-active pointer-events-none" : ""
          }`}
        >
          {loading ? "Searching..." : "Search"}
        </button>
      </form>
    </header>
  );
};
export default Heading;
