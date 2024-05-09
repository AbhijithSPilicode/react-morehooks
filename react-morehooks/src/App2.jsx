import React, { useReducer, useState } from 'react';
import './App.css';

function App2() {
  function reducer(posts, action) {
    switch (action.type) {
      case 'ADDED_POST':
        return [...posts, action.payload];
      default:
        return posts;
    }
  }

  const [posts, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADDED_POST', payload: { name, toggle: false } });
    setName('');
  };

  const handleToggle = (index) => {
    const newPosts = [...posts];
    newPosts[index].toggle = !newPosts[index].toggle;
    dispatch({ type: 'ADDED_POST', payload: newPosts });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        <button type="submit">Add Post</button>
      </form>
      <div>
        {posts.map((post, index) => (
          <div key={index}>
            <h1>{post.name}</h1>
            {post.toggle ? <p>This is a hidden content</p> : null}
            <button onClick={() => handleToggle(index)}>
              {post.toggle ? 'Hide' : 'Show'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App2;
