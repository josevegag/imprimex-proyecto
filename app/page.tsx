import {
  ArrowRight,
  Check,
  Layers3,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Palette,
  Phone,
  Scissors,
  Shirt,
  Sparkles,
  Sticker,
} from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: Layers3,
    number: '01',
    title: 'Screen Printing',
    copy: 'Crisp, durable prints for teams, staff, events, and growing brands.',
  },
  {
    icon: Sparkles,
    number: '02',
    title: 'DTF Transfers',
    copy: 'Vivid, detailed transfers with a smooth finish for short and flexible runs.',
  },
  {
    icon: Scissors,
    number: '03',
    title: 'Embroidery',
    copy: 'Professional stitched branding for hats, polos, jackets, and uniforms.',
  },
  {
    icon: Sticker,
    number: '04',
    title: 'Stickers & Labels',
    copy: 'Custom-cut labels and stickers that make packaging and products stand out.',
  },
  {
    icon: Palette,
    number: '05',
    title: 'Graphic Design',
    copy: 'Thoughtful artwork preparation and design support, ready for production.',
  },
  {
    icon: Shirt,
    number: '06',
    title: 'Business Printing',
    copy: 'Business cards, flyers, menus, promotional pieces, and branded essentials.',
  },
];
const businessItems = [
  'Menus',
  'Product labels',
  'Custom stickers',
  'Flyers',
  'Business cards',
  'Brand materials',
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand" href="#top" aria-label="Imprimex home">
            <span className="brand-mark" aria-hidden="true">
              <span>I</span>
            </span>
            <span className="brand-name">
              IMPRIMEX<small>PRINT • CREATE • IMPACT</small>
            </span>
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#apparel">Apparel</a>
            <a href="#business">Business Printing</a>
            <a href="#contact">Contact</a>
          </nav>
          <a
            className={cn(buttonVariants(), 'header-cta')}
            href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
          >
            Get a quote <ArrowRight />
          </a>
          <details className="mobile-menu">
            <summary aria-label="Open navigation">
              <Menu />
            </summary>
            <nav aria-label="Mobile navigation">
              <a href="#services">Services</a>
              <a href="#apparel">Apparel</a>
              <a href="#business">Business Printing</a>
              <a href="#contact">Contact</a>
            </nav>
          </details>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid container">
          <div className="hero-copy">
            <div className="eyebrow">
              <span /> Passaic, New Jersey
            </div>
            <h1>
              For all your
              <br />
              <em>printing</em> needs.
            </h1>
            <p>
              Custom apparel, business printing, and branded essentials—made
              with care for local businesses, teams, and communities.
            </p>
            <div className="hero-actions">
              <a
                className={cn(buttonVariants(), 'button-primary')}
                href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
              >
                Request a Quote <ArrowRight />
              </a>
              <a
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'button-secondary',
                )}
                href="#contact"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div
            className="hero-art"
            aria-label="A collection of custom print samples"
          >
            <div className="print-card card-shirt">
              <span>TEAM</span>
              <strong>IMPRIMEX</strong>
              <small>EST. PASSAIC, NJ</small>
            </div>
            <div className="print-card card-label">
              <span>
                YOUR
                <br />
                BRAND
              </span>
              <small>MADE TO STICK</small>
            </div>
            <div className="print-card card-menu">
              <small>FRESHLY PRINTED</small>
              <strong>MENU</strong>
              <i>
                Good design,
                <br />
                served daily.
              </i>
            </div>
            <div className="color-bars" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <span className="quality-stamp">
              PRINTED
              <br />
              <b>WITH CARE</b>
            </span>
          </div>
        </div>
        <div className="service-ticker" aria-hidden="true">
          <span>SCREEN PRINTING</span>
          <i />
          <span>DTF TRANSFERS</span>
          <i />
          <span>EMBROIDERY</span>
          <i />
          <span>STICKERS</span>
          <i />
          <span>BUSINESS PRINTING</span>
        </div>
      </section>

      <section className="section services" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="kicker">What we make</span>
              <h2>
                One shop.
                <br />
                Every impression.
              </h2>
            </div>
            <p>
              From the shirt your team wears to the label on your product, we
              help your brand show up consistently and professionally.
            </p>
          </div>
          <div className="services-grid">
            {services.map(({ icon: Icon, number, title, copy }) => (
              <article className="service-card" key={title}>
                <div className="service-top">
                  <Icon />
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <p>{copy}</p>
                <a href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote">
                  Ask about this service <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section" id="apparel">
        <div className="apparel-visual">
          <div className="fabric-word">IMPRIMEX</div>
          <div className="thread-lines" aria-hidden="true" />
          <span className="patch">
            BUILT
            <br />
            FOR YOUR
            <br />
            <b>CREW</b>
          </span>
        </div>
        <div className="split-copy">
          <span className="kicker light">Custom apparel & uniforms</span>
          <h2>
            Make the team
            <br />
            look like a team.
          </h2>
          <p>
            Bring your logo to life on apparel made for the job, the field, the
            event, or the everyday. We’ll help you choose the right decoration
            method for a polished result.
          </p>
          <ul>
            <li>
              <Check /> Staff and work uniforms
            </li>
            <li>
              <Check /> Team and event apparel
            </li>
            <li>
              <Check /> Polos, tees, jackets, and hats
            </li>
          </ul>
          <a
            className={cn(buttonVariants(), 'button-white')}
            href="mailto:imprimexllc@gmail.com?subject=Custom%20Apparel%20Quote"
          >
            Start an apparel project <ArrowRight />
          </a>
        </div>
      </section>

      <section className="section business" id="business">
        <div className="container business-grid">
          <div className="business-copy">
            <span className="kicker">Print for business</span>
            <h2>The details that keep your brand moving.</h2>
            <p>
              Professional print materials designed to make every customer
              touchpoint feel considered—from the front counter to the final
              package.
            </p>
            <a
              className={cn(buttonVariants(), 'button-dark')}
              href="mailto:imprimexllc@gmail.com?subject=Business%20Printing%20Quote"
            >
              Plan your next print run <ArrowRight />
            </a>
          </div>
          <div className="business-list">
            {businessItems.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{item}</strong>
                <ArrowRight />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div className="container cta-inner">
          <div>
            <span className="kicker light">Ready when you are</span>
            <h2>
              Let’s make something
              <br />
              worth noticing.
            </h2>
          </div>
          <div className="cta-side">
            <p>
              Tell us what you’re printing, how many you need, and when you need
              it.
            </p>
            <a
              className={cn(buttonVariants(), 'button-white')}
              href="mailto:imprimexllc@gmail.com?subject=Request%20a%20Quote"
            >
              Request a Quote <ArrowRight />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#top">
              <span className="brand-mark">
                <span>I</span>
              </span>
              <span className="brand-name">
                IMPRIMEX<small>PRINT • CREATE • IMPACT</small>
              </span>
            </a>
            <p>For All Your Printing Needs</p>
          </div>
          <div>
            <h3>Visit us</h3>
            <a href="https://maps.google.com/?q=46+Wall+St+Passaic+NJ+07055">
              <MapPin />
              46 Wall St
              <br />
              <span>Passaic, NJ 07055</span>
            </a>
          </div>
          <div>
            <h3>Talk to us</h3>
            <a href="tel:+19733650099">
              <Phone />
              (973) 365-0099
            </a>
            <a href="https://wa.me/19739304571">
              <MessageCircle />
              (973) 930-4571
            </a>
          </div>
          <div>
            <h3>Write to us</h3>
            <a href="mailto:imprimexllc@gmail.com">
              <Mail />
              imprimexllc@gmail.com
            </a>
            <a href="https://www.instagram.com/imprimexnj/">@imprimexnj</a>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} Imprimex LLC</span>
          <span>Passaic, New Jersey</span>
        </div>
      </footer>
    </main>
  );
}
