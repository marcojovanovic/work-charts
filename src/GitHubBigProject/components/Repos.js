import React from 'react';

import Column3dChart from '../charts/Column3dChart';
import PieChart from '../charts/PieChart';

import { GitHubContext } from '../context';

function Repos() {
  const { pieData, columnData } = React.useContext(GitHubContext);

  return (
    <div className="container">
      <div className="flex">
    { pieData &&  <div className="chart-item">
          <PieChart
            data={pieData}
          />
        </div>}
    {columnData && <div className="chart-item">
    <Column3dChart data={columnData}  />
        </div> }
      </div>
    </div>
  );
}

export default Repos;
