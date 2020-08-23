import React from 'react';
import logo from './logo.svg';
import './App.css';
import Demo from './Components/Demo';
import DemoHeader from './Components/DemoHeader';
import BaiTapLayout1 from './Components/Btlayout1/BaiTapLayout1';
import BaiTapLayout2 from './Components/BtLayout2/BaiTapLayout2';
import DataBinDing from './Components/DataBinding/DataBinDing';
import HandleEvent from './Components/HandleEvent/HandleEvent';
import Styling from './Components/StylingComponent/Styling';
import RenderWithState from './Components/RenderWithState/RenderWithState';
import BaiTapChonXe from './Components/RenderWithState/BaiTapChonXe';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';

function App() {
  return (
    <div className="App">
      <RenderWithMap></RenderWithMap>    </div>
  );
}

export default App;
