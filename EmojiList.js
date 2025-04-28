import React from "react";

const EmojiList = ({ emojis }) => {
  return (
    <div>
      {emojis.map((emoji) => (
        <div key={emoji.id} className="emoji-card">
          <img src={emoji.image} alt={emoji.name} />
          <h3>{emoji.name}</h3>
          <p>{emoji.description}</p>
          <p>Category: {emoji.category}</p>
        </div>
      ))}
    </div>
  );
};

export default EmojiList;
