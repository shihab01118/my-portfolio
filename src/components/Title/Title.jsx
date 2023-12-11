import PropTypes from "prop-types";

const Title = ({ heading, subHeading }) => {
  return (
    <div className="text-center text-secondary">
      <p className="px-2 py-[2px] bg-primary mb-3 w-fit mx-auto">{subHeading}</p>
      <h3 className="text-4xl font-semibold">{heading}</h3>
    </div>
  );
};

Title.propTypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string,
};

export default Title;
