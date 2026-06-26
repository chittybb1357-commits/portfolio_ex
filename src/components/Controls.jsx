function Controls({ currentIndex, works, handlePrev, handleNext }) {
  return (
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
        <img src="images/left.png" alt="이전 작품 보기" style={{ width: "40px", height: "40px" }} />
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
  );
}

export default Controls;
