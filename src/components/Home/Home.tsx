import ArtistasDestacados from './ArtistasDestacados';
import ObrasCartelera from './ObrasCartelera';

export default function Home() {
  return (
    <main className="bg-gray-900 min-h-screen">
      <ArtistasDestacados />
      <ObrasCartelera />
    </main>
  );
}