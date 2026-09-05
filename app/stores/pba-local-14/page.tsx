'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import type { CSSProperties } from 'react';
import { LanguageSelector, useLanguage } from '@/components/language-provider';

const products = [
  {
    name: 'Passaic Recreation Autism Awareness Sling Bag',
    price: '$23.80',
    image: '/images/pba-local-14-product-01.png',
    badge: true,
  },
  {
    name: 'City of Passaic Autism Hoodie 2026 (Unisex)',
    price: '$38.25',
    image: '/images/pba-local-14-product-02.png',
    badge: true,
  },
  {
    name: 'City of Passaic Autism Tee 2026 (Unisex)',
    price: '$29.75',
    image: '/images/pba-local-14-product-03.png',
    badge: true,
  },
  {
    name: 'Passaic PBA Local 14 Native Cap',
    price: '$24.65',
    image: '/images/pba-local-14-product-04.png',
  },
  {
    name: 'Passaic PBA Local 14 Native T-Shirt (Unisex)',
    price: '$29.75',
    image: '/images/pba-local-14-product-05.png',
  },
  {
    name: 'PBA Local 14 “Thin Blue Line” Flag T-Shirt (Unisex)',
    price: '$24.65',
    image: '/images/pba-local-14-product-06.png',
  },
  {
    name: 'PBA Local 14 Breast Cancer Awareness (Unisex)',
    price: '$21.25',
    image: '/images/pba-local-14-product-07.png',
  },
  {
    name: 'Nashville Style #1 T-Shirt (Unisex)',
    price: '$21.25',
    image: '/images/pba-local-14-product-08.png',
  },
  {
    name: 'Nashville Style #2 T-Shirt (Unisex)',
    price: '$24.65',
    image: '/images/pba-local-14-product-09.png',
  },
];

export default function PbaLocal14Store() {
  const { language } = useLanguage();
  const t = (english: string, spanish: string) =>
    language === 'es' ? spanish : english;

  return (
    <main className="police-store">
      <header className="police-store-nav">
        <Link href="/" aria-label="Back to Imprimex home">
          <Image
            src="/images/imprimex-logo-approved.png"
            alt="Imprimex"
            width={2158}
            height={729}
            priority
          />
        </Link>
        <div className="police-nav-actions">
          <LanguageSelector />
          <Link className="police-back" href="/#top">
            <ArrowLeft aria-hidden="true" />
            {t('Back to Imprimex', 'Volver a Imprimex')}
          </Link>
        </div>
      </header>

      <section className="police-masthead pba-masthead">
        <span>{t('Official Online Store', 'Tienda oficial en línea')}</span>
        <h1>PBA Local 14 Apparel</h1>
      </section>

      <section className="police-products" aria-labelledby="shop-apparel">
        <div className="police-products-heading">
          <p>PBA Local 14 Apparel</p>
          <h2 id="shop-apparel">{t('Shop Apparel', 'Comprar ropa')}</h2>
          <span>
            {t(
              'Scroll to explore all 9 products',
              'Desliza para explorar los 9 productos',
            )}
          </span>
        </div>

        <div className="police-product-rail">
          {products.map((product, index) => (
            <article
              className="police-product-card"
              key={product.name}
              style={{ '--card-index': index } as CSSProperties}
            >
              <div className="police-product-photo pba-product-photo">
                {product.badge && <span>{t('New Arrival', 'Nuevo')}</span>}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="145px"
                  style={{ objectFit: 'contain' }}
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
