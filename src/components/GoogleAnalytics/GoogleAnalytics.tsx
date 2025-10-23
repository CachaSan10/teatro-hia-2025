// components/GoogleAnalytics/GoogleAnalytics.tsx
'use client';

import Script from 'next/script';
import { usePathname, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// Definir tipos específicos para gtag - DEBE ESTAR AL INICIO
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

  // Función para trackear pageviews - DENTRO del componente
  const trackPageView = (url: string) => {
    if (!GA_MEASUREMENT_ID || typeof window.gtag === 'undefined') {
      return;
    }

    try {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: url,
        page_title: document.title,
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  };

  useEffect(() => {
    const url = pathname + (searchParams.toString() ? `?${searchParams.toString()}` : '');
    trackPageView(url);
  }, [pathname, searchParams]);

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}