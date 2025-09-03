import Banner from "./Components/Banner";
import About from "./Pages/About";
import Cases from "./Pages/Cases";
import Theory from "./Pages/Theory";
import Script from "next/script";
import Guide from "./Pages/Guide";
export default function Home() {
  return (
    <main className="max-w-screen flex flex-col justify-between items-center  ">
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
        type="text/javascript"></Script>
      {/* <Banner /> */}
      <div  >

        <section className="px-1 md:px-14 lg:px-28 my-4" >
          <About />
          <Theory />
          <Cases />
        </section>

{/* <Guide/> */}
      </div>

    </main>
  );
}
