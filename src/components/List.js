import { Link } from "react-router-dom";
import useIssueContext from "../hooks/useIssueContext";
import { formatDistanceToNow } from "date-fns";
import UserCard from "./UserCard";
import { useState } from "react";

const List = ({ data }) => {
  const { currentPage, perPage } = useIssueContext();
  const [isUser, setIsUser] = useState(false);
  const [userId, setUserId] = useState(null);

  const handleMouseEnter = (e) => {
    setUserId(e.target.id);
    setIsUser(true);
  }

  const handleMouseLeave = (e) => {
    setUserId(null);
    setIsUser(false);
  }

  return (
    <div className="w-full px-4 sm:px-8 md:px-10 lg:px-12">
      <div className="overflow-x-auto w-full max-w-7xl mx-auto">
        <table className="table w-full border-2 border-neutral">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Status</th>
              <th>Comments</th>
            </tr>
          </thead>
          <tbody>
            {data
              .slice(currentPage * perPage, (currentPage + 1) * perPage)
              .map((issue, index) => (
                <tr key={issue.id} className="hover">
                  <th>{index + 1}</th>
                  <th className="hover:text-secondary flex flex-col gap-2">
                    <Link to={`/issues/${issue.number}`}>{issue.title}</Link>
                    <p className="text-xs font-thin flex flex-nowrap items-center gap-2">
                      <span className="opacity-50">
                        #{issue.number}
                      </span>
                      <span className="opacity-50">
                        opened {formatDistanceToNow(new Date(issue.created_at), {addSuffix: true})} by
                      </span>
                      <span
                        id={issue.user.id}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="font-medium text-white opacity-100 hover:cursor-pointer">
                        {issue.user.login}
                        <UserCard user={issue.user} isUser={isUser} userId={userId} />
                      </span>
                    </p>
                  </th>
                  <th>{issue.state}</th>
                  <th>
                    <Link to={`/issues/${issue.number}`}>{issue.comments}</Link>
                  </th>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default List;
