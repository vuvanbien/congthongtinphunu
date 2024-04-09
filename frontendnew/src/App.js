import logo from './logo.svg';
import React, { useState } from 'react'
import './App.css';
import './css/style.scss'
import './css/bootstrap.scss'
import './css/animate.scss'
import './css/colorbox.scss'
import './css/responsive.scss'
import Layout from './layouts/Layout';
import LawDetailPage from './page/law/LawDetailPage';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LawPage from './page/law/LawPage';
import SocialPoliticsPage from './page/socialPolitics/SocialPoliticsPage';
import SocialPoliticsDetail from './page/socialPolitics/SocialPoliticsDetail';
import HealthCarePage from './page/healthCare/HealthCarePage';
import HealthCareDetailPage from './page/healthCare/HealthCareDetailPage';
import BabyCarePage from './page/babyCare/BabyCarePage';
import BabyCareDetail from './page/babyCare/BabyCareDetail';
import LaborEmploymentPage from './page/laborEmployment/LaborEmploymentPage';
import LaborEmploymentDetail from './page/laborEmployment/LaborEmploymentDetail';
import FamilyPage from './page/family/FamilyPage';
import FamilyDetail from './page/family/FamilyDetail';
import EntertainmentPage from './page/entertainment/EntertainmentPage';
import EntertainmentDetail from './page/entertainment/EntertainmentDetail';
import SearchPage from './page/search/SearchPage';
import SearchDetailPage from './page/search/SearchDetailPage';
import IndexPage from './page/law/IndexPage';
import ChatPage from './page/chat/ChatPage';
import { DataProvider } from './utils/getData';
function App() {
  return (
    <>
      <Router>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<LawPage />} />
              <Route path='/get_new/' element={<LawDetailPage />} />
              <Route path='/ctxh' element={<SocialPoliticsPage />} />
              <Route path='/ctxh/get_new' element={<SocialPoliticsDetail />} />
              <Route path='/cssk' element={<HealthCarePage />} />
              <Route path='/cssk/get_new' element={<HealthCareDetailPage />} />
              <Route path='/chamsoctre' element={<BabyCarePage />} />
              <Route path='/chamsoctre/get_new' element={<BabyCareDetail />} />
              <Route path='/ldvl' element={<LaborEmploymentPage />} />
              <Route path='/ldvl/get_new' element={<LaborEmploymentDetail />} />
              <Route path='/giadinh' element={<FamilyPage />} />
              <Route path='/giadinh/get_new' element={<FamilyDetail />} />
              <Route path='/giaitri' element={<EntertainmentPage />} />
              <Route path='/giaitri/get_new' element={<EntertainmentDetail />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/search/get_new' element={<SearchDetailPage />} />
              <Route path='/phapluat' element={<IndexPage />} />
              <Route path='/chat' element={<ChatPage />} />
            </Route>
          </Routes>
        </DataProvider>
      </Router>
    </>
  );
}

export default App;
