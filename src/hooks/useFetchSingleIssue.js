import { useCallback, useState } from "react";
import { Octokit } from "octokit";

const useFetchSingleIssue = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchSingleIssue = useCallback(async (owner, repo, issueNumber) => {
    // octokit init
    const octokit = new Octokit({
      auth: "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",
    });

    try {
      // Get response
      setLoading(true);
      setError(null);
      const response = await octokit.request('GET /repos/{owner}/{repo}/issues/{issue_number}', {
        owner: owner,
        repo: repo,
        issue_number: issueNumber
      });

      setData(response);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }, []);

  return { fetchSingleIssue, data, loading, error };
};
export default useFetchSingleIssue;
