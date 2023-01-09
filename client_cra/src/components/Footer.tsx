const logo = require("../images/logo.png");

const Footer = () => {
  return (
    <footer className="p-4 md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        <div className="md:flex-[0.5] flex-intial justify-center items-center ">
          <a href={"/"}>
            <img src={logo} alt="logo" className="w-32 cursor-pointer"></img>
          </a>
        </div>
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
          <a
            href="https://www.linkedin.com/in/chowjinglun/"
            className="hover:underline p-10"
          >
            Contact Me
          </a>
        </li>

        <li>
          <a
            href="https://metamask.io/download/"
            className="hover:underline p-7"
          >
            Get metamask
          </a>
        </li>

        <li>
          <a href="https://goerlifaucet.com/" className="hover:underline p-7">
            Get Goerli ETH
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
