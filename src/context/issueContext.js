import { createContext, useReducer } from "react";

export const IssueContext = createContext();

export const issueReducer = (state, action) => {
  switch (action.type) {
    case "SET_OWNER_NAME": {
      return { ...state, ownerName: action.payload };
    }
    case "SET_REPO_NAME": {
      return { ...state, repoName: action.payload };
    }
    case "SET_DATA": {
      return { ...state, issueData: action.payload };
    }
    case "SET_LOADING": {
      return { ...state, issueLoading: action.payload };
    }
    case "SET_ERROR": {
      return { ...state, issueError: action.payload };
    }
    case "SET_TOTAL_PAGES": {
      return { ...state, totalPages: action.payload };
    }
    case "SET_PER_PAGE": {
      return { ...state, perPage: action.payload };
    }
    case "SET_CURRENT_PAGE": {
      return { ...state, currentPage: action.payload };
    }
    default: {
      return state;
    }
  }
};

export const IssueContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(issueReducer, {
    ownerName: "",
    repoName: "",
    issueData: null,
    issueLoading: false,
    issueError: null,
    totalPages: null,
    perPage: 5,
    currentPage: 0,
  });
  return (
    <IssueContext.Provider value={{ ...state, dispatch }}>
      {children}
    </IssueContext.Provider>
  );
};
