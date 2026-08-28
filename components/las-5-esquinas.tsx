'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Star,
  X,
} from 'lucide-react'

const heroImages = [
  '/1.png',
  '/2.png',
  '/3.png',
  '/4.png',
  '/5.png',
  '/6.png',
  '/7.png',
]

const whatsapp = 'https://wa.me/593983202196'

const maps =
  'https://www.google.com/maps/search/?api=1&query=Vicente+Pacheco+412%2C+Ricaurte%2C+Cuenca%2C+Ecuador'

const socials = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cafeterialas5esquinas',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cafeterialas5esquinas/?locale=es_LA',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@las.5.esquinas',
  },
  {
    label: 'WhatsApp',
    href: whatsapp,
  },
]

const socialShowcase = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/cafeterialas5esquinas/?locale=es_LA',
    image: '/tazafb.png',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cafeterialas5esquinas',
    image: '/tazaig.png',
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@las.5.esquinas',
    image: '/tazatt.png',
  },
  {
    label: 'WhatsApp',
    href: whatsapp,
    image: '/tazawa.png',
  },
]

type MenuItem = {
  name: string
  price: string
  description?: string
  image: string
}

type MenuCategory = {
  intro: string
  items: MenuItem[]
}

type Category =
  | 'Tradicionales'
  | 'Especialidades'
  | 'Comida rápida'
  | 'Alitas de pollo'
  | 'Bebidas calientes'
  | 'Bebidas frías'

