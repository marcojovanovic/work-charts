import React from 'react';

import { GitHubContext } from '../context';

import { MdLocationCity } from 'react-icons/md';

import { HiLocationMarker } from 'react-icons/hi';
import { FaBlogger } from 'react-icons/fa';

function Bio() {
  const { user } = React.useContext(GitHubContext);

 

  const { location, avatar_url, email, company, name, html_url, blog } = user;

  return (
    <div className="bio-card">
      <div className="bio-flex">
        <div className='flex'>
          <img src={avatar_url} alt={name} className="bio-img" />
          <div>
            <h3 className='bio-name'>{name}</h3>
            <h4>{email || '@jasamnekiemail.gmail.com'}</h4>
          </div>
        </div>
        <div>
          <button className='btn'><a href={html_url}>Follow</a></button>
        </div>
      </div>
      <div className="bio-info">
        <h3>
          <MdLocationCity className='bio-icon' /> {company || 'sam svoj gazda'}
        </h3>
        <h3>
          <HiLocationMarker className='bio-icon' /> {location}
        </h3>
        <h3>
          <FaBlogger className='bio-icon' />
          {blog}
        </h3>
      </div>
    </div>
  );
}

export default Bio;
