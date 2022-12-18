import { useContext } from "react";
import { IssueContext } from "../context/issueContext";

const useIssueContext = () => {
  const context = useContext(IssueContext);

  if (!context) {
    throw Error("useIssueContext must be wrapped inside the IssueContext Provider.");
  }

  return context;
};
export default useIssueContext;
