import React, { createContext, useState, useEffect, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Contact from './pages/ContactPage';

interface GitHubProfileData {
  avatar_url: string;
  login: string;
}

const GitHubProfileContext = createContext<GitHubProfileData | null>(null);

type GitHubProfileProviderProps = {
  children: React.ReactNode;
};

const GitHubProfileProvider: React.FC<GitHubProfileProviderProps> = ({ children }) => {
  const [profile, setProfile] = useState<GitHubProfileData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 環境変数からGitHubのアクセストークンを取得
    const token = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

    if (!token) {
      setError('GitHubアクセストークンが設定されていません。');
      setLoading(false);
      return;
    }

    // GitHubのプロフィール情報を取得
    fetch('https://api.github.com/users/shun01290', {
      headers: {
        Authorization: `token ${token}`,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: GitHubProfileData) => {
        setProfile(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Failed to fetch GitHub profile data:', error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <GitHubProfileContext.Provider value={profile}>
      {children}
    </GitHubProfileContext.Provider>
  );
};

export const useGitHubProfile = () => useContext(GitHubProfileContext);

function App() {
  return (
    <GitHubProfileProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </GitHubProfileProvider>
  );
}

export default App;
