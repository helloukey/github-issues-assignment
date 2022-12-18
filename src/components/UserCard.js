const UserCard = ({ user, isUser, userId }) => {
  console.log(user);
  return (
    <div
      className={`bg-gray-800 fixed -translate-y-10 z-10 w-full max-w-xs flex flex-col items-center gap-4 p-8 ${
        isUser && Number(userId) === user.id ? "" : "hidden"
      }`}
    >
      <a href={user.html_url} target="_blank" rel="noreferrer">
        @{user.login}
      </a>
      <a href={user.html_url} target="_blank" rel="noreferrer">
        <img
          src={user.avatar_url}
          alt={user.login}
          className="w-10 h-10 rounded-full border border-gray-500"
        />
      </a>
    </div>
  );
};
export default UserCard;
