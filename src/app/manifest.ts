import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'SB2 Turbo App',
    short_name: 'SB2 Turbo App',
    description: 'SB2 Turbo App - Conheça o suplemento que já ajudou mais de 82 mil pessoas de todas as idades a recuperarem a autoestima e saúde com apenas duas cápsulas ao dia!',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
   src: "/android-icon-36x36.png",
   sizes: "36x36",
   type: "image/png",

  },
  {
   src: "/android-icon-48x48.png",
   sizes: "48x48",
   type: "image/png",

  },
  {
   src: "/android-icon-72x72.png",
   sizes: "72x72",
   type: "image/png",

  },
  {
   src: "/android-icon-96x96.png",
   sizes: "96x96",
   type: "image/png",

  },
  {
   src: "/android-icon-144x144.png",
   sizes: "144x144",
   type: "image/png",

  },
  {
   src: "/android-icon-192x192.png",
   sizes: "192x192",
   type: "image/png",

  }
    ],
  }
}