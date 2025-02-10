import "./App.css";
import Filter from "./components/Filter";
import TicketsList from "./components/TicketsList";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <main>
        <Filter />
        <div className="main-container">
          <TicketsList />
        </div>
      </main>
    </>
  );
}

export default App;
