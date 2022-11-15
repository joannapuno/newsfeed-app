import './style/app.scss'
import TopNav from './components/Layout/TopNav/TopNav'
import BottomNav from './components/Layout/BottomNav/BottomNav'
import QuackContainer from './components/QuackContainer';

function App() {
  return (
    <div className="App">
     <TopNav />
     <QuackContainer />
     <BottomNav />
    </div>
  );
}

export default App;
