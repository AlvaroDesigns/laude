import type { LegalDocument as LegalDocumentType } from '@/data/legalContent';
import type { ReactNode } from 'react';

export function LegalDocument({ document, children }: { document: LegalDocumentType; children?: ReactNode }) {
  return (
    <div className="space-y-5 pt-20 sm:pt-24 pb-4 sm:pb-5">
      <section className="mx-4 sm:mx-5 bg-[#f5f4f2] rounded-[25px] px-6 py-12 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
        <article className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.2em] font-medium text-[#8F8C7F]">Información legal</p>
          <h1 className="mt-4 font-editorial text-4xl sm:text-5xl lg:text-6xl text-stone-900 font-normal leading-tight">
            {document.title}
          </h1>
          <p className="mt-5 text-base sm:text-lg leading-relaxed font-light text-stone-600 max-w-2xl">
            {document.summary}
          </p>
          <div className="mt-12 space-y-10">
            {document.sections.map((section) => (
              <section key={section.heading} className="border-t border-stone-200 pt-8">
                <h2 className="text-xl sm:text-2xl font-medium text-stone-900">{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4 text-sm sm:text-base leading-relaxed font-light text-stone-600">
                    {paragraph}
                  </p>
                ))}
                {section.items && (
                  <ul className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed font-light text-stone-600">
                    {section.items.map((item) => (
                      <li key={item} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B2AFA0]" />{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
          {children && <div className="mt-12"><div className="border-t border-stone-200 pt-8">{children}</div></div>}
        </article>
      </section>
    </div>
  );
}
