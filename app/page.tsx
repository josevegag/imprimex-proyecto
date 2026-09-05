'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  ChevronDown,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LanguageSelector, useLanguage } from '@/components/language-provider';

const categories = [
  {
    title: 'Custom Apparel',
    label: 'Wear your brand',
    image: '/images/real-dtf.jpg',
    href: '#online-stores',
  },
  {
    title: 'Screen Printing',
    label: 'Bold, lasting prints',
    image: '/images/real-printing.jpg',
    href: '#cybographics',
  },
  {
    title: 'Embroidery',
    label: 'A polished finish',
    image: '/images/real-embroidery.jpg',
    href: '#cybographics',
  },
  {
    title: 'Business Printing',
    label: 'Make every detail count',
    image: '/images/real-business-cards.jpg',
    href: '#more',
  },
];

const serviceGroups = [
  {
    number: '01',
    title: 'Apparel & Uniforms',
    services: [
      'Custom Apparel',
      'Uniforms',
      'Screen Printing',
      'DTF Transfers',
      'Embroidery',
    ],
  },
  {
    number: '02',
    title: 'Business Print',
    services: ['Business Cards', 'Flyers', 'Menus', 'Promotional Printing'],
  },
  {
    number: '03',
    title: 'Stickers & Packaging',
    services: ['Stickers & Labels', 'Labels'],
  },
  {
    number: '04',
    title: 'Design & Brand',
    services: ['Graphic Design', 'Branding Materials'],
  },
];

const onlineStores = [
  { name: 'Passaic Police Apparel', href: '/stores/passaic-police' },
  { name: 'PBA Local 14 Apparel', href: '/stores/pba-local-14' },
  { name: 'Officer Brian Lora 602' },
];

