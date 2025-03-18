import React from "react";

const Cards = (props) => {
  function showButton() {
    // Check if the button text exists
    return !!props.cardAction; // Return true if button text exists, false otherwise
  }

  return (
    <div className="flex flex-col items-center justify-center py-4">
      <div className="card w-3/4 lg:card-side bg-base-100 shadow-2xl">
        <figure>
          <img src={props.cardImage} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{props.cardTitle}</h2>
          <p>{props.cardContent}</p>

          <div className="card-actions justify-end">
            <a href={props.cardActionHref}>
              {showButton() && ( // Render the button only if showButton() returns true
                <button name="button" className="btn btn-primary">
                  {props.cardAction}
                </button>
              )}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
