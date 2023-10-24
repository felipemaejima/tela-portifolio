import "./App.css";
import Contato from "./components/Contato";
import FirstSection from "./components/FirstSection";
import Projects from "./components/Projects";
import SecondSection from "./components/SecondSection";

export default function App() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <Projects />
      <Contato />
    </div>
  );
}
