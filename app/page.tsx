import Image from 'next/image';
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

export default function Home() {
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
              src="/images/imprimex-logo-horizontal.png"
              alt="Imprimex — For All Your Printing Needs"
              width={910}
              height={289}
            />
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#top">Home</a>
            <a href="#shop">Shop</a>
            <a href="#cybographics">Cybographics Inc.</a>
            <div className="nav-dropdown">
              <a href="#online-stores">
                Online Stores <ChevronDown aria-hidden="true" />
              </a>
              <div className="online-stores-menu" aria-label="Online stores">
                <span>Store list pending</span>
              </div>
            </div>
            <a href="#contact">Contact</a>
            <a href="#more">More</a>
          </nav>
          <details className="mobile-nav">
            <summary aria-label="Open navigation">
              <Menu />
            </summary>
            <nav>
              <a href="#top">Home</a>
              <a href="#shop">Shop</a>
              <a href="#cybographics">Cybographics Inc.</a>
              <details className="mobile-stores">
                <summary>
                  Online Stores <ChevronDown aria-hidden="true" />
                </summary>
                <div>
                  <span>Store list pending</span>
                </div>
              </details>
              <a href="#contact">Contact</a>
              <a href="#more">More</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-overlay" />
        <div className="site-width hero-content">
          <span className="hero-kicker">
            Custom printing • Passaic, New Jersey
          </span>
          <h1>
            Bring your
            <br />
            <strong>ideas to life.</strong>
          </h1>
          <p>
            Apparel, uniforms, signs, stickers, and business
            essentials—professionally printed for the way your brand works.
          </p>
          <div className="hero-buttons">
            <a
              className={cn(buttonVariants(), 'hero-primary')}
              href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
            >
              Request a Quote <ArrowRight />
            </a>
            <a
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'hero-secondary',
              )}
              href="#shop"
            >
              Explore Services
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
          <span>For All Your Printing Needs</span>
          <i />
        </div>
      </section>

      <section className="category-section" id="shop">
        <div className="site-width">
          <div className="section-intro">
            <div>
              <span className="section-label">Explore what we make</span>
              <h2>Start with a category.</h2>
            </div>
            <p>
              Find the right service quickly, whether you’re outfitting a team,
              preparing a storefront, or building a brand from the ground up.
            </p>
          </div>
          <div className="category-grid">
            {categories.map((item) => (
              <a
                className="category-card"
                href={item.href}
                key={item.title}
                aria-label={`Explore ${item.title}`}
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
                  <small>{item.label}</small>
                  <h3>{item.title}</h3>
                  <span className="card-link">
                    Explore <ArrowRight />
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
              Everything under one roof
            </span>
            <h2>Print services for every kind of project.</h2>
          </div>
          <div className="service-groups">
            {serviceGroups.map((group) => (
              <article key={group.number}>
                <span className="group-number">{group.number}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.services.map((service) => (
                    <li key={service}>
                      <a
                        href={`mailto:imprimexllc@gmail.com?subject=${encodeURIComponent(service)}%20Quote`}
                      >
                        {service}
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
          <span className="photo-tag">Apparel & Uniforms</span>
        </div>
        <div className="apparel-copy">
          <span className="section-label">Made for your people</span>
          <h2>
            One team.
            <br />
            One look.
          </h2>
          <p>
            From everyday workwear to event shirts and team uniforms, choose the
            decoration method and apparel that fit your project.
          </p>
          <div className="feature-columns">
            <div>
              <strong>Print options</strong>
              <span>Screen Printing</span>
              <span>DTF Transfers</span>
              <span>Embroidery</span>
            </div>
            <div>
              <strong>Made for</strong>
              <span>Staff & Crews</span>
              <span>Teams & Events</span>
              <span>Local Brands</span>
            </div>
          </div>
          <a
            className={cn(buttonVariants(), 'dark-button')}
            href="mailto:imprimexllc@gmail.com?subject=Custom%20Apparel%20Quote"
          >
            Ask about apparel <ArrowRight />
          </a>
        </div>
      </section>

      <section className="business-section" id="more">
        <div className="site-width">
          <div className="business-heading">
            <span className="section-label">Business printing</span>
            <h2>
              Every touchpoint,
              <br />
              professionally printed.
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
                <small>Brand essentials</small>
                <h3>Business cards, flyers & materials</h3>
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
                <small>Custom production</small>
                <h3>Promotional printing</h3>
              </div>
            </div>
            <div className="business-list">
              <h3>Also available</h3>
              <a href="mailto:imprimexllc@gmail.com?subject=Menus%20Quote">
                Menus <ArrowRight />
              </a>
              <a href="mailto:imprimexllc@gmail.com?subject=Stickers%20and%20Labels%20Quote">
                Stickers & Labels <ArrowRight />
              </a>
              <a href="mailto:imprimexllc@gmail.com?subject=Graphic%20Design">
                Graphic Design <ArrowRight />
              </a>
              <a href="mailto:imprimexllc@gmail.com?subject=Branding%20Materials%20Quote">
                Branding Materials <ArrowRight />
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
          <span className="section-label light">Have a project in mind?</span>
          <h2>Let’s print it.</h2>
          <p>Tell us what you need, how many, and when you need it.</p>
        </div>
        <a
          className={cn(buttonVariants(), 'white-button')}
          href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
        >
          Request a Quote <ArrowRight />
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
            <p>For All Your Printing Needs</p>
          </div>
          <div>
            <h3>Visit</h3>
            <a href="https://maps.google.com/?q=46+Wall+St+Passaic+NJ+07055">
              46 Wall St
              <br />
              Passaic, NJ 07055
            </a>
          </div>
          <div>
            <h3>Contact</h3>
            <a href="tel:+19733650099">(973) 365-0099</a>
            <a href="https://wa.me/19739304571">WhatsApp: (973) 930-4571</a>
            <a href="mailto:imprimexllc@gmail.com">imprimexllc@gmail.com</a>
          </div>
          <div>
            <h3>Follow</h3>
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
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href="https://wa.me/19739304571"
        aria-label="Contact Imprimex on WhatsApp"
      >
        <MessageCircle />
      </a>
    </main>
  );
}
