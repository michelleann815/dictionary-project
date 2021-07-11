import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="signature">
          <small>Coded by Michelle Terrazas</small>
        </footer>
      </div>
    </div>
  );
}
