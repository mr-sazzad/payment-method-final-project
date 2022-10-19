import "./App.css";
import { Billing, Business, CardDeal, Client, CTA, Footer, Hero, Navbar, Testimonials } from './components';

function App() {

  return (
    <div className="bg-black w-full overflow-hidden">
      <div className="h-[60px] px-[1rem] app">
        <div className="max-width-[1280px] ">
          < Navbar />
          </div>
      </div>
      <div className="flex justify-start">
        <div className="max-width-[1280px]">
          < Hero />
        </div>
      </div>
      <div className="flex justify-start">
        <div className="max-width-[1280px]">
          {/* < Stats /> */}
          < Business />
          < Billing />
          < CardDeal />
          < Testimonials />
          < Client />
          < CTA />
          < Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
