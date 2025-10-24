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
        <FooterSection title="Teatro Mitre">
          <p className="text-sm text-gray-400">
            El escenario de tus sueños desde 1983.
          </p>
        </FooterSection>

        {/* Navegación */}
        <FooterSection title="Navegación">
          <NavigationLinks />
        </FooterSection>

        {/* Contacto */}
        <FooterSection title="Contacto">
          <div className="space-y-2 text-sm text-gray-400">
            <p>Gral. Alvear 1009, Y4600 San Salvador de Jujuy</p>
            <p>info@teatroprincipal.com</p>
            <p>(388) 4221342</p>
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