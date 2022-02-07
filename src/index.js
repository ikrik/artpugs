import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Collection from './pages/collection/Collection';
import Mint from './pages/mint/Mint';

export {default as Home} from "./pages/home/Home";
export {default as Collection} from "./pages/collection/Collection";
export {default as Mint} from "./pages/mint/Mint";
// export {default as Collection} from "./collection";


ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />}/>
      <Route exact path="collection" element={<Collection />}/>
      <Route exact path="mint" element={<Mint />}/>
    </Routes>
  </Router>,
document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
