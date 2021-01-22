import React from 'react';
import Bio from './Bio';
import Followers from './Followers';
import Repos from './Repos';
import User from './User';
import Loading from './Loading'

import { GitHubContext } from '../context';

function MainBody() {
  

  const { loading } = React.useContext(GitHubContext);

  return (
    <>
    {loading ? <Loading /> : <div>
      <User />
      <div className="flex-items">
        <Bio />
        <Followers />
      </div>

      <Repos />
    </div>}
    </>
  );
}

export default MainBody;
