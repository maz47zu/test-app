import React from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { InputForm } from './InputForm';
import Navigation from './navigation/Navigation';
import FirstLesson from './routes/FirstLesson';
import AboutMe from './routes/AboutMe';
import Policy from './routes/Policy';
import ContactPage from './routes/ContactPage';
import ApiTest from './routes/ApiTest';

const routesPaths = {
    about:'about',
    home:'/',
    page404:'*',
    contact:'contact',
    firstLesson:'firstLesson',
    policy: 'policy',
    api:'api'
}

function App() {
  return (
    <BrowserRouter>
          <Navigation/>
          <Routes>
              <Route path={`/${routesPaths.home}`} element={<InputForm defaultValue={'LastLogin'}/>}/>
              <Route path={`/${routesPaths.page404}`} element={<div>404</div>}/>
              <Route path={`/${routesPaths.about}`} element={<AboutMe/>}/>
              <Route path={`/${routesPaths.contact}`} element={<ContactPage/>}/>
              <Route path={`/${routesPaths.firstLesson}`} element={<FirstLesson/>}/>
              <Route path={`/${routesPaths.policy}`} element={<Policy/>}/>
              <Route path={`/${routesPaths.api}`} element={<ApiTest/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
