import Banner from './Banner';
import Nav from './Nav';
import Traits from './Traits';

function App() {
  return (
    <div className="font-sans text-[16px]">
      <Nav />
      <main>
        <Banner />
        <section className="bg-background">
          <Traits />
        </section>
      </main>
    </div>
  );
}

export default App;
