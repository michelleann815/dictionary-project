import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>🐲 Dictionary 🐲</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="sword" />
        </main>
        <section>
          <footer className="signature">
            <small>
              Coded by{" "}
              <a
                href="https://www.linkedin.com/in/michelle-terrazas/"
                target="_blank"
                rel="noreferrer"
              >
                Michelle Terrazas
              </a>{" "}
              with{" "}
              <a
                href="https://www.shecodes.io/"
                target="_blank"
                rel="noreferrer"
              >
                SheCodes
              </a>
              ;
              <a
                href="https://github.com/michelleann815/dictionary-project"
                target="_blank"
                rel="noreferrer"
              >
                {" "}
                Check out my GitHub here!{" "}
              </a>
              <br />
              Background Image by{" "}
              <a
                href="https://unsplash.com/@adrienolichon?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Adrien Olichon
              </a>{" "}
              on{" "}
              <a
                href="https://unsplash.com/s/photos/dark-academia?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
                target="_blank"
                rel="noreferrer"
              >
                Unsplash
              </a>
            </small>
          </footer>
        </section>
      </div>
    </div>
  );
}
