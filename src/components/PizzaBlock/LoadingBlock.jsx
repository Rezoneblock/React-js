import React from 'react'
import ContentLoader from "react-content-loader";

function LoadingBlock() {
  return (
    <ContentLoader 
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="290" rx="5" ry="5" width="280" height="30" /> 
    <rect x="0" y="420" rx="10" ry="10" width="100" height="30" /> 
    <rect x="180" y="420" rx="10" ry="10" width="100" height="30" /> 
    <rect x="0" y="340" rx="10" ry="10" width="280" height="60" /> 
    <circle cx="140" cy="130" r="130" />
  </ContentLoader>
  )
}

export default LoadingBlock;
