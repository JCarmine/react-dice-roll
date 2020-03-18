import React from 'react';
// import DieColumn from './DieColumn';

import '../styles/DieFace.css';

function DieFace({ face, pipCount }) {
  const layoutColumnsRequired = pipCount > 3;

  const configColumns = pipQuantity => {
    let columnConfig = [];

    switch (pipQuantity) {
      case 4:
        columnConfig = [2, 2];
        break;
      case 5:
        columnConfig = [2, 1, 2];
        break;
      case 6:
        columnConfig = [3, 3];
        break;
      default:
        return
    }
    return columnConfig;
  }

  const generateColumns = quantity => {
    const columnConfig = configColumns(quantity);
    const columns = columnConfig.map((pipsInColumn, index) =>
      <div className={`column column-${index + 1}`}>
        {generatePips(pipsInColumn)}
      </div>
    );

    return columns;
  }

  const generatePips = quantity => {
    let pipCollection = [];
    for (let i = 0; i < quantity; i++) {
      pipCollection.push(<div className="pip"></div>)
    }

    return pipCollection;
  }

  return (
    <div className={`die-face-${face}`}>
      <div className={`face face-${pipCount}`}>
        {layoutColumnsRequired
          ? generateColumns(pipCount)
          : generatePips(pipCount)
        }
      </div>
    </div>
  );
}

export default DieFace;
