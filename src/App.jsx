import Header from './components/Header';
import CallToAction from './components/CallToAction';
import StatsSection from './components/StatsSection';

const App = () => (
  <div className="bg-black text-white min-h-screen">
    <div className="max-w-7xl mx-auto py-12 px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Left Section */}
      <div>
        <Header />
        <CallToAction />
      </div>

      {/* Right Section */}
      <div>
        <StatsSection />
      </div>
    </div>
  </div>
);

export default App;
