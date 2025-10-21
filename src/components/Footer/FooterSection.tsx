// components/Footer/FooterSection.tsx
import { ReactNode } from 'react';

interface FooterSectionProps {
  title: string;
  children: ReactNode;
}

export default function FooterSection({ title, children }: FooterSectionProps) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-4 text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}