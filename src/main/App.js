import './Style/Style.css';
import { React, useState } from 'react';
import { Routes, BrowserRouter, Route, } from "react-router-dom";

import TopBare from './TopBare';
import { Accueil } from './Pages/Accueil';
import { TheFooter } from './Pages/Accueil';
import Gallery from './Pages/Galerie';
import Travaux from './Pages/Travaux';
import Service from './Pages/Service';
import Contact from './Pages/Contact';

import Interior1 from './Pages/Projects/Interior_Design';
import SmallHouse1 from './Pages/Projects/Small_House_1';
import Hangar1 from './Pages/Projects/Hangar_1';
import Touba from './Pages/Projects/Touba';
import Pharmacie1 from './Pages/Projects/Pharmacie_1';
import Pharmacie2 from './Pages/Projects/Pharmacie_2';
import Gym from './Pages/Projects/Gym';
import City1 from './Pages/Projects/Cité';
import MSAD from './Pages/Projects/MSAD';
import Villa from './Pages/Projects/Villa_A';
import Villa_Saly from './Pages/Projects/Villa_B';
import VillaTerangaAlAmin from './Pages/Projects/Villa_Teranga_Al_Amin';

function App() {

  const [TheImage, setTheImage] = useState('');
  const [TheTitle, setTheTitle] = useState('');
  const [TheDate, setTheDate] = useState('');
  const [TheLink, setTheLink] = useState('/');


  const changeTab = (newTab, link) => {
    console.log(newTab, link);
  }

  const GetImage = (theimage, title, date, link) => {
    setTheImage(theimage);
    setTheTitle(title);
    setTheDate(date);
    setTheLink(link);
  }

  return (
    <BrowserRouter>
      <div className="App">
        <TopBare onChangeTab={changeTab} />
        <div className='App_container'>
          <div className='hover_loader_container'>
            <div className='hover_loader'>
              <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
            </div>
          </div>
          <Routes>
            <Route exact path="/"
              element={<Accueil GetImageToApp={GetImage} />}
            />
            <Route exact path="/Travaux" element={<Travaux />} />
            <Route exact path="/Services" element={<Service />} />
            <Route exact path="/Contact" element={<Contact />} />
            <Route exact path="/Galerie" element={<Gallery
              TheImageToGallery={TheImage}
              TheTitleToGallery={TheTitle}
              TheDateToGallery={TheDate}
              TheLinkToGallery={TheLink}
            />} />
            {/* !############################################## */}
            <Route exact path="/Interior1" element={<Interior1 />} />
            <Route exact path="/SmallHouse1" element={<SmallHouse1 />} />
            <Route exact path="/Hangar1" element={<Hangar1 />} />
            <Route exact path="/Touba" element={<Touba />} />
            <Route exact path="/Pharmacie1" element={<Pharmacie1 />} />
            <Route exact path="/Pharmacie2" element={<Pharmacie2 />} />
            <Route exact path="/Gym" element={<Gym />} />
            <Route exact path="/City1" element={<City1 />} />
            <Route exact path="/MSAD" element={<MSAD />} />
            <Route exact path="/Villa" element={<Villa />} />
            <Route exact path="/Villa-Saly" element={<Villa_Saly />} />
            <Route exact path="/VillaTerangaAlAmin" element={<VillaTerangaAlAmin />} />
          </Routes>
          <TheFooter />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
