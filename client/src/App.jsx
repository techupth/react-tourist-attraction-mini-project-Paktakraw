import MainContent from "./components/MainContent";

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="text-[50px] text-center md:text-[70px] text-blue-500 mt-[50px] font-bold">
          เที่ยวไหนดี
        </h1>
      </div>
      <div>
        <MainContent />
      </div>
    </div>
  );
}

export default App;
