import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Ui from "pages/Ui";
import Appointmentdesigns from "pages/Appointmentdesigns";
import Appointment from "pages/Appointment";
import '../src/style.css';
export default function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Ui />} />
          <Route path="Appointmentdesigns" element={<Appointmentdesigns/>}/>
          <Route path="Appointment" element={<Appointment/>}/>
        </Routes>
      </Router>
    </>
  );
}

