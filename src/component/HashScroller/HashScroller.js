import { useHashScroll } from "react-hash-scroll";
import React from 'react'

const HashScroller = ({ children, hash, options }) => {
  const scrollRef = useHashScroll(hash, options); //options is optional

  return <div ref={scrollRef}>{children}</div>;
};

export default HashScroller