export default function Home() {
  const { language } = useLanguage();
  const t = (english: string, spanish: string) =>
    language === 'es' ? spanish : english;
  const categoryTitles = [
    t('Custom Apparel', 'Ropa personalizada'),
    t('Screen Printing', 'Serigrafía'),
    t('Embroidery', 'Bordado'),
    t('Business Printing', 'Impresión comercial'),
  ];
  const categoryLabels = [
    t('Wear your brand', 'Luce tu marca'),
    t('Bold, lasting prints', 'Impresiones duraderas'),
    t('A polished finish', 'Un acabado profesional'),
    t('Make every detail count', 'Cada detalle cuenta'),
  ];
  const groupTitles = [
    t('Apparel & Uniforms', 'Ropa y uniformes'),
    t('Business Print', 'Impresión comercial'),
    t('Stickers & Packaging', 'Stickers y empaque'),
    t('Design & Brand', 'Diseño y marca'),
  ];
  const serviceTranslations: Record<string, string> = {
    'Custom Apparel': 'Ropa personalizada',
    Uniforms: 'Uniformes',
    'Screen Printing': 'Serigrafía',
    'DTF Transfers': 'Transfers DTF',
    Embroidery: 'Bordado',
    'Business Cards': 'Tarjetas de presentación',
    Flyers: 'Volantes',
    Menus: 'Menús',
    'Promotional Printing': 'Impresión promocional',
    'Stickers & Labels': 'Stickers y etiquetas',
    Labels: 'Etiquetas',
    'Graphic Design': 'Diseño gráfico',
    'Branding Materials': 'Materiales de marca',
  };
  const serviceName = (name: string) =>
    language === 'es' ? serviceTranslations[name] : name;

  return (
    <main id="top">
      <div className="utility-bar">
        <div className="site-width utility-inner">
          <span>
            <MapPin />
            46 Wall St, Passaic, NJ 07055
          </span>
          <div>
            <a href="tel:+19733650099">
              <Phone />
              (973) 365-0099
            </a>
            <a href="https://wa.me/19739304571">
              <MessageCircle />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header className="main-header">
        <div className="site-width header-inner">
          <a className="logo-link" href="#top" aria-label="Imprimex home">
            <Image
              src="/images/imprimex-logo-approved.png"
              alt="Imprimex — For All Your Printing Needs"
              width={2158}
              height={729}
            />
          </a>
          <nav
            className="desktop-nav"
            aria-label={t('Main navigation', 'Navegación principal')}
          >
            <a href="#top">{t('Home', 'Inicio')}</a>
            <a href="#shop">{t('Shop', 'Tienda')}</a>
            <a href="#cybographics">Cybographics Inc.</a>
            <div className="nav-dropdown">
              <a href="#online-stores">
                {t('Online Stores', 'Tiendas en línea')}{' '}
                <ChevronDown aria-hidden="true" />
              </a>
              <div className="online-stores-menu" aria-label="Online stores">
                <ul>
                  {onlineStores.map((store) => (
                    <li key={store.name}>
                      {store.href ? (
                        <Link href={store.href}>{store.name}</Link>
                      ) : (
                        store.name
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <a href="#contact">{t('Contact', 'Contacto')}</a>
            <a href="#more">{t('More', 'Más')}</a>
          </nav>
          <LanguageSelector />
          <details className="mobile-nav">
            <summary aria-label={t('Open navigation', 'Abrir navegación')}>
              <Menu />
            </summary>
            <nav>
              <a href="#top">{t('Home', 'Inicio')}</a>
              <a href="#shop">{t('Shop', 'Tienda')}</a>
              <a href="#cybographics">Cybographics Inc.</a>
              <details className="mobile-stores">
                <summary>
                  {t('Online Stores', 'Tiendas en línea')}{' '}
                  <ChevronDown aria-hidden="true" />
                </summary>
                <div>
                  <ul>
                    {onlineStores.map((store) => (
                      <li key={store.name}>
                        {store.href ? (
                          <Link href={store.href}>{store.name}</Link>
                        ) : (
                          store.name
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
              <a href="#contact">{t('Contact', 'Contacto')}</a>
              <a href="#more">{t('More', 'Más')}</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="site-width hero-content">
          <span className="hero-kicker">
            {t(
              'Custom printing • Passaic, New Jersey',
              'Impresión personalizada • Passaic, Nueva Jersey',
            )}
          </span>
          <h1>
            {t('Bring your', 'Convierte tus')}
            <br />
            <strong>{t('ideas to life.', 'ideas en realidad.')}</strong>
          </h1>
          <p>
            {t(
              'Apparel, uniforms, signs, stickers, and business essentials—professionally printed for the way your brand works.',
              'Ropa, uniformes, letreros, stickers y materiales comerciales, impresos profesionalmente para las necesidades de tu marca.',
            )}
          </p>
          <div className="hero-buttons">
            <a
              className={cn(buttonVariants(), 'hero-primary')}
              href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
            >
              {t('Request a Quote', 'Solicitar cotización')} <ArrowRight />
            </a>
            <a
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'hero-secondary',
              )}
              href="#shop"
            >
              {t('Explore Services', 'Explorar servicios')}
            </a>
          </div>
        </div>
        <div className="hero-work" aria-label="Selected work by Imprimex">
          <div className="hero-work-main">
            <Image
              src="/images/real-dtf.jpg"
              alt="Direct to film apparel work published by Imprimex"
              fill
              priority
              sizes="(max-width: 900px) 70vw, 34vw"
            />
          </div>
          <div className="hero-work-small top">
            <Image
              src="/images/real-embroidery.jpg"
              alt="Embroidered hats published by Imprimex"
              fill
              priority
              sizes="18vw"
            />
          </div>
          <div className="hero-work-small bottom">
            <Image
              src="/images/real-business-cards.jpg"
              alt="Business card printing published by Imprimex"
              fill
              priority
              sizes="18vw"
            />
          </div>
        </div>
        <div className="hero-note">
          <span>
            {t(
              'For All Your Printing Needs',
              'Para todas tus necesidades de impresión',
            )}
          </span>
          <i />
        </div>
      </section>

      <section className="category-section" id="shop">
        <div className="site-width">
          <div className="section-intro">
            <div>
              <span className="section-label">
                {t('Explore what we make', 'Explora lo que hacemos')}
              </span>
              <h2>
                {t('Start with a category.', 'Comienza con una categoría.')}
              </h2>
            </div>
            <p>
              {t(
                'Find the right service quickly, whether you’re outfitting a team, preparing a storefront, or building a brand from the ground up.',
                'Encuentra rápidamente el servicio adecuado, ya sea para vestir a un equipo, preparar un negocio o crear una marca desde cero.',
              )}
            </p>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <a
                className="category-card"
                href={item.href}
                key={item.title}
                aria-label={`${t('Explore', 'Explorar')} ${categoryTitles[categories.indexOf(item)]}`}
              >
                <Image
                  src={item.image}
                  alt=""
                  fill
                  loading="eager"
                  sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 25vw"
                />
                <span className="card-shade" />
                <div>
                  <small>{categoryLabels[categories.indexOf(item)]}</small>
                  <h3>{categoryTitles[categories.indexOf(item)]}</h3>
                  <span className="card-link">
                    {t('Explore', 'Explorar')} <ArrowRight />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="service-menu" id="cybographics">
        <div className="site-width">
          <div className="service-menu-head">
            <span className="section-label light">
              {t('Everything under one roof', 'Todo en un solo lugar')}
            </span>
            <h2>
              {t(
                'Print services for every kind of project.',
                'Servicios de impresión para todo tipo de proyecto.',
              )}
            </h2>
          </div>
          <div className="service-groups">
            {serviceGroups.map((group) => (
              <article key={group.number}>
                <span className="group-number">{group.number}</span>
                <h3>{groupTitles[serviceGroups.indexOf(group)]}</h3>
                <ul>
                  {group.services.map((service) => (
                    <li key={service}>
                      <a
                        href={`mailto:imprimexllc@gmail.com?subject=${encodeURIComponent(service)}%20Quote`}
                      >
                        {serviceName(service)}
                        <ArrowRight />
                      </a>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="apparel-section" id="online-stores">
        <div className="apparel-photo">
          <Image
            src="/images/real-dtf.jpg"
            alt="Direct to film apparel work published by Imprimex"
            fill
            loading="eager"
            sizes="(max-width: 1000px) 100vw, 54vw"
          />
          <span className="photo-tag">
            {t('Apparel & Uniforms', 'Ropa y uniformes')}
          </span>
        </div>
        <div className="apparel-copy">
          <span className="section-label">
            {t('Made for your people', 'Hecho para tu equipo')}
          </span>
          <h2>
            {t('One team.', 'Un equipo.')}
            <br />
            {t('One look.', 'Una imagen.')}
          </h2>
          <p>
            {t(
              'From everyday workwear to event shirts and team uniforms, choose the decoration method and apparel that fit your project.',
              'Desde ropa de trabajo hasta camisetas para eventos y uniformes, elige el método de personalización y las prendas ideales para tu proyecto.',
            )}
          </p>
          <div className="feature-columns">
            <div>
              <strong>{t('Print options', 'Opciones de impresión')}</strong>
              <span>{t('Screen Printing', 'Serigrafía')}</span>
              <span>DTF Transfers</span>
              <span>{t('Embroidery', 'Bordado')}</span>
            </div>
            <div>
              <strong>{t('Made for', 'Ideal para')}</strong>
              <span>{t('Staff & Crews', 'Personal y equipos')}</span>
              <span>{t('Teams & Events', 'Equipos y eventos')}</span>
              <span>{t('Local Brands', 'Marcas locales')}</span>
            </div>
          </div>
          <a
            className={cn(buttonVariants(), 'dark-button')}
            href="mailto:imprimexllc@gmail.com?subject=Custom%20Apparel%20Quote"
          >
            {t('Ask about apparel', 'Consultar sobre ropa')} <ArrowRight />
          </a>
        </div>
      </section>

      <section className="business-section" id="more">
        <div className="site-width">
          <div className="business-heading">
            <span className="section-label">
              {t('Business printing', 'Impresión comercial')}
            </span>
            <h2>
              {t('Every touchpoint,', 'Cada punto de contacto,')}
              <br />
              {t('professionally printed.', 'impreso profesionalmente.')}
            </h2>
          </div>
          <div className="business-layout">
            <div className="business-image large">
              <Image
                src="/images/real-business-cards.jpg"
                alt="Business cards published by Imprimex"
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, 63vw"
              />
              <div>
                <small>{t('Brand essentials', 'Esenciales de marca')}</small>
                <h3>
                  {t(
                    'Business cards, flyers & materials',
                    'Tarjetas, volantes y materiales',
                  )}
                </h3>
              </div>
            </div>
            <div className="business-image">
              <Image
                src="/images/real-offset.jpg"
                alt="Offset printing services published by Imprimex"
                fill
                loading="eager"
                sizes="(max-width: 640px) 100vw, 37vw"
              />
              <div>
                <small>
                  {t('Custom production', 'Producción personalizada')}
                </small>
                <h3>{t('Promotional printing', 'Impresión promocional')}</h3>
              </div>
            </div>
            <div className="business-list">
              <h3>{t('Also available', 'También disponible')}</h3>
              <a href="mailto:imprimexllc@gmail.com?subject=Menus%20Quote">
                {t('Menus', 'Menús')} <ArrowRight />
              </a>
              <a href="mailto:imprimexllc@gmail.com?subject=Stickers%20and%20Labels%20Quote">
                {t('Stickers & Labels', 'Stickers y etiquetas')} <ArrowRight />
              </a>
              <a href="mailto:imprimexllc@gmail.com?subject=Graphic%20Design">
                {t('Graphic Design', 'Diseño gráfico')} <ArrowRight />
              </a>
              <a href="mailto:imprimexllc@gmail.com?subject=Branding%20Materials%20Quote">
                {t('Branding Materials', 'Materiales de marca')} <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <Image
          src="/images/imprimex-avatar.png"
          alt="Official Imprimex character"
          width={136}
          height={131}
        />
        <div>
          <span className="section-label light">
            {t('Have a project in mind?', '¿Tienes un proyecto en mente?')}
          </span>
          <h2>{t('Let’s print it.', 'Vamos a imprimirlo.')}</h2>
          <p>
            {t(
              'Tell us what you need, how many, and when you need it.',
              'Cuéntanos qué necesitas, cuántas unidades y para cuándo.',
            )}
          </p>
        </div>
        <a
          className={cn(buttonVariants(), 'white-button')}
          href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
        >
          {t('Request a Quote', 'Solicitar cotización')} <ArrowRight />
        </a>
      </section>

      <footer>
        <div className="site-width footer-main">
          <div className="footer-brand">
            <Image
              src="/images/imprimex-logo-horizontal.png"
              alt="Imprimex"
              width={910}
              height={289}
            />
            <p>
              {t(
                'For All Your Printing Needs',
                'Para todas tus necesidades de impresión',
              )}
            </p>
          </div>
          <div>
            <h3>{t('Visit', 'Visítanos')}</h3>
            <a href="https://maps.google.com/?q=46+Wall+St+Passaic+NJ+07055">
              46 Wall St
              <br />
              Passaic, NJ 07055
            </a>
          </div>
          <div>
            <h3>{t('Contact', 'Contacto')}</h3>
            <a href="tel:+19733650099">(973) 365-0099</a>
            <a href="https://wa.me/19739304571">WhatsApp: (973) 930-4571</a>
            <a href="mailto:imprimexllc@gmail.com">imprimexllc@gmail.com</a>
          </div>
          <div>
            <h3>{t('Follow', 'Síguenos')}</h3>
            <a
              className="social-link"
              href="https://www.instagram.com/imprimexnj/"
            >
              @imprimexnj
            </a>
          </div>
        </div>
        <div className="site-width footer-bottom">
          <span>© {new Date().getFullYear()} Imprimex</span>
          <a href="#top">{t('Back to top', 'Volver arriba')} ↑</a>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/19739304571"
        aria-label={t(
          'Contact Imprimex on WhatsApp',
          'Contactar a Imprimex por WhatsApp',
        )}
      >
        <MessageCircle />
      </a>
    </main>
  );
}