const menu: Record<Category, MenuCategory> = {
  Tradicionales: {
    intro: 'Sabores sencillos y conocidos para disfrutar sin prisa.',
    items: [
      {
        name: 'Tamal de pollo',
        price: '$1,00',
        image: '/tamal-de-pollo.png',
      },
      {
        name: 'Humita',
        price: '$1,00',
        image: '/humita.png',
      },
      {
        name: 'Humita frita',
        price: '$1,50',
        image: '/humita-frita.png',
      },
      {
        name: 'Tortilla de yuca',
        price: '$1,25',
        image: '/tortilla-de-yuca.png',
      },
      {
        name: 'Tostada',
        price: '$1,50',
        image: '/tostada.png',
      },
      {
        name: 'Torta de platano maduro',
        price: '$2,25',
        image: '/torta-de-platano-maduro.png',
      },
    ],
  },

  Especialidades: {
    intro: 'Bolones y tigrillos, con opciones para elegir a tu manera.',
    items: [
      {
        name: 'Bolón',
        price: '$1,25',
        description: 'Queso o chicharrón',
        image: '/bolon.png',
      },
      {
        name: 'Bolón mixto',
        price: '$1,50',
        description: 'Queso + chicharrón',
        image: '/bolon-mixto.png',
      },
      {
        name: 'Bolón de queso o chicharrón + carne',
        price: '$3,00',
        image: '/bolon-queso-chicharron-carne.png',
      },
      {
        name: 'Bolón mixto + carne',
        price: '$3,25',
        image: '/bolon-mixto-carne.png',
      },
      {
        name: 'Bolón especial',
        price: '$3,00',
        description:
          'Queso o chicharrón + tocino + mozzarella + ensalada + salsas',
        image: '/bolon-especial.png',
      },
      {
        name: 'Bolón especial + huevo',
        price: '$3,25',
        description:
          'Queso o chicharrón + tocino + mozzarella + ensalada + huevo + salsas',
        image: '/bolon-especial-huevo.png',
      },
      {
        name: 'Bolón especial mixto + huevo',
        price: '$3,50',
        description:
          'Mixto + tocino + mozzarella + huevo + ensalada + salsas',
        image: '/bolon-especial-mixto-huevo.png',
      },
      {
        name: 'Tigrillo',
        price: '$3,25',
        image: '/tigrillo.png',
      },
      {
        name: 'Tigrillo + carne',
        price: '$3,75',
        image: '/tigrillo-carne.png',
      },
      {
        name: 'Tigrillo completo',
        price: '$4,75',
        description: 'Carne + chorizo + huevo + queso',
        image: '/tigrillo-completo.png',
      },
    ],
  },

  'Comida rápida': {
    intro: 'Opciones para cuando el antojo pide algo más contundente.',
    items: [
      {
        name: 'Hamburguesa especial',
        price: '$3,75',
        image: '/hamburguesa-especial.png',
      },
      {
        name: 'Hamburguesa normal',
        price: '$3,00',
        image: '/hamburguesa-normal.png',
      },
      {
        name: 'Hot Dog de 32 cm',
        price: '$3,75',
        image: '/hot-dog-32-cm.png',
      },
      {
        name: 'Hot Dog normal',
        price: '$2,50',
        image: '/hot-dog-normal.png',
      },
      {
        name: 'Cubano',
        price: '$3,25',
        image: '/cubano.png',
      },
      {
        name: 'Papipollo',
        price: '$2,75',
        image: '/papipollo.png',
      },
      {
        name: 'Arroz con pollo broaster',
        price: '$3,50',
        image: '/arroz-con-pollo-broaster.png',
      },
      {
        name: 'Seco de carne',
        price: '$3,25',
        image: '/seco-de-carne.png',
      },
      {
        name: 'Salchipapa',
        price: '$2,00',
        image: '/salchipapa.png',
      },
    ],
  },

  'Alitas de pollo': {
    intro:
      'Elige tu cantidad y tu sabor. La porción de papas se ajusta al tamaño de cada combo.',
    items: [
      {
        name: 'Combo 1 · 5 alitas',
        price: '$4,70',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
        image: '/combo-5-alitas.png',
      },
      {
        name: 'Combo 2 · 10 alitas',
        price: '$8,90',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
        image: '/combo-10-alitas.png',
      },
      {
        name: 'Combo 3 · 15 alitas',
        price: '$12,70',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
        image: '/combo-15-alitas.png',
      },
      {
        name: 'Combo 4 · 20 alitas',
        price: '$16,70',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
        image: '/combo-20-alitas.png',
      },
      {
        name: 'Combo 5 · 25 alitas',
        price: '$20,75',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
        image: '/combo-25-alitas.png',
      },
    ],
  },

  'Bebidas calientes': {
    intro: 'Para acompañar la conversación y quedarse un poco más.',
    items: [
      {
        name: 'Tinto',
        price: '$1,00',
        description: 'Café pasado',
        image: '/tinto.png',
      },
      {
        name: 'Chocolate',
        price: '$1,75',
        image: '/chocolate.png',
      },
      {
        name: 'Colada morada',
        price: '$1,75',
        image: '/colada-morada.png',
      },
      {
        name: 'Morocho',
        price: '$1,50',
        image: '/morocho.png',
      },
      {
        name: 'Aguas aromáticas',
        price: '$1,00',
        description:
          'Horchata · Manzanilla · Cedrón · Hierba Luisa',
        image: '/aguas-aromaticas.png',
      },
    ],
  },

  'Bebidas frías': {
    intro: 'Jugos, batidos y bebidas para refrescar el momento.',
    items: [
      {
        name: 'Jugo de coco',
        price: '$1,25',
        image: '/jugo-de-coco.png',
      },
      {
        name: 'Jugo de mora',
        price: '$1,50',
        image: '/jugo-de-mora.png',
      },
      {
        name: 'Jugo de tomate',
        price: '$1,50',
        image: '/jugo-de-tomate.png',
      },
      {
        name: 'Batido de mora',
        price: '$1,75',
        image: '/batido-de-mora.png',
      },
      {
        name: 'Batido de fresa',
        price: '$1,75',
        image: '/batido-de-fresa.png',
      },
      {
        name: 'Batido de tomate',
        price: '$1,75',
        image: '/batido-de-tomate.png',
      },
      {
        name: 'Colas',
        price: '$0,80',
        image: '/colas.png',
      },
    ],
  },
}


