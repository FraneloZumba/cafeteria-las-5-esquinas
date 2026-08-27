'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowUpRight,
  ChevronRight,
  Star,
} from 'lucide-react'

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
  image?: string
}

type MenuCategory = {
  intro: string
  image: string
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
    image: '/bolon-editorial.png',
    items: [
      {
        name: 'Tamal de pollo',
        price: '$1,00',
      },
      {
        name: 'Humita',
        price: '$1,00',
      },
      {
        name: 'Humita frita',
        price: '$1,50',
      },
      {
        name: 'Tortilla de yuca',
        price: '$1,25',
      },
      {
        name: 'Tostada',
        price: '$1,50',
      },
    ],
  },

  Especialidades: {
    intro: 'Bolones y tigrillos, con opciones para elegir a tu manera.',
    image: '/tigrillo-editorial.png',

    items: [
      {
        name: 'Bolón',
        price: '$1,25',
        description: 'Queso o chicharrón',
        image: '/bolon-editorial.png',
      },
      {
        name: 'Bolón mixto',
        price: '$1,50',
        description: 'Queso + chicharrón',
      },
      {
        name: 'Bolón de queso o chicharrón + carne',
        price: '$3,00',
      },
      {
        name: 'Bolón mixto + carne',
        price: '$3,25',
      },
      {
        name: 'Bolón especial',
        price: '$3,00',
        description:
          'Queso o chicharrón + tocino + mozzarella + ensalada + salsas',
      },
      {
        name: 'Bolón especial + huevo',
        price: '$3,25',
        description:
          'Queso o chicharrón + tocino + mozzarella + ensalada + huevo + salsas',
      },
      {
        name: 'Bolón especial mixto + huevo',
        price: '$3,50',
        description:
          'Mixto + tocino + mozzarella + huevo + ensalada + salsas',
      },
      {
        name: 'Tigrillo',
        price: '$3,25',
        image: '/tigrillo-editorial.png',
      },
      {
        name: 'Tigrillo + carne',
        price: '$3,75',
      },
      {
        name: 'Tigrillo completo',
        price: '$4,75',
        description: 'Carne + chorizo + huevo + queso',
      },
    ],
  },

  'Comida rápida': {
    intro: 'Opciones para cuando el antojo pide algo más contundente.',
    image: '/alitas-editorial.png',

    items: [
      {
        name: 'Hamburguesa especial',
        price: '$3,75',
      },
      {
        name: 'Hamburguesa normal',
        price: '$3,00',
      },
      {
        name: 'Hot Dog de 32 cm',
        price: '$3,75',
      },
      {
        name: 'Hot Dog normal',
        price: '$2,50',
      },
      {
        name: 'Cubano',
        price: '$3,25',
      },
      {
        name: 'Papipollo',
        price: '$2,75',
      },
      {
        name: 'Arroz con pollo broaster',
        price: '$3,50',
      },
      {
        name: 'Seco de carne',
        price: '$3,25',
      },
      {
        name: 'Salchipapa',
        price: '$2,00',
      },
    ],
  },

  'Alitas de pollo': {
    intro:
      'Elige tu cantidad y tu sabor. La porción de papas se ajusta al tamaño de cada combo.',

    image: '/alitas-editorial.png',

    items: [
      {
        name: 'Combo 1 · 5 alitas',
        price: '$4,70',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
        image: '/alitas-editorial.png',
      },
      {
        name: 'Combo 2 · 10 alitas',
        price: '$8,90',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
      },
      {
        name: 'Combo 3 · 15 alitas',
        price: '$12,70',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
      },
      {
        name: 'Combo 4 · 20 alitas',
        price: '$16,70',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
      },
      {
        name: 'Combo 5 · 25 alitas',
        price: '$20,75',
        description:
          'BBQ · Miel & Mostaza · Maracuyá · Búfalo · Piña · Queso + papas + tomate + salsas',
      },
    ],
  },

  'Bebidas calientes': {
    intro: 'Para acompañar la conversación y quedarse un poco más.',

    image: '/cafe-editorial.png',

    items: [
      {
        name: 'Tinto',
        price: '$1,00',
        description: 'Café pasado',
        image: '/cafe-editorial.png',
      },
      {
        name: 'Chocolate',
        price: '$1,75',
      },
      {
        name: 'Colada morada',
        price: '$1,75',
      },
      {
        name: 'Morocho',
        price: '$1,50',
      },
      {
        name: 'Aguas aromáticas',
        price: '$1,00',
        description:
          'Horchata · Manzanilla · Cedrón · Hierba Luisa',
      },
    ],
  },

  'Bebidas frías': {
    intro: 'Jugos, batidos y bebidas para refrescar el momento.',

    image: '/cafe-editorial.png',

    items: [
      {
        name: 'Jugo de coco',
        price: '$1,25',
      },
      {
        name: 'Jugo de mora',
        price: '$1,50',
      },
      {
        name: 'Jugo de tomate',
        price: '$1,50',
      },
      {
        name: 'Batido de mora',
        price: '$1,75',
      },
      {
        name: 'Batido de fresa',
        price: '$1,75',
      },
      {
        name: 'Batido de tomate',
        price: '$1,75',
      },
      {
        name: 'Colas',
        price: '$0,80',
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

const menuViews: Record<
  MenuView,
  {
    categories: Category[]
    fallbackImage: string
  }
> = {
  Tradicionales: {
    categories: ['Tradicionales'],
    fallbackImage: '/bolon-editorial.png',
  },
  Especialidades: {
    categories: ['Especialidades'],
    fallbackImage: '/tigrillo-editorial.png',
  },
  'Comida Rápida': {
    categories: ['Comida rápida'],
    fallbackImage: '/alitas-editorial.png',
  },
  Alitas: {
    categories: ['Alitas de pollo'],
    fallbackImage: '/alitas-editorial.png',
  },
  Bebidas: {
    categories: ['Bebidas calientes', 'Bebidas frías'],
    fallbackImage: '/cafe-editorial.png',
  },
}

const menuViewNames = Object.keys(menuViews) as MenuView[]

const houseHighlights = [
  {
    name: 'Bolón de Las 5 Esquinas',
    price: '$4,75',
    description:
      'Bolón mixto bañado en salsa de queso, con mozzarella, cheddar, tocino crocante, huevo frito y toque de sal prieta.',
    image: '/bolon-editorial.png',
  },

  {
    name: 'Tigrillo completo',
    price: '$4,75',
    description:
      'Carne + chorizo + huevo + queso.',
    image: '/tigrillo-editorial.png',
  },

  {
    name: 'Café de origen en chuspa',
    price: '$2,90',
    description:
      'Hecho como antes, en tela y sin prisa. Se sirve con la chuspa, la taza y el agua caliente para disfrutarlo como siempre fue.',
    image: '/cafe-editorial.png',
  },
]

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
        5
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
      <div className="header-inner">
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
  return (
    <section
      id="inicio"
      className="hero-full"
    >
      <Image
        src="/cafe-editorial.png"
        alt=""
        fill
        priority
        aria-hidden="true"
        className="hero-photo"
        sizes="100vw"
      />

      <div className="hero-overlay" />

      <p className="hero-location">
        RICAURTE • CUENCA, ECUADOR
      </p>

      <div className="hero-center">
        <div
          className="hero-logo-wrap"
          aria-label="Las 5 Esquinas"
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

        <p className="hero-copy">
          Un lugar para comer,
          conversar sin
          <br className="hidden sm:block" />{' '}
          prisa y quedarse un poco
          más.
        </p>

        <a
          href="#menu"
          className="hero-menu-button"
        >
          VER MENÚ
        </a>
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
        <div className="intro-brand-block">
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

        <div>
          <h2 className="display-title">
            Un punto de encuentro para
            sentirse en casa.
          </h2>

          <p className="body-copy">
            Las 5 Esquinas es un espacio
            pensado para sentirse en casa,
            donde puedes empezar el día con
            un buen café o volver más tarde
            para compartir algo rico,
            conversar sin prisa y quedarte
            un poco más. Más que un lugar
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
          <div className="house-heading-copy">
            <p className="house-eyebrow">
              De la casa
            </p>

            <h2 className="house-title">
              Tradición, hecha a nuestra manera.
            </h2>
          </div>

          <a
            href="#menu"
            className="house-menu-link"
          >
            Ver todo el menú
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="house-grid">
          {houseHighlights.map((item) => (
            <article
              key={item.name}
              className="house-card"
            >
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
          ))}
        </div>
      </div>
    </section>
  )
}

function MenuSection() {
  const [active, setActive] = useState<MenuView>('Tradicionales')
  const [startIndex, setStartIndex] = useState(0)

  const activeView = menuViews[active]
  const activeItems = activeView.categories.flatMap(
    (category) => menu[category].items,
  )

  const visibleItems = Array.from(
    { length: Math.min(3, activeItems.length) },
    (_, offset) => activeItems[(startIndex + offset) % activeItems.length],
  )

  const chooseCategory = (category: MenuView) => {
    setActive(category)
    setStartIndex(0)
  }

  const showNext = () => {
    setStartIndex((current) =>
      activeItems.length > 0
        ? (current + 1) % activeItems.length
        : 0,
    )
  }

  return (
    <section id="menu" className="menu-section">
      <div className="menu-shell">
        <div className="menu-section-heading">
          <p className="menu-section-kicker">Nuestro menú</p>
          <h2 className="menu-section-title">Te presentamos todas las opciones que tenemos para tí.</h2>
        </div>

        <div className="menu-notebook">
          <div className="menu-notebook-top">
            <p className="menu-hand-title">Elige con calma.</p>

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

          <div className="menu-products-window" aria-live="polite">
            <div className="menu-products-grid">
              {visibleItems.map((item, offset) => (
                <article
                  key={`${active}-${startIndex}-${item.name}-${offset}`}
                  className="menu-product-card"
                >
                  <div className="menu-product-image">
                    <Image
                      src={item.image ?? activeView.fallbackImage}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 700px) 82vw, (max-width: 1100px) 31vw, 290px"
                    />
                  </div>

                  <div className="menu-product-copy">
                    <div className="menu-product-topline">
                      <h3>{item.name}</h3>
                      <span>{item.price}</span>
                    </div>

                    {item.description && (
                      <p>{item.description}</p>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <button
              type="button"
              className="menu-next-button"
              onClick={showNext}
              aria-label="Ver siguientes productos"
            >
              <ChevronRight size={42} strokeWidth={2.6} />
            </button>
          </div>
        </div>

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
    </section>
  )
}

function Reviews() {
  return (
    <section className="section-shell reviews">
      <div className="review-heading">
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
          ]) => (
            <figure
              key={name}
              className="review-card"
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
        <div className="location-image">
          <Image
            src="/alitas-editorial.png"
            alt="Plato servido en Las 5 Esquinas"
            fill
            className="object-cover"
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <div className="location-image-overlay" />
        </div>

        <div className="location-copy">
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
              Vicente Pacheco 412
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
                  Lun – Vie
                </span>
                <span className="location-hours-time">
                  8:00 a.m. – 11:00 a.m.
                  <br />
                  3:00 p.m. – 10:00 p.m.
                </span>
              </div>

              <div className="location-hours-row">
                <span className="location-hours-days">
                  Sáb – Dom
                </span>
                <span className="location-hours-time">
                  3:00 p.m. – 10:00 p.m.
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
        <div className="social-showcase-heading">
          <p className="social-showcase-eyebrow">
            YA QUE ESTÁS AQUÍ
          </p>

          <h2 className="social-showcase-title font-serif">
            Síguenos en nuestras redes sociales
          </h2>
        </div>

        <div className="social-cup-grid">
          {socialShowcase.map((item) => (
            <a
              key={item.label}
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
          ))}
        </div>

        <p className="social-showcase-closing font-serif">
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
      <div className="footer-shell">
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