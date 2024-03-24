import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="container">
      <Header />
      <Contact />
      <ContactForm />
    </div>
  );
}

export default App;
