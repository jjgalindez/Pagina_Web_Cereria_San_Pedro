// app/page.tsx
import FeaturesSection from '@/components/sections/FeaturesSection';
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <FeaturesSection />
    </main>
  );
}
