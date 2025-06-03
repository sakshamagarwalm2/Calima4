'use client';

import Herosection from '@/components/Herosection';
import RevealAnimation from '@/components/RevealAnimation';
import Section2 from '@/components/Section2';

export default function Home() {
  return (
    <RevealAnimation>
      <Herosection/>
      <Section2/>
    </RevealAnimation>
  );
}
