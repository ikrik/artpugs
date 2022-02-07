// import './App.css';
import React from 'react';
import Roadmap from './components/Roadmap/Roadmap';
import Story from './components/Story/Story';
import Team from './components/Team/Team';
import About from './components/About/About';
import Layout from '../../Layout/Layout';
import HashScroller from '../../component/HashScroller/HashScroller';

function Home() {

  return (
    <Layout enableHeaderChildren>
      <About />
      <HashScroller hash="#RoadMap" options={{ position: "start", behavior: "smooth" }}>
        <Roadmap />
      </HashScroller>
      <Team />
      <HashScroller hash="#Story" options={{ behavior: "smooth" }}>
        <Story />
      </HashScroller>
    </Layout>
  );
}

export default Home;
