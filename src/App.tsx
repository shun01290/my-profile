// App.tsx または Layout.tsx 内

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

  useEffect(() => {
    if (!profile) {
      fetch('https://api.github.com/users/shun01290')
        .then(response => response.json())
        .then((data: GitHubProfileData) => setProfile(data));
    }
  }, [profile]);

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
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </GitHubProfileProvider>
  );
}

export default App;
