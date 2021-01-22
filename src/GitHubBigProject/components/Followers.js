import React from 'react';

import { GitHubContext } from '../context';

function Followers() {
  const { followers, error } = React.useContext(GitHubContext);


   if(error){

    return <div></div>
   }

  return (
      <>
    
    <div className="follower-card">
      <div className='follower-follower'>Followers</div>
      { 

        followers && followers?.slice(0,10).map((item,index) => {
          const { html_url, login, avatar_url } = item;

          return (
            <div key={index} className="flex">
              <img src={avatar_url} alt="" className="bio-img mb-2" />
              <div className="ml-2">
                <p className="follower-title">{login}</p>
                <a>{html_url}</a>
              </div>
            </div>
          );
        })}
    </div>
    </>
  );
}

export default Followers;
