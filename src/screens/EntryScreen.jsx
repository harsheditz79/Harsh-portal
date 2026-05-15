function EntryScreen({ onEnter }) {
  return (
    <div className="entry-screen">
      <div className="overlay"></div>

      <div className="content">
        <h1 className="title">HARSH PORTAL</h1>

        <p className="subtitle">
         system awakening...
        </p>

        <button className="enter-btn" onClick={onEnter}>
          Tap To Enter
        </button>
      </div>
    </div>
  );
}

export default EntryScreen;