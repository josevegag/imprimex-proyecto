import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { CSSProperties } from 'react';

const products = [
  { name: 'ERT PPD Hoodie (Unisex)', price: '$38.25', x: 35, badge: true },
  { name: 'ERT PPD T-Shirt (Unisex)', price: '$25.50', x: 292, badge: true },
  {
    name: 'Emergency Response Team 2025 Hoodie (Grey)',
    price: '$38.25',
    x: 549,
  },
  {
    name: 'Emergency Response Team 2025 T-Shirt',
    price: '$21.25',
    x: 806,
  },
  { name: 'Emergency Response Team T-Shirt', price: '$21.25', x: 1063 },
  {
    name: 'Emergency Response Team 1/4-Zip Pullover Sweatshirt',
    price: '$40.80',
    x: 1320,
  },
  {
    name: 'Emergency Response Team Hoodie (Military Green)',
    price: '$38.25',
    x: 1576,
  },
];

export default function PassaicPoliceStore() {
  return (
    <main className="police-store">
      <header className="police-store-nav">
        <Link href="/" aria-label="Back to Imprimex home">
          <Image
            src="/images/imprimex-logo-horizontal.png"
            alt="Imprimex"
            width={910}
            height={289}
            priority
          />
        </Link>
        <Link className="police-back" href="/#top">
          <ArrowLeft aria-hidden="true" /> Back to Imprimex
        </Link>
      </header>

      <section className="police-masthead">
        <span>Official Online Store</span>
        <h1>Passaic Police</h1>
      </section>

      <section className="police-products" aria-labelledby="shop-apparel">
        <div className="police-products-heading">
          <p>Passaic Police Apparel</p>
          <h2 id="shop-apparel">Shop Apparel</h2>
          <span>Scroll to explore all 7 products</span>
        </div>

        <div className="police-product-rail">
          {products.map((product, index) => (
            <article
              className="police-product-card"
              key={product.name}
              style={{ '--card-index': index } as CSSProperties}
            >
              <div className="police-product-photo">
                {product.badge && <span>New Arrival</span>}
                <Image
                  src="/images/passaic-police-products-reference.png"
                  alt={product.name}
                  width={1878}
                  height={415}
                  unoptimized
                  style={{ left: `${-product.x}px` }}
                />
              </div>
              <div className="police-product-info">
                <h3>{product.name}</h3>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
