import React, { createContext, useState, useEffect } from 'react';

export const GitHubContext = createContext(); // izvoz za komponente

const GitHubProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [followers, setFollowers] = useState('');
  const [repos, setRepos] = useState('');
  const [user, setUser] = useState('');
  const [searchValue, setSearchValue] = useState('bradtraversy');

  // api call

  useEffect(() => {
    allUsersInfo();
  }, []);

  const basicUrl = `https://api.github.com/users/${searchValue}`;

  const repoUrl = `https://api.github.com/users/${searchValue}/repos`;

  const followersUrl = `https://api.github.com/users/${searchValue}/followers`;

  async function allUsersInfo() {
    setLoading(true);

    const data = await fetch(basicUrl);

    const res = await data.json();

    if(res){

        setUser(res);
    }

  

    try {
      if (searchValue.length === 0 || res.message === 'Not Found') {
        setError(true);
      } 
        setError(false);
        setSearchValue('');

      if(user){


        const reposData = await fetch(repoUrl);

        const repoData = await reposData.json();

        setRepos(repoData);

        const followersData = await fetch(followersUrl);

        const followData = await followersData.json();

        setFollowers(followData);


      }        

      
    } catch {
      setError(true);
    }

    setLoading(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(user){

       allUsersInfo();
    }

   
  };

  // prvi chart pie

  let pieData;

  if (repos) {
    pieData = repos.reduce((total, item) => {
      const { language } = item;

      if (!language) return total;
      if (!total[language]) {
        total[language] = { label: language, value: 1 };
      } else {
        total[language] = {
          ...total[language],
          value: total[language].value + 1,
        };
      }

      return total;
    }, {});
  }

  // 4 chart column3d

  let columnData;

  if (repos) {
    columnData = repos.reduce((total, item) => {
      const { name, stargazers_count } = item;

      if (!total[name]) {
        total[name] = { label: name, value: stargazers_count };
      } else {
        total[name] = { ...total[name], value: stargazers_count };
      }

      return total;
    }, {});
  }
  console.log(columnData);

  return (
    <GitHubContext.Provider
      value={{
        searchValue,
        followers,
        repos,
        user,
        loading,
        error,
        handleSubmit,
        setSearchValue,
        pieData,
        columnData,
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export { GitHubProvider }; // izvoz za index.js
