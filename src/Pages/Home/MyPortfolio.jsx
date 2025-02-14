export default function MyPortfolio() {
  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          <p className="sub--title">Check Out My Work</p>
          <h2 className="section--heading">Visit My GitHub</h2>
        </div>
        <div>
          <button
            className="btn btn-github"
            onClick={() => window.open("https://github.com/farhanalanzi", "_blank")}
          >
            Visit My GitHub
          </button>
        </div>
      </div>
    </section>
  );
}