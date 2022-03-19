import './home.css';
import Sidebar from './components/sidebar';
import FancyBlob from './components/fancyBlob'

function Home() {
  return (
    <main className="flex-container">
      <Sidebar />
      <div className="flex-container main-wrapper">
        <div className="blob-container">
          <FancyBlob />
        </div>
      </div>
    </main>
  );
}

export default Home;
