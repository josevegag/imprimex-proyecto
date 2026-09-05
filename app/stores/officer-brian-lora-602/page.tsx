'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { LanguageSelector, useLanguage } from '@/components/language-provider';

export default function OfficerBrianLoraMemorialStore() {
  const { language } = useLanguage();
  const t = (english: string, spanish: string) =>
    language === 'es' ? spanish : english;

  return (
    <main className="lora-store">
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

      <section className="lora-memorial-banner">
        <picture>
          <source
            media="(max-width: 640px)"
            srcSet="/images/officer-lora-memorial-banner-mobile.png"
          />
          <img
            src="/images/officer-lora-memorial-banner.png"
            alt="Honoring the Memory of Officer Brian Lora — E.O.W 4/29/2024"
          />
        </picture>
        <h1 className="sr-only">Honoring the Memory of Officer Brian Lora</h1>
        <p className="sr-only">E.O.W 4/29/2024</p>
      </section>

      <section className="lora-product-section">
        <p className="lora-donation">
          100% of donations will directly benefit Officer Brian Lora&apos;s family.
        </p>

        <article className="lora-product-card">
          <div className="lora-product-image">
            <Image
              src="/images/officer-lora-memorial-shirt.png"
              alt="Officer Lora 602 Memorial T-shirt"
              width={960}
              height={892}
              priority
            />
          </div>
          <div className="lora-product-info">
            <h2>Officer Lora 602 Memorial T-shirt</h2>
            <div className="lora-price" aria-label="Original price $25.00, discounted price $21.25">
              <del>$25.00</del>
              <strong>$21.25</strong>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
