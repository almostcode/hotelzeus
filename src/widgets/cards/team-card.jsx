import PropTypes from "prop-types";
import { Card, Avatar, Typography, Button } from "@material-tailwind/react";

export function TeamCard({ img, name, position, socials }) {
  return (
    <Card color="transparent" shadow={false} className="rounded-0 transform transition-all hover:scale-105 bg-white shadow-lg text-left rounded-2xl p-7 ">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        variant=""
        className="h-full w-full shadow-lg shadow-black/50 rounded-lg"
      />
      <Typography variant="h5" className="font-raleway mt-6 mb-1 text-4xl text-amarilloveige font-extrabold">
        {name}
      </Typography>
      
      {position && (
        <Typography className="font-raleway font-light text-xl text-black  ">
          {position}
        </Typography>
        
        
      )}
      <Button className=" max-w-[200px] mt-4">Detalles</Button>
      
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
