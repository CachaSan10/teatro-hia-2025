import Link from 'next/link';

export default function NavigationLinks() {
  const navigationItems = [
    { href: '/', label: 'Home' },
    { href: '/salas-de-teatro', label: 'Salas de Teatro' },
    { href: '/registro', label: 'Registro' },
    { href: '/cartelera', label: 'Cartelera' }
  ];

  return (
    <ul className="space-y-2 text-sm">
      {navigationItems.map((item) => (
        <li key={item.href}>
          <Link 
            href={item.href}
            className="text-gray-400 hover:text-primary transition-colors duration-200"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}