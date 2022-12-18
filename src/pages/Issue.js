import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Content from "../components/Content";
import Error from "../components/Error";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import useFetchSingleIssue from "../hooks/useFetchSingleIssue";
import useIssueContext from "../hooks/useIssueContext";

const Issue = () => {
  const { number } = useParams();
  const { data, loading, error, fetchSingleIssue } = useFetchSingleIssue();
  const { ownerName, repoName } = useIssueContext();

  useEffect(() => {
    fetchSingleIssue(ownerName, repoName, number);
  }, [fetchSingleIssue, ownerName, repoName, number]);

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      {loading && <Loader />}
      {!loading && error && <Error error={error} />}
      {!loading && !error && data ? (
        <Content data={data.data} />
      ) : null}
      <Footer />
    </div>
  );
};
export default Issue;
