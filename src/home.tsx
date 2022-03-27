import './home.css';
import Sidebar from './components/sidebar';
import FancyBlob from './components/fancyBlob';

function Home() {
  return (
    <main className="flex-container">
      <Sidebar />
      <div className="flex-container main-wrapper">
        <div className="slogan-wrapper">
          <span>
            <h1>
              Hi,
              <br />
              I'm Merlin
              <br />
              A Full Stack Developer
              <br />
              From Germany
            </h1>
          </span>
        </div>
        <div className="container">
          <FancyBlob />
        </div>
      </div>
    </main>
  );
}

export default Home;
