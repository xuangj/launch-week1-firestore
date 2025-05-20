import { useEffect, useState } from 'react'
import fetchPollOptions, { addPollChoice, upvotePollChoice } from "./utils/poll";
import './App.css'

function App() {
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
   
  const fetchData = async () => {
    try {
      const data = await fetchPollOptions();
      const sorted = data.sort((a, b) => b.upvotes - a.upvotes);
      setOptions(sorted);
    } catch (error) {
      console.error("Could not fetch poll choices:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [] );

  const handleAddOption = async (e) => {
    e.preventDefault();
    if(!newOption.trim()) return;

    try {
      await addPollChoice(newOption);
      setNewOption("");
      fetchData();
    } catch (error) {
      console.error("Could not add poll choice:", error);
    }
  };

  const handleUpvote = async (id) => {
    try {
      await upvotePollChoice(id);
      fetchData();

    } catch(error) {
      console.error("Could not upvote:", error);
    }
  };

  return (
    <div>
      <h1>What do you think is the best ice cream flavor?</h1>
      <form onSubmit={handleAddOption}>
        <input type="text" placeholder="probably mint chip..." value={newOption} onChange={(e) => setNewOption(e.target.value)} />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {options.map((option) => (
          <li key={option.id}>
            {option.text} - <strong>{option.upvotes}</strong> votes
            <button onClick={() => handleUpvote(option.id)}>Upvote</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
