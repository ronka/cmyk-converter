import { Header } from "@/components/header";
import { ColorConverter } from "@/components/color-converter";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container max-w-5xl mx-auto px-4 py-8">
        <ColorConverter />
      </main>
      <Footer />
    </div>
  );
}
