// assets
import githubIcon from "../assets/github.svg";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-neutral">
      <Link to="/" className="btn btn-ghost normal-case text-xl">
        <img src={githubIcon} alt="home" className="w-10 h-10" />
        <h1 className="mx-4">GitHub Issues</h1>
      </Link>
    </div>
  );
};
export default Navbar;
