'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  ArrowDown,
  ArrowUpRight,
  Menu as MenuIcon,
  Phone,
  Star,
  X,
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

const menu = {
  Menú: [
    ['Tamal de pollo', '$0,90'],
    ['Humita', '$1,00'],
    ['Humita frita', '$1,35'],
    ['Quimbolito', '$1,00'],
    ['Tortilla de yuca', '$1,25'],
    ['Tortilla de choclo', '$1,00'],
    ['Emborrajados', '$2,00'],
    ['Tostada sencilla', '$1,25'],
    ['Tostada mixta', '$1,50'],
  ],

  Especialidades: [
    ['Bolón', '$1,25', 'queso o chicharrón'],
    ['Bolón Mixto', '$1,50', 'queso + chicharrón'],
    ['Bolón de Queso o Chicharrón + Carne', '$2,50'],
    ['Bolón Mixto + Carne', '$2,75'],
    [
      'Bolón Especial',
      '$2,75',
      'queso o chicharrón + tocino + mozzarella + ensalada + salsas',
    ],
    [
      'Bolón Especial',
      '$3,00',
      'queso o chicharrón + tocino + mozzarella + ensalada + huevo + salsas',
    ],
    [
      'Bolón Especial Mixto',
      '$3,25',
      'mixto + tocino + mozzarella + huevo + ensalada + salsas',
    ],
    ['Tigrillo con Queso o Chicharrón', '$2,75'],
    ['Tigrillo con Queso o Chicharrón + Carne', '$3,25'],
    ['Tigrillo Completo', '$4,00', 'carne + chorizo + huevo + queso'],
  ],

  'Comida rápida': [
    ['Hamburguesa especial', '$3,00'],
    ['Hamburguesa normal', '$2,50'],
    ['Hot Dog de 32 cm', '$3,25'],
    ['Hot Dog normal', '$2,00'],
    ['Cubano', '$2,50'],
    ['Papipollo', '$2,50'],
    ['Arroz con pollo broaster', '$3,00'],
    ['Seco de carne', '$3,00'],
    ['Salchipapa', '$1,25'],
  ],

  'Alitas de pollo': [
    [
      'Combo 1',
      '$4,25',
      '5 alitas + papas + tomate + salsas · BBQ, Miel & Mostaza, Maracuyá, Búfalo',
    ],
    [
      'Combo 2',
      '$8,00',
      '10 alitas + papas + tomate + salsas · BBQ, Miel & Mostaza, Maracuyá, Búfalo',
    ],
    [
      'Combo 3',
      '$11,50',
      '15 alitas + papas + tomate + salsas · BBQ, Miel & Mostaza, Maracuyá, Búfalo',
    ],
    [
      'Combo 4',
      '$15,00',
      '20 alitas + papas + tomate + salsas · BBQ, Miel & Mostaza, Maracuyá, Búfalo',
    ],
    [
      'Combo 5',
      '$19,25',
      '25 alitas + papas + tomate + salsas · BBQ, Miel & Mostaza, Maracuyá, Búfalo',
    ],
  ],

  'Bebidas calientes': [
    ['Tinto (Café Pasado)', '$0,80'],
    ['Chocolate', '$1,50'],
    ['Colada Morada', '$1,50'],
    ['Morocho', '$1,25'],
    ['Aguas aromáticas', '', 'Horchata · Manzanilla · Cedrón · Anís'],
  ],

  Extras: [
    ['Huevo frito', '$0,75'],
    ['Presa de pollo', '$1,75'],
    ['Porción de arroz', '$2,00'],
    ['Porción de papa', '$1,50'],
    ['Porción de carne', '$1,25'],
    ['Porción de queso', '$0,50'],
    ['Arroz dorado con chuleta', '$4,50'],
  ],
} as const

type Category = keyof typeof menu

/* ─────────────────────────────────────────────
   ICONOS SOCIALES
   SVG inline para no añadir dependencias.
───────────────────────────────────────────── */

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
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

/* ─────────────────────────────────────────────
   MARCA
───────────────────────────────────────────── */

