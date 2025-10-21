// components/Header/Hero.tsx
import Button from './Button';

export default function Hero() {
  return (
    <div 
      className="relative flex h-[50vh] min-h-[480px] w-full flex-col items-center justify-center bg-cover bg-center text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("/images/teatro-mitre.webp")`
      }}
    >
      <div className="flex flex-col gap-4 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          El escenario de tus sueños
        </h1>
        <p className="text-lg md:text-xl">
          Descubre un mundo de arte y emoción
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-4">
          <Button variant="primary">
            Ver cartelera
          </Button>
          <Button variant="secondary">
            Comprar entradas
          </Button>
        </div>
      </div>
    </div>
  );
}