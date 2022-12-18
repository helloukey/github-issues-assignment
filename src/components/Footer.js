import githubIcon from "../assets/github.svg";

const Footer = () => {
  return (
    <footer className="w-full mt-auto footer items-center justify-center p-4 bg-neutral text-neutral-content">
      <div className="items-center grid-flow-col">
        <img src={githubIcon} alt="github" />
        <p>Copyright © 2022 - All right reserved</p>
      </div>
    </footer>
  );
};
export default Footer;
