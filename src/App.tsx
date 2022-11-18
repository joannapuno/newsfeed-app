import TopNav from 'Layout/TopNav/TopNav'
import BottomNav from 'Layout/BottomNav/BottomNav'
import QuackFeed from 'components/QuackFeed';

function App() {
  return (
    <div className="app">
     <TopNav />
     <QuackFeed />
     <BottomNav />
    </div>
  );
}

export default App;
