import { 
  Header, 
  Main, 
  About,
  Footer,
} 
from "@/lib/imports";

export default function Home() {
  return (
    <main className="mx-[1rem] md:mx-[3.75rem] lg:mx-[6.25rem] xl:mx-[7.5rem]">
      <Header/> 
      <Main/>
      <About/>
    </main>
  );
}
