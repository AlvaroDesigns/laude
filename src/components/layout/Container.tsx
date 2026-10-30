import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'default' | 'narrow' | 'wide' | 'full';
  className?: string;
  id?: string;
}

export function Container({
  children,
  size = 'default',
  className = '',
  id
}: ContainerProps) {
  const maxWidthClass = {
    narrow: 'max-w-4xl',      // 896px - Lectura, blogs, textos legales
    default: 'max-w-7xl',     // 1280px - Estándar para páginas y grids
    wide: 'max-w-[1440px]',   // 1440px - Sliders, galerías y vistas panorámicas
    full: 'max-w-full'        // 100%
  }[size];

  // Gutter estandarizado: px-4 (16px móvil) | sm:px-6 (24px tablet) | lg:px-8 (32px desktop)
  return (
    <div id={id} className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
}
