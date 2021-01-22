import React from 'react';

import { GitHubContext } from '../context';

import { FaBookDead, FaCode } from 'react-icons/fa';
import { RiUserFollowFill, RiUserFollowLine} from 'react-icons/ri'

function User() {
  const { user } = React.useContext(GitHubContext);

  

  const { followers, following, public_gists, public_repos} = user;

  return (
    
    <div className="flex-items">
      <div className="github-card">
        <div className='githubIcon-background'>
           <FaBookDead className="github-icon" />
        </div>
       
        <div>
          <h1>{public_repos}</h1>
          <h2>repos</h2>
        </div>
      </div>
      <div className="github-card">
        <div className='githubIcon-background purple-content'>
           <RiUserFollowFill className="github-icon icon-color-red" />
        </div>
       
        <div>
          <h1>{followers}</h1>
          <h2>followers</h2>
        </div>
      </div>
      <div className="github-card">
        <div className='githubIcon-background green-content'>
           <RiUserFollowLine className="github-icon icon-color-green" />
        </div>
       
        <div>
          <h1>{following}</h1>
          <h2>following</h2>
        </div>
      </div>
      <div className="github-card">
        <div className='githubIcon-background yellow-content'>
           <FaCode className="github-icon icon-color-purple" />
        </div>
       
        <div>
          <h1>{public_gists}</h1>
          <h2>Gist</h2>
        </div>
      </div>
    </div>
    
  );
}

export default User;
