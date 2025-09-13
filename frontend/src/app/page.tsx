import  {Header } from "@/components/Header.jsx";
import { Footer } from "@/components/Footer.jsx";
import HomePage from "@/components/homepage/page";
// import Main from "@/components/Main";

export default function Home() {
  return (
    <main className="text-gray-900 text-base not-italic normal-nums font-normal accent-auto bg-white box-border caret-transparent block tracking-[0.15008px] leading-6 list-outside list-disc min-h-[stretch] min-w-[3.75px] text-start indent-[0px] normal-case visible border-separate font-aktiv_grotesk md:min-w-[12.8px]">
      <Header />
      {/* <Main /> */}
      <HomePage />
      <Footer />
      <div className="absolute box-border caret-transparent block"></div>
    </main>
  );
}
