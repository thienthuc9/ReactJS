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
import BaiTapRenderPhim from './Components/RenderWithMap/BaiTapRenderPhim';
import DemoProps from './Components/Props/DemoProps';
import BaiTapQLSP from './Components/Props/BaiTapQLSP';
import BaiTapGioHang from './Components/BTGioHang/BaiTapGioHang';
import BTGioHangRedux from './Components/BTRedux/BTGioHang/BTGioHangRedux';
import BaiTapGameTaiXiu from './Components/BTRedux/BaiTapGameTaiXiu/BaiTapGameTaiXiu';
import FormSinhVien from './Components/ReactForm/FormSinhVien';
import DanhSachSinhVien from './Components/ReactForm/DanhSachSinhVien';

function App() {
  let mangSP =
  [

    { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/sp_blackberry.png" },
    
    { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./img/sp_iphoneX.png" },
    
    { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./img/sp_note7.png" }
    
    ]
  return (

<div className="App">
<DanhSachSinhVien></DanhSachSinhVien>    </div>
  );
}

export default App;
