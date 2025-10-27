import ArtistasDestacados from './ArtistasDestacados';
import Hero from './Hero';
import ObrasCartelera from './ObrasCartelera';

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <Hero/>
      <ArtistasDestacados />
      <ObrasCartelera />
    </main>
  );
}