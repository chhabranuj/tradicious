import './App.sass';
import LandingLayout from './components/LandingLayout/LandingLayout';
import TitleBarLayout from './components/TitleBarLayout/TitleBarLayout';

const App = () => {
  return (
    <div className="App">
      <TitleBarLayout />
      <LandingLayout />
    </div>
  );
}

export default App;
