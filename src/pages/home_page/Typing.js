import React from "react";
import Typewriter from "typewriter-effect";

/**
 * Typing Component
 * This component renders a typewriter effect with a list of professions.
 */
function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Developer",
                    "Software Engineer",
                    "Frontend Developer",
                    "Backend Developer",
                ], // List of strings to display
                autoStart: true, // Automatically start the typewriter effect
                loop: true, // Loop the typewriter effect indefinitely
                deleteSpeed: 50, // Speed of deleting characters in milliseconds
            }}
        />
    );
}

export default Typing;
