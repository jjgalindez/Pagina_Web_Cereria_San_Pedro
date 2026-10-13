// app/page.tsx
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '../components/sections/HeroSection';
import ProcessSection from '@/components/sections/ProcessSection';
import CollectionSection from '@/components/sections/CollectionSection';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
      <ProcessSection />
      <CollectionSection />
    </main>
  );
}
