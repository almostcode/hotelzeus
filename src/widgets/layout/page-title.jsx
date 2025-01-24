import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";
import { FaRankingStar } from "react-icons/fa6";
export function PageTitle({ section, heading, children, background, icono}) {
  return (
    <div className={`${background}  text-center flex items-center justify-center flex-col`}>
      <Typography variant="lead" className="font-semibold text-amarilloveige text-center">
        {section}
        </Typography>
      <Typography variant="h2" color="blue-gray" className="font-raleway my-3 text-4xl  md:text-5xl text-white font-bold">
        {heading.toUpperCase()}
      </Typography>
      <Typography variant="lead" className="text-white">
        {children}
      </Typography>
      {icono}
    </div>
  );
}

PageTitle.propTypes = {
  section: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
