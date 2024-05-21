import Banner from './Banner';
import Nav from './Nav';
import Traits from './Traits';

function App() {
  return (
    <div className="font-sans lg:flex">
      <nav className="flex-shrink-0">
        <Nav />
      </nav>
      <main className="flex-grow">
        <Banner />
        <Traits />
      </main>
    </div>
  );
}

export default App;
