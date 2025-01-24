import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { teamData } from "@/data";
import TeamCard from "@/widgets/cards/team-card";
const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
    };

    return (
        <ReactCardFlip className="h-[500px] w-[200px]" isFlipped={isFlipped} flipDirection="horizontal">
            {/* Front Side */}
            <div className="card front">
                {teamData.map(({ img, name, position, socials, texto }) => (

                    <TeamCard
                        key={name}
                        img={img}
                        name={name.toUpperCase()}
                        position={position}
                        className=" "

                    />

                ))}
            </div>

            {/* Back Side */}
            <div className="card back">
                <h2>This is the back of the card.</h2>
                <button onClick={handleClick}>Click to flip</button>
            </div>
        </ReactCardFlip>
    );
};

export default FlipCard;

