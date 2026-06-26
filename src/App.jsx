import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";
import Controls from "./components/Controls";

function App() {
  const works = [
    { id: 1, title: "work-1", url: "images/img-1.jpg", desc: "work 1 description" },
    { id: 2, title: "work-2", url: "images/img-2.jpg", desc: "work 2 description" },
    { id: 3, title: "work-3", url: "images/img-3.jpg", desc: "work 3 description" },
    { id: 4, title: "work-4", url: "images/img-4.jpg", desc: "work 4 description" },
  ];
  const [selectedId, setSelectedId] = useState(1);
  const currentIndex = works.findIndex(item => item.id === selectedId);
  const work = works[currentIndex];
  const handlePrev = () => {
    if (currentIndex > 0) setSelectedId(works[currentIndex - 1].id);
  };
  const handleNext = () => {
    if (currentIndex < works.length - 1) setSelectedId(works[currentIndex + 1].id);
  };

  return (
    <>
      <Header />
      <Nav
        id={selectedId}
        data={works}
        onChangeMode={id => {
          setSelectedId(id);
        }}
      />
      {work && <Figure data={work} />}
      <Controls
        currentIndex={currentIndex}
        works={works}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </>
  );
}
export default App;
