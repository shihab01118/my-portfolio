const Footer = () => {
  return (
    <div className="bg-secondary text-white py-16 px-8">
      <p className="text-center text-sm md:text-base">
        Copyright © {new Date().getFullYear()}{" "}
        <a
          href="https://measly-mass.surge.sh"
          rel="noreferrer"
          target="_blank"
          className="text-primary underline"
        >
          DEVSHIHAB
        </a>
        . All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
