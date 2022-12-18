import Error from "../components/Error";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import List from "../components/List";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Pagination from "../components/Pagination";
import useIssueContext from "../hooks/useIssueContext";

const Home = () => {
  const { issueLoading, issueData, issueError, currentPage, perPage } =
    useIssueContext();

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      <Heading />
      {issueLoading && <Loader />}
      {!issueLoading && issueError && <Error error={issueError} />}
      {!issueLoading && !issueError && issueData && issueData.data.length ? (
        <List data={issueData.data} />
      ) : null}
      {!issueLoading && !issueError && issueData && issueData.data.length ? (
        <Pagination
          totalPages={issueData.data.length}
          currentPage={currentPage}
          perPage={perPage}
        />
      ) : null}
      <Footer />
    </div>
  );
};
export default Home;
