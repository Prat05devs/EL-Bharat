/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Immigration } from "./pages/Immigration";
import { JobsEducation } from "./pages/JobsEducation";
import { Corporate } from "./pages/Corporate";
import { Travel } from "./pages/Travel";
import { Liaisoning } from "./pages/Liaisoning";

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/immigration" element={<Immigration />} />
          <Route path="/jobs" element={<JobsEducation />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/travel" element={<Travel />} />
          <Route path="/liaisoning" element={<Liaisoning />} />
        </Routes>
      </Layout>
    </Router>
  );
}
