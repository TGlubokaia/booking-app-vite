import './App.css';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';

import BookingForm from './features/booking-form/booking-form';

function App() {
  return (
    <div className="App">
      <main>
        <BookingForm />
      </main>
    </div>
  );
}

export default App;
