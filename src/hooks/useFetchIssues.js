import { useCallback, useState } from "react";
import { Octokit } from "octokit";

const useFetchIssues = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIssues = useCallback(async (owner, repo) => {
    // octokit init
    const octokit = new Octokit({
      auth: "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",
    });

    try {
      // Get response
      setLoading(true);
      setError(null);
      const response = await octokit.request(
        "GET /repos/{owner}/{repo}/issues{?milestone,state,assignee,creator,mentioned,labels,sort,direction,since,per_page,page}",
        {
          owner: owner,
          repo: repo,
        }
      );
      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return { fetchIssues, data, loading, error }
};
export default useFetchIssues;
