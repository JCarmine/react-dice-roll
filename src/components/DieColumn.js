import React from 'react';

// import '../styles/DieColumn.css';

function DieColumn({ columnNumber, pips }) {
  const generatePips = () => {
    // console.log(pips)
    for (var i = 0; i <= 1000; i++) {
      // console.log('runn')
      return <div className="pip">a</div>;
    }
  }

  return (
    <div className={`column column-${columnNumber}`}>
      {generatePips()}
    </div>
  );
}

export default DieColumn;