type MenuView =
  | 'Tradicionales'
  | 'Especialidades'
  | 'Comida Rápida'
  | 'Alitas'
  | 'Bebidas'
  | 'Las 5 Esquinas'

type MenuDisplaySection = {
  label?: string
  items: MenuItem[]
}

const las5EsquinasItems: MenuItem[] = [
  {
    name: 'Galletas',
    price: 'Consultar',
    description: 'Producto para llevar de Las 5 Esquinas.',
    image: '/galletas.png',
  },
  {
    name: 'Café Típico Aroma',
    price: 'Consultar',
    description: 'Café para llevar y preparar en casa.',
    image: '/cafe-tipico-aroma.png',
  },
]

const menuViews: Record<MenuView, { sections: MenuDisplaySection[] }> = {
  Tradicionales: {
    sections: [
      {
        items: menu.Tradicionales.items,
      },
    ],
  },
  Especialidades: {
    sections: [
      {
        items: menu.Especialidades.items,
      },
    ],
  },
  'Comida Rápida': {
    sections: [
      {
        items: menu['Comida rápida'].items,
      },
    ],
  },
  Alitas: {
    sections: [
      {
        items: menu['Alitas de pollo'].items,
      },
    ],
  },
  Bebidas: {
    sections: [
      {
        label: 'Bebidas calientes',
        items: menu['Bebidas calientes'].items,
      },
      {
        label: 'Bebidas frías',
        items: menu['Bebidas frías'].items,
      },
    ],
  },
  'Las 5 Esquinas': {
    sections: [
      {
        items: las5EsquinasItems,
      },
    ],
  },
}

// Orden visual de los seis botones, como en el mockup.
const menuViewNames: MenuView[] = [
  'Tradicionales',
  'Comida Rápida',
  'Bebidas',
  'Especialidades',
  'Alitas',
  'Las 5 Esquinas',
]

// Orden de páginas para las flechas laterales.
const menuNavigationOrder: MenuView[] = [
  'Tradicionales',
  'Especialidades',
  'Comida Rápida',
  'Alitas',
  'Bebidas',
  'Las 5 Esquinas',
]

const houseHighlights = [
  {
    name: 'Bolón de Las 5 Esquinas',
    price: '$4,75',
    description:
      'Bolón mixto bañado en salsa de queso, con mozzarella, cheddar, tocino crocante, huevo frito y toque de sal prieta.',
    image: '/bolon-las-5-esquinas.png',
  },

  {
    name: 'Tigrillo completo',
    price: '$4,75',
    description:
      'Carne + chorizo + huevo + queso.',
    image: '/tigrillo-completo.png',
  },

  {
    name: 'Café de origen en chuspa',
    price: '$2,90',
    description:
      'Hecho como antes, en tela y sin prisa. Se sirve con la chuspa, la taza y el agua caliente para disfrutarlo como siempre fue.',
    image: '/cafe-de-origen-en-chuspa.png',
  },
]

