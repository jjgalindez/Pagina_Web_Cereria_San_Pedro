// app/page.tsx
import Header from "@/components/layout/Header";
import UploadImages from "@/components/UploadImages";
import Image from "next/image";
import HeroSection from '../components/sections/HeroSection';

export default function Home() {
  return (
    <main className="">
      <HeroSection />

      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <UploadImages />
      </div>
    </main>
  );
}
