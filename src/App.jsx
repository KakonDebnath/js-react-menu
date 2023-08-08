
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import ToggleSwitch from './components/ToggleSwitch';

const App = () => {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem('darkMode');
    setIsDarkMode(storedDarkMode === 'enabled');
  }, []);

  const handleToggle = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('darkMode', newMode ? 'enabled' : 'disabled');
  };
  return (

    <div>
      <ToggleSwitch isDarkMode={isDarkMode} onToggle={handleToggle} />
      <Header></Header>
      <div className='relative w-1/4 mx-auto my-10  my_shadow'>
        <div className='css_clip_path'>
          <h2  className='py-10 text-center uppercase'>Popular Class</h2>
        </div>
        
        <div class="max-w-xs bg-white rounded-lg shadow-md overflow-hidden relative">
          <img class="h-40 w-full object-cover" src="https://i.ibb.co/7NSdPzk/class-1.jpg" alt="Card Image" />
          <div class="p-4">
            <h3 class="text-lg font-semibold">Course Name</h3>
            <p class="text-gray-500">Instructor Name</p>
            <p class="text-gray-500">Available Seats: 10</p>
            <div class="flex items-center justify-between mt-4">
              <p class="text-lg font-semibold">Price: $99</p>
              <button class="select-btn relative z-10 overflow-hidden px-6 py-2 rounded-xl">
                Select
                <span class="overlay bg-black w-full absolute"></span>
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default App;