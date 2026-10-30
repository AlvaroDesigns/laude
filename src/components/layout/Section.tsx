import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  variant?: 'hero' | 'normal' | 'compact' | 'muted' | 'brand';
  className?: string;
  id?: string;
}

export function Section({
  children,
  variant = 'normal',
  className = '',
  id
}: SectionProps) {
  // Ritmo vertical estandarizado (elimina las inconsistencias de Salient/WPBakery)
  const variantStyles = {
    hero: 'pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28 bg-gradient-to-b from-[#FBF9F7] via-white to-white',
    normal: 'py-16 md:py-20 lg:py-24 bg-white',
    compact: 'py-10 md:py-14 bg-white',
    muted: 'py-16 md:py-20 lg:py-24 bg-[#F8F6F3]',
    brand: 'py-16 md:py-20 lg:py-24 bg-[#7A5B4C] text-white'
  }[variant];

  return (
    <section id={id} className={`relative w-full ${variantStyles} ${className}`}>
      {children}
    </section>
  );
}
