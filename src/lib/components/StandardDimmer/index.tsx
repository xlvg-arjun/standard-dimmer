import React from 'react';

import findHighestZIndex from 'highest-z-index-of-document';

interface DimmerProps {
  zIndex?: number;
}

function StandardDimmer({ zIndex }: DimmerProps) {
  let highestZIndex = null;
  if (zIndex || (zIndex === 0)) {
    highestZIndex = zIndex;
  } else {
    highestZIndex = findHighestZIndex();
  }

  const style = {
    zIndex: highestZIndex,
    background: '#000',
    opacity: 0.5,
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  };

  return (
    <div style={style} />
  );
}

export default StandardDimmer;
