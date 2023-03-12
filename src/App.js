import { Route, Routes } from "react-router-dom"

import './App.css';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import '@aws-amplify/ui-react/styles.css';

import Layout from './components/Layout';
import Home from "./pages/home"
import About from "./pages/about"
import Providers from "./pages/providers"
import { Dashboard } from "./pages/dashboard"

Amplify.configure(awsExports);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route index element={<Dashboard />} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="providers" element={<Providers />} />
        </Route>
      </Routes>
    </>

  );
}

export default App;
