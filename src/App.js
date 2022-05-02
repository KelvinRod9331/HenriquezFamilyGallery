import "./App.css";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import Gallery from "./comps/Gallery";
import Modal from "./comps/Modal";
import NotFound from "./comps/NotFound";
import Navbar from "./comps/NavBar";

import { useState } from "react";
import { Route, Switch } from "react-router-dom";

function App() {
  const [selectedImg, setSelectedImg] = useState(null);
  return (
    <div className="App">
      <Navbar />
      <Title />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <UploadForm />
            <Gallery setSelectedImg={setSelectedImg} />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>

        {selectedImg && (
          <Modal setSelectedImg={setSelectedImg} selectedImg={selectedImg} />
        )}
      </div>
    </div>
  );
}

export default App;
