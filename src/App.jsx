import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Figure from "./components/Figure";

function App() {
  const works = [
    { id: 1, title: "work 1", url: "images/img-1.jpg", desc: "work 1 description" },
    { id: 2, title: "work 2", url: "images/img-2.jpg", desc: "work 2 description" },
    { id: 3, title: "work 3", url: "images/img-3.jpg", desc: "work 3 description" },
    { id: 4, title: "work 4", url: "images/img-4.jpg", desc: "work 4 description" },
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
      {work && (
        <div>
          <Figure data={work} />

          {/* 💡 pagination 부분의 버튼 코드를 아래와 같이 수정합니다 */}
          <div
            className="pagination"
            style={{ marginTop: "20px", display: "flex", gap: "20px", alignItems: "center" }}
          >
            <button
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              style={{
                background: "none",
                border: "none",
                cursor: currentIndex === 0 ? "default" : "pointer",
                opacity: currentIndex === 0 ? 0.4 : 1, // 비활성화 시 흐리게 처리
                padding: 0,
              }}
            >
              <img
                src="images/left.png"
                alt="이전 작품 보기"
                style={{ width: "40px", height: "40px" }}
              />
            </button>

            <button
              type="button"
              onClick={handleNext}
              disabled={currentIndex === works.length - 1}
              style={{
                background: "none",
                border: "none",
                cursor: currentIndex === works.length - 1 ? "default" : "pointer",
                opacity: currentIndex === works.length - 1 ? 0.4 : 1, // 비활성화 시 흐리게 처리
                padding: 0,
              }}
            >
              <img
                src="images/right.png"
                alt="다음 작품 보기"
                style={{ width: "40px", height: "40px" }}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default App;