function Brand({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#inicio"
      className={`brand ${light ? 'brand-light' : ''}`}
      aria-label="Cafetería Las 5 Esquinas, inicio"
    >
      <span className="brand-mark">5</span>

      <span className="font-serif text-[15px] font-semibold leading-[0.92] tracking-[-.02em]">
        Cafetería
        <br />
        <em className="not-italic text-primary">Las 5 Esquinas</em>
      </span>
    </a>
  )
}

/* ─────────────────────────────────────────────
   REDES SOCIALES
───────────────────────────────────────────── */

function SocialRail() {
  return (
    <div
      className="social-rail"
      aria-label="Redes sociales y contacto"
    >
      <a
        href={socials[0].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        title="Instagram"
      >
        <InstagramIcon />
      </a>

      <a
        href={socials[1].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        title="Facebook"
      >
        <FacebookIcon />
      </a>

      <a
        href={socials[2].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="TikTok"
        title="TikTok"
      >
        <TikTokIcon />
      </a>

      <a
        href={socials[3].href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        title="WhatsApp"
        className="social-whatsapp"
      >
        <WhatsAppIcon />
      </a>
    </div>
  )
}

/* ─────────────────────────────────────────────
   HEADER
───────────────────────────────────────────── */

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="header-inner">
        <Brand light />

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Navegación principal"
        >
          <a href="#presentacion">Nosotros</a>
          <a href="#especialidades">Especialidades</a>
          <a href="#menu">Menú</a>
          <a href="#ubicacion">Ubicación</a>
        </nav>

        <button
          type="button"
          className="mobile-toggle md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <MenuIcon size={22} />}
        </button>
      </div>

      {open && (
        <nav
          className="mobile-nav md:hidden"
          aria-label="Navegación móvil"
        >
          <a onClick={() => setOpen(false)} href="#presentacion">
            Nosotros
          </a>

          <a onClick={() => setOpen(false)} href="#especialidades">
            Especialidades
          </a>

          <a onClick={() => setOpen(false)} href="#menu">
            Menú
          </a>

          <a onClick={() => setOpen(false)} href="#ubicacion">
            Ubicación
          </a>

          <a
            onClick={() => setOpen(false)}
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Pedir por WhatsApp
            <ArrowUpRight size={16} />
          </a>
        </nav>
      )}
    </header>
  )
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */

function Hero() {
  return (
    <section id="inicio" className="hero-full">
      <Image
        src="/cafe-editorial.png"
        alt="Café servido en Cafetería Las 5 Esquinas"
        fill
        priority
        className="hero-photo"
        sizes="100vw"
      />

      <div className="hero-overlay" />

      <div className="hero-content">
        <p className="eyebrow hero-eyebrow">
          Ricaurte · Cuenca, Ecuador
        </p>

        <h1 className="hero-title font-serif">
          Cafetería
          <br />
          <span>Las 5</span>
          <br />
          <i>Esquinas</i>
        </h1>

        <p className="hero-copy">
          Café, comida y antojitos cuencanos para cualquier momento.
        </p>

        <a href="#menu" className="hero-menu-button">
          <span>MENÚ</span>
          <ArrowDown size={23} strokeWidth={2.2} />
        </a>
      </div>

      <div className="hero-note">
        Una propuesta gastronómica
        <br />
        desde Ricaurte
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   INTRO
───────────────────────────────────────────── */

function Intro() {
  return (
    <section id="presentacion" className="intro-section">
      <div className="section-shell intro-grid">
        <p className="eyebrow">La mesa está servida</p>

        <div>
          <h2 className="display-title">
            Un lugar para empezar el día, hacer una pausa o resolver el
            antojo.
          </h2>

          <p className="body-copy">
            Contamos con café, desayunos,
            especialidades, comida rápida, bebidas y más.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   ESPECIALIDADES
───────────────────────────────────────────── */

function Specialties() {
  const cards = [
    ['Bolón', 'Tradición que reconforta', '/bolon-editorial.png'],
    ['Tigrillo', 'Un clásico para comenzar', '/tigrillo-editorial.png'],
    ['Alitas', 'Para compartir el antojo', '/alitas-editorial.png'],
  ]

  return (
    <section
      id="especialidades"
      className="section-shell specialties"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">Para elegir sin pensarlo mucho</p>

          <h2 className="display-title">Especialidades</h2>
        </div>

        <a href="#menu" className="link-arrow">
          Explorar el menú
          <ArrowUpRight size={16} />
        </a>
      </div>

      <div className="specialty-grid">
        {cards.map(([title, desc, src], i) => (
          <article
            key={title}
            className={`specialty-card specialty-${i + 1}`}
          >
            <div className="specialty-image">
              <Image
                src={src}
                alt={`${title}, especialidad de la cafetería`}
                fill
                className="object-cover transition duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            <div className="specialty-caption">
              <h3 className="font-serif">{title}</h3>
              <p>{desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   MENÚ
───────────────────────────────────────────── */

function MenuSection() {
  const [active, setActive] = useState<Category>('Menú')

  return (
    <section id="menu" className="menu-section">
      <div className="section-shell">
        <div className="menu-intro">
          <p className="eyebrow text-primary">
            Hecho para elegir fácil
          </p>

          <h2 className="display-title">El menú</h2>

          <p className="body-copy">
            Precios claros y
            opciones para todos los antojos.
          </p>
        </div>

        <div
          className="menu-tabs"
          role="tablist"
          aria-label="Categorías del menú"
        >
          {Object.keys(menu).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={active === cat}
              onClick={() => setActive(cat as Category)}
              className={active === cat ? 'active' : ''}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="menu-list">
          {menu[active].map(([name, price, detail]) => (
            <div
              key={`${name}-${price}`}
              className="menu-item"
            >
              <div className="menu-item-content">
                <h3>{name}</h3>

                {detail && <p>{detail}</p>}
              </div>

              {price && <span>{price}</span>}
            </div>
          ))}
        </div>

        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary menu-button"
        >
          Pedir por WhatsApp
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   RESEÑAS
───────────────────────────────────────────── */

function Reviews() {
  return (
    <section className="section-shell reviews">
      <div className="review-heading">
        <p className="eyebrow">Lo que dicen</p>

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
        ].map(([quote, name]) => (
          <figure key={name} className="review-card">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star
                  key={n}
                  size={15}
                  fill="currentColor"
                />
              ))}
            </div>

            <blockquote>“{quote}”</blockquote>

            <figcaption>
              {name} · 5/5
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   UBICACIÓN
───────────────────────────────────────────── */

function Location() {
  return (
    <section id="ubicacion" className="location">
      <div className="location-image">
        <Image
          src="/alitas-editorial.png"
          alt="Alitas de pollo con papas"
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>

      <div className="location-copy">
        <p className="eyebrow">Encuéntranos</p>

        <h2 className="display-title">
          Las 5 Esquinas
        </h2>

        <address>
          Ricaurte - 5 Esquinas
          <br />
          Vicente Pacheco 412
          <br />
          Cuenca, Ecuador
        </address>

        <a
          href={maps}
          target="_blank"
          rel="noopener noreferrer"
          className="button-primary"
        >
          Cómo llegar
          <ArrowUpRight size={17} />
        </a>
      </div>
    </section>
  )
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */

function Footer() {
  return (
    <footer id="contacto" className="footer">
      <div className="section-shell">
        <div className="footer-top">
          <div>
            <Brand />
            <p className="footer-copy">
              Café, comida y antojos para cualquier momento.
            </p>
          </div>

          <div className="footer-contact">
            <a href="tel:0983202196">
              <Phone size={16} />
              0983202196
            </a>

            <a
              className="button-primary"
              href={whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Pedir por WhatsApp <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Demo / propuesta comercial no oficial</p>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────────────────────────────────
   PÁGINA
───────────────────────────────────────────── */

export function Las5Esquinas() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Intro />
        <Specialties />
        <MenuSection />
        <Reviews />
        <Location />

        <section className="final-cta">
          <p className="eyebrow">
            El antojo ya está decidido
          </p>

          <h2 className="font-serif">
            ¿Qué se te antoja?
          </h2>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="button-primary"
          >
            Pedir por WhatsApp
            <ArrowUpRight size={17} />
          </a>
        </section>
      </main>

      <Footer />

      <SocialRail />
    </>
  )
}