function useScrollReveal() {
  useEffect(() => {
    const root = document.documentElement
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>('[data-animate]'),
    )

    if (elements.length === 0) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    if (reduceMotion) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    // Ocultamos los elementos solo cuando JavaScript ya está funcionando.
    // Así, si JS falla, el contenido nunca queda invisible.
    root.classList.add('motion-enabled')

    const revealIfAlreadyVisible = () => {
      const viewportHeight = window.innerHeight

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect()

        if (
          rect.top < viewportHeight * 0.92 &&
          rect.bottom > viewportHeight * 0.04
        ) {
          element.classList.add('is-visible')
        }
      })
    }

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })

      return () => {
        root.classList.remove('motion-enabled')
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    elements.forEach((element) => {
      observer.observe(element)
    })

    let frameTwo: number | undefined

    // Dos frames fuerzan un estado inicial pintado antes de revelar el hero.
    const frameOne = requestAnimationFrame(() => {
      frameTwo = requestAnimationFrame(() => {
        revealIfAlreadyVisible()
      })
    })

    return () => {
      observer.disconnect()
      cancelAnimationFrame(frameOne)

      if (frameTwo !== undefined) {
        cancelAnimationFrame(frameTwo)
      }

      root.classList.remove('motion-enabled')
    }
  }, [])
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
      />

      <circle
        cx="12"
        cy="12"
        r="4"
      />

      <circle
        cx="17.5"
        cy="6.5"
        r="1"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6h1.7V3.8c-.3 0-1.3-.1-2.4-.1-2.5 0-4.2 1.5-4.2 4.3V10H7.5v3h2.8v8h3.2Z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M15.6 3c.2 1.8 1.2 3.2 3 3.8.6.2 1.2.3 1.8.3v3.1c-1.8 0-3.4-.5-4.8-1.5v6.7c0 3.4-2.3 5.7-5.7 5.7-3.1 0-5.4-2.3-5.4-5.2 0-3.2 2.6-5.4 5.9-5.4.3 0 .7 0 1 .1v3.1c-.3-.1-.6-.2-1-.2-1.4 0-2.7.9-2.7 2.4 0 1.3 1 2.2 2.3 2.2 1.6 0 2.5-1 2.5-2.8V3h3.1Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="currentColor"
    >
      <path d="M20.5 3.5A11.3 11.3 0 0 0 12.4 0C6.2 0 1.2 5 1.2 11.1c0 2 .5 3.9 1.5 5.6L1 22.9l6.4-1.7c1.5.8 3.2 1.2 5 1.2h.1c6.1 0 11.1-5 11.1-11.2 0-3-1.1-5.7-3.1-7.7Zm-8.1 15.8h-.1c-1.6 0-3.2-.4-4.6-1.2l-.3-.2-3.8 1 1-3.7-.2-.3a9.2 9.2 0 0 1-1.4-4.8c0-5.1 4.2-9.2 9.3-9.2 2.5 0 4.8 1 6.5 2.7a9.2 9.2 0 0 1 2.7 6.5c0 5.1-4.2 9.2-9.1 9.2Zm5-6.9c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.3-3.5-2.9-.3-.5.3-.5.8-1.6.1-.2.1-.4 0-.6-.1-.2-.7-1.7-.9-2.3-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.8.4-.3.3-1 1-1 2.5s1 2.9 1.1 3.1c.1.2 2 3.1 4.8 4.3 1.8.8 2.5.9 3.4.8.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.3Z" />
    </svg>
  )
}

function SocialIcon({
  label,
}: {
  label: string
}) {
  if (label === 'Instagram') {
    return <InstagramIcon />
  }

  if (label === 'Facebook') {
    return <FacebookIcon />
  }

  if (label === 'TikTok') {
    return <TikTokIcon />
  }

  return <WhatsAppIcon />
}

function Brand({
  light = false,
}: {
  light?: boolean
}) {
  return (
    <a
      href="#inicio"
      className={`brand ${light ? 'brand-light' : ''}`}
      aria-label="Las 5 Esquinas, inicio"
    >
      <span className="brand-mark">
        <Image
          src="/logo.png"
          alt=""
          width={54}
          height={54}
          className="brand-mark-image"
          aria-hidden="true"
        />
      </span>

      <span className="brand-name">
        Las 5 Esquinas
      </span>
    </a>
  )
}

