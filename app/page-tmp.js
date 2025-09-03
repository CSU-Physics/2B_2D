"use client"
import { FaHome } from "react-icons/fa";
import header from "./Assets/2B_2D.jpeg";
import fig from "./Assets/fig.png"
import photo_1 from "./Assets/Hydrogen_2D_WF.png"
import photo_2 from "./Assets/Deuteron_MT_model_I_II.png"
import photo_3 from "./Assets/Deuteron_WF_MT_a_r.png"
import photo_4 from "./Assets/Deuteron_WF_MT_a.png"
import photo_7 from "./Assets/Exciton_medium.png"
import { useEffect } from "react";
import Image from "next/image";
import Script from "next/script";
import { BlockMath, InlineMath } from "react-katex";

const Intro = () => {
  return (
    <div className={"mt-4 my-4 md:my2"} >
      <div className="flex flex-row p-0 items-center md:px-8 lg:px-12" >
        <h1 className=" text-xl sm:text-2xl" >Quantum Two-Body Bound States in Two Dimensions: Analytical and Numerical Perspectives</h1>
      </div>
      <div className="leading-6 md:px-8 lg:px-12 py-2" >
        This website provides an open, browser-based platform for solving the Lippmann–Schwinger (LS) equation in two dimensions. It delivers executable Jupyter notebooks that take users from parameter setup and Gauss–Legendre discretization to numerical solution, binding-energy evaluation,
        Hamiltonian-expectation checks, and wave-function visualization. Ready-to-run case studies—2D hydrogenic (Coulomb), deuteron (Malfliet–Tjon), and exciton (Rytova–Keldysh)—link compact theory to reproducible momentum-space computations. Hosted on GitHub Pages, it is free, zero-install, and open for community contributions.
      </div>

    </div>
  )
}

const LpS = () => {
  return (
    <div>
      <h2 className=" text-lg sm:text-xl" >Lippmann–Schwinger Equation for 2B Bound States in 2D</h2>
      <p>The starting point for a 2B bound state with reduced mass <span
        class="math inline">\(\mu\)</span> is the time-independent Schrödinger equation

        <span class="math display">\[(H_0+V)|\Psi
          \rangle = E|\Psi\rangle,\]
        </span>


        where <span
          class="math inline">\(H_0\)</span> represents the free Hamiltonian,
        <span class="math inline">\(V\)</span> is the interaction, <span class="math inline">\(E\) &lt; 0 </span>  is the
        binding energy, and <span
          class="math inline">\(|\Psi\rangle\)</span> is the corresponding bound state wave function. Rearranging the 
          Schrödinger equation gives the homogeneous LS equation for a bound state
          
          <span class="math display">\[|\Psi\rangle = {`\\frac{1}{E - H_0}`} V
                |\Psi\rangle.\]</span></p>

        
    </div>
  )
}

const NumImp = () => {
  return (
    <div></div>
  )
}

export default function Home() {
  return (
    <main className="bg-white" >

      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
        type="text/javascript"></Script>
      <div className="max-w-[1640px] mx-auto flex justify-between items-center px-6  mt-0 " >
        <div className="flex-1 h-[225px]" >
          <div className="w-12 " >
            <a className="" target="" href={"https://csu-physics.github.io/"} >
              <FaHome size={60} className="w-[45px] h-[30px] " />
            </a>
          </div>
        </div>
        <div className={"flex-4"} >
          <div className="flex flex-col items-center justify-center rounded-lg flex-1" >
            <Image src={header} className="w-[1250px] my-2 " alt={"#"} />
          </div>
        </div>
        <div className="flex-1" ></div>
      </div>



      <div className="p-2 px-8 py-0 h-[100%] flex flex-col justify-center md:px-20 mt-0 " >
        <Intro />
        <section className="px-1 md:px-14 lg:px-28 my-4" >
          <LpS />
        </section>


      </div>



    </main>
  );
}
