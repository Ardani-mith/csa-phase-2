import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const BASE_URL = 'https://jsonplaceholder.typicode.com';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get(`${BASE_URL}/posts`);
      setPosts(response.data);
    } catch (err) {
      setError('Failed to fetch posts. Please try again later.');
      console.error('Error fetching posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const fetchPostDetails = async (postId) => {
    try {
      setLoading(true);
      setError(null);
      const [postResponse, commentsResponse] = await Promise.all([
        axios.get(`${BASE_URL}/posts/${postId}`),
        axios.get(`${BASE_URL}/posts/${postId}/comments`)
      ]);
      
      const userResponse = await axios.get(`${BASE_URL}/users/${postResponse.data.userId}`);
      
      setSelectedPost({
        ...postResponse.data,
        comments: commentsResponse.data,
        user: userResponse.data
      });
    } catch (err) {
      setError('Failed to fetch post details. Please try again later.');
      console.error('Error fetching post details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) {
      fetchPosts();
      return;
    }
    
    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.body.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setPosts(filteredPosts);
  };

  const handlePostClick = (postId) => {
    fetchPostDetails(postId);
  };

  const handleBack = () => {
    setSelectedPost(null);
    fetchPosts();
  };

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="app">
      <header>
        <h1>📝 Blog Explorer</h1>
        <p className="subtitle">Exploring posts from JSONPlaceholder API</p>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search posts..."
          />
          <button type="submit">Search</button>
          {searchQuery && (
            <button type="button" onClick={() => {
              setSearchQuery('');
              fetchPosts();
            }}>
              Clear
            </button>
          )}
        </form>
      </header>

      <main>
        {selectedPost ? (
          <div className="post-details">
            <button onClick={handleBack} className="back-button">
              ← Back to Posts
            </button>
            <article className="selected-post">
              <h2>{selectedPost.title}</h2>
              <div className="post-meta">
                <p className="author">
                  Author: {selectedPost.user.name} ({selectedPost.user.email})
                </p>
                <p className="company">
                  Company: {selectedPost.user.company.name}
                </p>
              </div>
              <p className="post-body">{selectedPost.body}</p>
              
              <section className="comments-section">
                <h3>Comments ({selectedPost.comments.length})</h3>
                <div className="comments-list">
                  {selectedPost.comments.map(comment => (
                    <div key={comment.id} className="comment">
                      <h4>{comment.name}</h4>
                      <p className="comment-email">{comment.email}</p>
                      <p className="comment-body">{comment.body}</p>
                    </div>
                  ))}
                </div>
              </section>
            </article>
          </div>
        ) : (
          <div className="posts-grid">
            {posts.map(post => (
              <article
                key={post.id}
                className="post-card"
                onClick={() => handlePostClick(post.id)}
              >
                <h3>{post.title}</h3>
                <p>{post.body.substring(0, 100)}...</p>
                <button className="read-more">Read More →</button>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default App; 