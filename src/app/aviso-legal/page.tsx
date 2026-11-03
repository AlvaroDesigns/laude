import React from 'react';
import type { Metadata } from 'next';
import { LegalDocument } from '@/components/legal/LegalDocument';
import { LEGAL_DOCUMENTS } from '@/data/legalContent';

export const metadata: Metadata = {
  title: 'Aviso Legal | Fisiolaude Palma',
  robots: { index: false, follow: true }
};

export default function Page() {
  return <LegalDocument document={LEGAL_DOCUMENTS.legalNotice} />;
}
