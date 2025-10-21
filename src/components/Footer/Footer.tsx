// components/Footer/Footer.tsx
import FooterSection from './FooterSection';
import NavigationLinks from './NavigationLinks';
import SocialLinks from './SocialLinks';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className="bg-[#1a0e0e] text-white p-8 mt-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Información del Teatro */}
        <FooterSection title="Teatro Principal">
          <p className="text-sm text-gray-400">
            El escenario de tus sueños desde 1923.
          </p>
        </FooterSection>

        {/* Navegación */}
        <FooterSection title="Navegación">
          <NavigationLinks />
        </FooterSection>

        {/* Contacto */}
        <FooterSection title="Contacto">
          <div className="space-y-2 text-sm text-gray-400">
            <p>Av. Principal 123, Ciudad</p>
            <p>info@teatroprincipal.com</p>
            <p>(123) 456-7890</p>
          </div>
        </FooterSection>

        {/* Redes Sociales */}
        <FooterSection title="Síguenos">
          <SocialLinks />
        </FooterSection>

      </div>

      {/* Copyright */}
      <Copyright />
    </footer>
  );
}