function SocialRail() {
  return (
    <div
      className="social-rail"
      aria-label="Redes sociales y contacto"
    >
      {socials.map(
        ({
          label,
          href,
        }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className={
              label === 'WhatsApp'
                ? 'social-whatsapp'
                : ''
            }
          >
            <SocialIcon
              label={label}
            />
          </a>
        ),
      )}
    </div>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner" data-animate="down">
        <Brand light />

        <nav
          className="desktop-nav"
          aria-label="Navegación principal"
        >
          <a href="#presentacion">
            Nosotros
          </a>

          <a href="#de-la-casa">
            De la casa
          </a>

          <a href="#menu">
            Menú
          </a>

          <a href="#ubicacion">
            Ubicación
          </a>

          <a href="#redes">
            Redes
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroImageIndex((current) => (current + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <section
      id="inicio"
      className="hero-full"
    >
      <div className="hero-photo-stack" aria-hidden="true">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-photo ${
              index === heroImageIndex ? 'hero-photo-active' : ''
            }`}
            style={{ backgroundImage: `url("${image}")` }}
          />
        ))}
      </div>

      <div className="hero-overlay" />

      <p className="hero-location" data-animate="left">
        RICAURTE • CUENCA, ECUADOR
      </p>

      <div className="hero-center">
        <div
          className="hero-logo-wrap"
          aria-label="Las 5 Esquinas"
          data-animate="zoom"
        >
          <Image
            src="/logo-las-5-esquinas-light.png"
            alt="Las 5 Esquinas"
            width={900}
            height={900}
            priority
            className="hero-logo"
          />
        </div>

        <p
          className="hero-copy"
          data-animate="up"
          style={{ transitionDelay: '100ms' }}
        >
          Un espacio pensado
          <br className="hidden sm:block" />{' '}
          para sentirse en casa
        </p>

        <div
          className="hero-button-reveal"
          data-animate="up"
          style={{ transitionDelay: '190ms' }}
        >
          <a
            href="#menu"
            className="hero-menu-button"
          >
            VER MENÚ
          </a>
        </div>
      </div>
    </section>
  )
}

function Intro() {
  return (
    <section
      id="presentacion"
      className="intro-section"
    >
      <div className="section-shell intro-grid">
        <div className="intro-brand-block" data-animate="left">
          <p className="eyebrow">
            Bienvenidos
          </p>

          <Image
            src="/logo-las-5-esquinas-dark.png"
            alt="Las 5 Esquinas"
            width={520}
            height={520}
            className="intro-logo"
          />
        </div>

        <div className="intro-copy-block" data-animate="right">
          <h2 className="display-title">
            Tradición, sabor y buenos momentos en un solo lugar.
          </h2>

          <p className="body-copy">
            Las 5 Esquinas es un espacio
            pensado para sentirse en casa,
            donde puedes empezar el día con
            un buen café o volver más tarde
            para compartir algo rico,
            conversar sin prisa y quedarte
            un ratito. Más que un lugar
            para comer, somos un punto de
            encuentro.
          </p>
        </div>
      </div>
    </section>
  )
}

function HouseHighlights() {
  return (
    <section
      id="de-la-casa"
      className="house-section"
    >
      <div className="section-shell house-shell">
        <div className="house-heading">
          <div className="house-heading-copy" data-animate="left">
            <p className="house-eyebrow">
              De la casa
            </p>

            <h2 className="house-title">
              Tradición, hecha a nuestra manera.
            </h2>
          </div>

          <div data-animate="right" style={{ transitionDelay: '90ms' }}>
            <a
              href="#menu"
              className="house-menu-link"
            >
              Ver todo el menú
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="house-grid">
          {houseHighlights.map((item, index) => (
            <div
              key={item.name}
              className="house-card-reveal"
              data-animate="up"
              style={{ transitionDelay: `${index * 110}ms` }}
            >
              <article className="house-card">
                <div className="house-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 900px) 100vw, 33vw"
                  />
                </div>

                <div className="house-card-copy">
                  <div className="house-card-topline">
                    <h3>{item.name}</h3>

                    <span className="house-price">
                      {item.price}
                    </span>
                  </div>

                  <p className="house-description">
                    {item.description}
                  </p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuSection() {
  const [active, setActive] = useState<MenuView>('Tradicionales')
  const [pageDirection, setPageDirection] = useState<'next' | 'prev' | 'fade'>('fade')
  const [selectedProduct, setSelectedProduct] = useState<
    (MenuItem & { resolvedImage: string }) | null
  >(null)

  const activeView = menuViews[active]

  const chooseCategory = (category: MenuView) => {
    if (category === active) return
    setPageDirection('fade')
    setActive(category)
  }

  const moveCategory = (direction: 'next' | 'prev') => {
    const currentIndex = menuNavigationOrder.indexOf(active)
    const offset = direction === 'next' ? 1 : -1
    const nextIndex =
      (currentIndex + offset + menuNavigationOrder.length) %
      menuNavigationOrder.length

    setPageDirection(direction)
    setActive(menuNavigationOrder[nextIndex])
  }

  const openProduct = (item: MenuItem) => {
    setSelectedProduct({
      ...item,
      resolvedImage: item.image,
    })
  }

  useEffect(() => {
    if (!selectedProduct) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProduct(null)
      }
    }

    window.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = originalOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [selectedProduct])

  const productWhatsapp = selectedProduct
    ? `${whatsapp}?text=${encodeURIComponent(
      `Hola, quisiera pedir ${selectedProduct.name}.`,
    )}`
    : whatsapp

  return (
    <section id="menu" className="menu-section">
      <div className="menu-shell">
        <div
          className="menu-notebook"
          data-animate="zoom"
          style={{ transitionDelay: '100ms' }}
        >
          <div className="menu-notebook-top">
            <div className="menu-notebook-heading">
              <h2 className="menu-notebook-title">Nuestro Menú</h2>
              <p className="menu-hand-title">Elige con calma.</p>
              <br />
            </div>

            <div
              className="menu-notebook-tabs"
              role="tablist"
              aria-label="Categorías del menú"
            >
              {menuViewNames.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active === category}
                  onClick={() => chooseCategory(category)}
                  className={active === category ? 'active' : ''}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className="menu-touch-hint">
            Toca un producto para conocerlo. "(Imágenes reales de los platos, pueden variar según disponibilidad.)"
          </p>

          <button
            type="button"
            className="menu-category-arrow menu-category-arrow-left"
            onClick={() => moveCategory('prev')}
            aria-label="Ver categoría anterior"
          >
            <ChevronLeft size={44} strokeWidth={3} />
          </button>

          <button
            type="button"
            className="menu-category-arrow menu-category-arrow-right"
            onClick={() => moveCategory('next')}
            aria-label="Ver categoría siguiente"
          >
            <ChevronRight size={44} strokeWidth={3} />
          </button>

          <div
            key={active}
            className={`menu-page menu-page-${pageDirection}`}
            data-category={active}
            aria-live="polite"
          >
            {activeView.sections.map((section, sectionIndex) => (
              <div
                key={`${active}-${section.label ?? sectionIndex}`}
                className={`menu-page-section ${active === 'Bebidas' ? 'menu-page-section-drinks' : ''
                  }`}
              >
                {section.label && (
                  <h3 className="menu-page-section-title">
                    {section.label}
                  </h3>
                )}

                <div
                  className={`menu-product-list ${active === 'Tradicionales' || active === 'Alitas'
                      ? 'menu-product-list-compact'
                      : ''
                    }`}
                >
                  {section.items.map((item) => (
                    <button
                      key={`${active}-${section.label ?? 'main'}-${item.name}`}
                      type="button"
                      className="menu-product-row"
                      onClick={() => openProduct(item)}
                      aria-label={`Ver ${item.name}`}
                    >
                      <span className="menu-product-row-main">
                        <span className="menu-product-row-name">
                          {item.name}
                        </span>
                        {item.description && active !== 'Alitas' && (
                          <span className="menu-product-row-description">
                            {item.description}
                          </span>
                        )}
                      </span>

                      <span className="menu-product-row-price">
                        {item.price}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {active === 'Alitas' && (
              <div className="menu-alitas-note">
                <strong>Sabores:</strong> BBQ · Miel &amp; Mostaza · Maracuyá ·
                Búfalo · Piña · Queso
                <br />
                <strong>Incluyen:</strong> papas · tomate · salsas
              </div>
            )}

            {active === 'Las 5 Esquinas' && (
              <p className="menu-house-note">
                Productos para llevar y seguir disfrutando Las 5 Esquinas en casa.
              </p>
            )}
          </div>

          <div className="menu-notebook-footer">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="menu-whatsapp-button"
            >
              Pedir por WhatsApp
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {selectedProduct && (
        <div
          className="menu-product-modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedProduct(null)}
        >
          <div
            className="menu-product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="menu-product-modal-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="menu-product-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Cerrar producto"
            >
              <X size={22} />
            </button>

            <div className="menu-product-modal-image">
              <Image
                src={selectedProduct.resolvedImage}
                alt={selectedProduct.name}
                fill
                className="object-cover"
                sizes="(max-width: 700px) 92vw, 430px"
              />
            </div>

            <div className="menu-product-modal-copy">
              <p className="menu-product-modal-eyebrow">Las 5 Esquinas</p>

              <div className="menu-product-modal-heading">
                <h3 id="menu-product-modal-title">
                  {selectedProduct.name}
                </h3>
                <span>{selectedProduct.price}</span>
              </div>

              {selectedProduct.description && (
                <p className="menu-product-modal-description">
                  {selectedProduct.description}
                </p>
              )}

              <a
                href={productWhatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="menu-product-modal-whatsapp"
              >
                Pedir este producto
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

function Reviews() {
  return (
    <section className="section-shell reviews">
      <div className="review-heading" data-animate="left">
        <p className="eyebrow">
          Lo que dicen
        </p>

        <h2 className="display-title">
          Una buena razón para volver.
        </h2>
      </div>

      <div className="review-grid">
        {[
          [
            'De las mejores opciones de comida rápida: excelente sabor, tamaño y precio',
            'Camila Garcia',
          ],
          [
            'Buen lugar para comer una golosina tipo comida rápida, buena atención, buen ambiente y sobretodo buena comida. Muy recomendable',
            'Manuel Valdez',
          ],
        ].map(
          ([
            quote,
            name,
          ], index) => (
            <figure
              key={name}
              className="review-card"
              data-animate="up"
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="stars">
                {[
                  1, 2, 3, 4, 5,
                ].map((n) => (
                  <Star
                    key={n}
                    size={15}
                    fill="currentColor"
                  />
                ))}
              </div>

              <blockquote>
                “{quote}”
              </blockquote>

              <figcaption>
                {name} · 5/5
              </figcaption>
            </figure>
          ),
        )}
      </div>
    </section>
  )
}

function Location() {
  return (
    <section
      id="ubicacion"
      className="location-section"
    >
      <div className="location-frame">
        <div className="location-image" data-animate="left">
          <Image
            src="/local.png"
            alt="Local de Las 5 Esquinas en Cuenca, Ecuador"
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="location-image-overlay" />
        </div>

        <div className="location-copy" data-animate="right" style={{ transitionDelay: '90ms' }}>
          <p className="location-eyebrow">
            ENCUÉNTRANOS
          </p>

          <div className="location-main-info">
            <div className="location-logo-wrap">
              <Image
                src="/logo-las-5-esquinas-dark.png"
                alt="Las 5 Esquinas"
                width={320}
                height={260}
                className="location-logo"
              />
            </div>

            <address className="location-address">
              Ricaurte - 5 Esquinas
              <br />
              Antonio Ricaurte
              <br />
              y Vicente Pacheco 410
              <br />
              <br />
              Cuenca, Ecuador
            </address>
          </div>

          <a
            href={maps}
            target="_blank"
            rel="noopener noreferrer"
            className="location-map-button"
          >
            <span>Cómo llegar</span>
            <ArrowUpRight size={18} />
          </a>

          <div className="location-hours">
            <div className="location-hours-heading">
              <p className="location-hours-title">
                Horarios de atención
              </p>
              <p className="location-hours-message">
                Estamos felices de recibirte en estos horarios.
              </p>
            </div>

            <div className="location-hours-list">
              <div className="location-hours-row">
                <span className="location-hours-days">
                  De Lunes a Sábado:
                </span>
                <span className="location-hours-time">
                  3:00 p.m. – 10:30 p.m.
                </span>
              </div>

              <div className="location-hours-row">
                <span className="location-hours-days">
                  Domingos:
                </span>
                <span className="location-hours-time">
                  5:00 p.m. – 9:30 p.m.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SocialSection() {
  return (
    <section
      id="redes"
      className="social-showcase"
    >
      <div className="social-showcase-overlay" />

      <div className="section-shell social-showcase-inner">
        <div className="social-showcase-heading" data-animate="up">
          <p className="social-showcase-eyebrow">
            YA QUE ESTÁS AQUÍ
          </p>

          <h2 className="social-showcase-title font-serif">
            Síguenos en nuestras redes sociales
          </h2>
        </div>

        <div className="social-cup-grid">
          {socialShowcase.map((item, index) => (
            <div
              key={item.label}
              className="social-cup-reveal"
              data-animate="zoom"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-cup-link"
                aria-label={`Abrir ${item.label} de Las 5 Esquinas`}
              >
                <div className="social-cup-image-wrap">
                  <Image
                    src={item.image}
                    alt={`${item.label} de Las 5 Esquinas`}
                    width={520}
                    height={520}
                    className="social-cup-image"
                    sizes="(max-width: 640px) 44vw, (max-width: 1024px) 22vw, 20vw"
                  />
                </div>

                <span className="social-cup-label">
                  {item.label}
                </span>
              </a>
            </div>
          ))}
        </div>

        <p className="social-showcase-closing font-serif" data-animate="up" style={{ transitionDelay: '180ms' }}>
          y sigue con nosotros escribiendo
          <br />
          esta historia...
        </p>
      </div>
    </section>
  )
}

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      className="footer"
    >
      <div className="footer-shell" data-animate="up">
        <a
          href="#inicio"
          className="footer-logo-link"
          aria-label="Las 5 Esquinas, volver al inicio"
        >
          <span className="footer-logo-wrap">
            <Image
              src="/logo-las-5-esquinas-light.png"
              alt="Las 5 Esquinas"
              fill
              className="footer-logo"
              sizes="240px"
            />
          </span>
        </a>

        <p className="footer-tagline">
          Un lugar para comer, conversar sin prisa y quedarse un poco más.
        </p>

        <nav
          className="footer-nav"
          aria-label="Navegación del pie de página"
        >
          <a href="#inicio">Inicio</a>
          <a href="#de-la-casa">De la casa</a>
          <a href="#menu">Menú</a>
          <a href="#ubicacion">Ubicación</a>
          <a href="#redes">Redes</a>
        </nav>

        <a
          className="footer-whatsapp"
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Pedir por WhatsApp</span>
          <ArrowUpRight size={17} />
        </a>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-signoff">
            Las 5 Esquinas — un punto de encuentro.
          </p>

          <p>
            © {year} Las 5 Esquinas · Ricaurte, Cuenca
          </p>
        </div>
      </div>
    </footer>
  )
}

export function Las5Esquinas() {
  useScrollReveal()

  return (
    <>
      <Header />

      <main>
        <Hero />

        <Intro />

        <HouseHighlights />

        <MenuSection />

        <Reviews />

        <Location />

        <SocialSection />
      </main>

      <Footer />

      <SocialRail />
    </>
  )
}