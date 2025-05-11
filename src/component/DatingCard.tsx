
import React, { useState } from "react";


type Profile = {
  name: string;
  age: number;
  zodiac: string;
  image: string;
};

const sampleProfile: Profile = {
  name: "Luna",
  age: 24,
  zodiac: "Leo ♌",
  image: "https://i.pravatar.cc/300", 
};

const DatingCard: React.FC = () => {
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(null);

  return (
    <div className="card-container">
      <img className="card-image" src={sampleProfile.image} alt="Profile" />
      <div className="card-info">
        <h2>{sampleProfile.name}, {sampleProfile.age}</h2>
        <p>{sampleProfile.zodiac}</p>
      </div>
      <div className="card-buttons">
        <button onClick={() => setFeedback("dislike")} className="dislike">❌</button>
        <button onClick={() => setFeedback("like")} className="like">❤️</button>
      </div>
      {feedback && <p className="feedback">You {feedback === "like" ? "liked" : "disliked"} {sampleProfile.name}</p>}
    </div>
  );
};

export default DatingCard;
