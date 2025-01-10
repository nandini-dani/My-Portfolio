import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import Heroine from './components/Heroine/Heroine';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <div className={styles.App}>
        <Navbar></Navbar>
        <Heroine></Heroine>
        <About></About>
        <Experience></Experience>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;
