// components/GoogleAnalytics/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Definir tipos específicos para gtag
type GtagCommand = 'config' | 'event' | 'js';
type GtagParams = Record<string, string | number | boolean>;

declare global {
  interface Window {
    gtag: (command: GtagCommand, targetId: string, config?: GtagParams) => void;
    dataLayer: unknown[];
  }
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function GoogleAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') {
      return;
    }

    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    
    // Track page view
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: document.title,
    });
  }, [pathname, searchParams]);

  // Si no hay ID configurado, no renderizar nada
  if (!GA_MEASUREMENT_ID) {
    if (process.env.NODE_ENV === 'development') {
      console.warn('Google Analytics ID no encontrado. Agrega NEXT_PUBLIC_GA_ID a tus variables de entorno.');
    }
    return null;
  }

  return (
    <>
      {/* Script principal de Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      
      {/* Script de configuración inicial */}
      <Script
        id="google-analytics-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
}