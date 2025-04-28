import React, { useState, useEffect } from "react";
import EmojiList from "./EmojiList";
import SearchBar from "./SearchBar";
import './App.css';

const App = () => {
  const [emojis, setEmojis] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmojis = async () => {
      const response = await fetch('/api/emojis');
      const data = await response.json();
      setEmojis(data);
      setLoading(false);
    };
    fetchEmojis();
  }, []);

  const filteredEmojis = emojis.filter(emoji => emoji.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="App">
      <h1>Emoji Hub</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? <p>Loading...</p> : <EmojiList emojis={filteredEmojis} />}
    </div>
  );
};

export default App;
