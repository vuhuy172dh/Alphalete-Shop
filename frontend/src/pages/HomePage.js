import Navbar from '../components/Navbar';
import SlideShow from '../components/SlideShow';

function HomePage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <SlideShow />
        <p>hello world</p>
      </main>
    </div>
  );
}

export default HomePage;
