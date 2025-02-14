export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="jero--section-content">
          <p className="section--title">Hello, I am Farhan.</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>
            {""}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Software Engineering Student skilled in HTML, CSS, JavaScript,React JS  
            <br />
            C#,ASP.NET Core MVC , and SQL Server. 
            
          </p>
        </div>
        
      </div>
      <div className="hero--section--img">
        <img src="./img/photo.jpg" alt="HeroSection" />
      </div>
    </section>
  );
}
