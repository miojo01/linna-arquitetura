import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Method from "./components/Method"; // <-- Importe aqui

export default function Home() {
  return (
    <main className="min-h-screen bg-black-arch text-off-white">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Method /> {/* <-- Adicione aqui */}
      
      <div className="h-40 bg-black-arch"></div>
    </main>
  );
}