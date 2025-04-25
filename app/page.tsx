import { Header, Main, Footer } from "@/lib/imports";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem]">
       <Main />
      </div>
      <Footer />
    </main>
  );
}
