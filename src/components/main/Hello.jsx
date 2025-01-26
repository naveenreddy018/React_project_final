import { useState } from 'react';
import Slide_Bar from '../slide_bar/slide_bar';
import Response_Bar from '../reponse_bar/response';



export const Array1 = [ ];

function Hello() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggle = () => {
    setIsDarkMode((prev) => !prev);
  };
  Array1.push(isDarkMode)
    
  // Mode.push(isDarkMode)

  const styles = {
    appContainer: {
      minHeight: '100vh',
      display: 'flex',
      width: '100%',
      backgroundColor: isDarkMode ? 'white' : 'black',
      color: isDarkMode ? 'black' : 'white',
    },
    toggleChat: {
      position: 'absolute',
      top: '30px',
      left: '60%',
      fontSize: '30px',
      backgroundColor: isDarkMode ? 'white' : 'black',
      color: isDarkMode ? 'black' : 'white',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      padding: '10px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'background-color 0.3s, color 0.3s',
    },
  };

  return (
    <div style={styles.appContainer}>
      {/* <button style={styles.toggleChat} onClick={toggle}>
        {isDarkMode ? '🌙' : '☀️'}
      </button> */}
      <Slide_Bar color={isDarkMode} />
      <Response_Bar />
    </div>
  );
}


export default Hello;
