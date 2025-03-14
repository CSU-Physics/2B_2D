"use client"
import { FaHome } from "react-icons/fa";
import header from "./Assets/2B_2D.jpeg";
import fig from "./Assets/fig.png"
import photo_1 from "./Assets/Hydrogen_2D_WF.png"
import photo_2 from "./Assets/Deuteron_MT_model_I_II.png"
import photo_3 from "./Assets/Deuteron_WF_MT_a_r.png"
import photo_4 from "./Assets/Deuteron_WF_MT_a.png"
import photo_5 from "./Assets/Exciton_V_q.png"
import photo_6 from "./Assets/Exciton_WF_RK_r.png"
import photo_7 from "./Assets/Exciton_medium.png"
import { useEffect } from "react";

import Table_1 from "./Assets/Table_1.png"
import Table_2 from "./Assets/Table_2.png"
import Table_3 from "./Assets/Table_3.png"
import Table_4 from "./Assets/Table_4.png"
import Table_5 from "./Assets/Table_5.png"
import Table_6 from "./Assets/Table_6.png"
import Table_7 from "./Assets/Table_7.png"
import Table_8 from "./Assets/Table_8.png"


import Image from "next/image";
import Script from "next/script";


export default function Home() {
  // useEffect(() => {
  //   // Delete the cookie on startup
  //   document.cookie = 'userSession=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;';
  //   console.log('Cookie deleted on startup');
  // }, []);
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
        <section className={"mt-4 my-4 md:my2"} >
          <div className="flex flex-row p-0 items-center md:px-8 lg:px-12" >
            {/* <a className="" target="" href={"https://csu-physics.github.io/"} >
              <FaArrowLeft size={60} className="w-[45px] h-[35px] " />
            </a> */}
            <h1 className=" text-xl sm:text-2xl font-bold" >Quantum Two-Body Bound States in Two Dimensions: Analytical and Numerical Perspectives</h1>
          </div>
          <div className="leading-6 md:px-8 lg:px-12 py-2" >
            Welcome to our interactive GitHub
            -
            hosted website, dedicated to deepening your
            understanding of quantum two
            -
            body bound states in two
            -
            dimensional semiconductor
            materials. Designed primarily for undergraduate students with a basic foundation
            in
            quantum physics, this platform combines theoretical insights with hands
            -
            on
            computational training.
            Our theoretical modules introduce quantum mechanics and provide an in
            -
            depth
            exploration of the Schrödinger equation, focusing on its application to quant
            um two
            -
            body
            bound states. We also examine the Lippmann
            -
            Schwinger equation in both momentum and
            configuration spaces, supported by case studies
            -
            including the hydrogen atom, deuteron,
            and exciton
            -
            all in two dimensions.
            Complementing the theory, our interact
            ive Python Jupyter Notebooks offer practical
            implementations of the Lippmann
            -
            Schwinger equation. Detailed case studies allow you to
            analyze a hydrogen atom using the Coulomb potential, a deuteron using the Malfliet
            -
            Tjon
            potential, and an exciton using the
            Rytova
            -
            Keldysh potential. Enjoy exploring and learning
            through this comprehensive, hands
            -
            on resource!
          </div>
        </section>
        {/* Transport_Equation */}
        <section className="px-1 md:px-14 lg:px-28 my-4" >
          <h2 className=" text-xl font-bold" >Lippmann–Schwinger Equation for 2B Bound States in 2D</h2>

          <div>
            <p>The study of bound states in a two-body (2B) system, consisting of
              two particles with reduced mass <span
                class="math inline">\(\mu\)</span>, begins with the Schrödinger
              equation. This equation, which governs the quantum behavior of the
              system, is expressed as:

              <span class="math display">\[(H_0+V)|\Psi
                \rangle = E|\Psi\rangle,\]
              </span>


              where <span
                class="math inline">\(H_0\)</span> represents the free Hamiltonian,
              <span class="math inline">\(V\)</span> denotes the interaction potential
              between the two particles, <span class="math inline">\(E\)</span> is the
              binding energy of the 2B system, and <span
                class="math inline">\(|\Psi\rangle\)</span> is the wavefunction
              describing the bound state of the system.</p>
            <p>Rearranging the Schrödinger equation, one obtains the
              Lippmann-Schwinger (LS) equation, a powerful framework for solving
              scattering and bound state problems in quantum mechanics:
              <span class="math display">\[|\Psi\rangle = {`\\frac{1}{E - H_0}`} V
                |\Psi\rangle.\]</span>

              This formulation explicitly expresses the
              bound-state wavefunction <span
                class="math inline">\(|\Psi\rangle\)</span> as an iterative solution
              dependent on the interaction potential <span
                class="math inline">\(V\)</span> and the free Hamiltonian <span
                  class="math inline">\(H_0\)</span>.</p>

            <p>In momentum space, the projection of the LS equation takes the form:
              <span class="math display">
                \[\begin{`{aligned}`}
                \psi ({`{\\bf p}`}) = \frac{1}{`{E - \\dfrac{p ^ 2}{2 \\mu}}`}
                \int_{0}^{`{\\infty}`} dp&#39; \, p&#39;
                \int_{0}^{`{2\\pi}`} d\phi&#39; \,
                V({`{\\bf p}`}, {`{\\bf p}`}&#39;) \psi({`{\\bf p}`}&#39;)
                \label{`{eq.LS_vector}`},
                \end{`{aligned}`}\]
              </span>
              where <span class="math inline">\(\psi({`{\\bf p}`})\)</span> is the momentum-space wavefunction, and <span
                class="math inline">\(V({`{\\bf p}`}, {`{\\bf p}`})\)</span> represents the
              interaction potential in momentum space. Here, the completeness relation
              of the 2B momentum basis states is used:
              <span
                class="math display">\[\begin{`{aligned}`}
                \int d^2p \, \vert {`{\\bf p}`}\rangle \langle {`{\\bf p}`}\vert \equiv
                \int_0^\infty dp \, p \int_0^{`{2\pi}`} d\phi \, \vert {`{\\bf p}`}\rangle
                \langle {`{\\bf p}`}\vert = 1.
                \end{`{aligned}`}\]</span>
            </p>
            <p>To simplify the problem further, a Partial Wave (PW) representation
              is often employed, where the angular dependence of the wave function is
              expanded in terms of angular momentum eigenstates. This reduces the 2D
              integral equation into a simpler radial form:

              <span
                class="math display">\[\begin{`{aligned}`}
                \psi_m (p) = \frac{1}{`{E - \\frac{p ^ 2}{2\\mu}}`} \int_{0}^{`{\\infty}`} dp&#39; \,
                p&#39; \,
                V_m (p, p&#39;) \, \psi_m (p&#39;),
                \label{`{eq.LS_pw}`}
                \end{`{aligned}`}\]
              </span>

              where the potential in the PW representation,
              <span class="math inline">\(V_m(p, p&#39;)\)</span>, is obtained through
              the following integral: <span class="math display">\[\begin{`{aligned}`}
                V_m(p, p&#39;) = \int_0^{`{2\pi}`} d\phi&#39; \, V(p, p&#39;, \phi&#39;)
                \cos(m \phi&#39;) \equiv
                \int_0^\infty dr \, J_m(pr) V(r) J_m(p&#39;r).
                \end{`{aligned}`}\]</span>

              Here, <span class="math inline">\(J_m(x)\)</span>
              denotes the <span class="math inline">\(m\)</span>th order Bessel
              function of the first kind, which arises naturally in 2D problems due to
              the circular symmetry of the system.
            </p>
            <div>
              <p>The geometry of the problem is illustrated in Fig. <a
                href="#Fig_2B_coordinate" data-reference-type="ref"
                data-reference="Fig_2B_coordinate">[Fig_2B_coordinate]</a>, where the
                relative momenta <span class="math inline">\({`{\\bf p}`}\)</span> and <span class="math inline">\({`{\\bf p}`}&#39;\)</span> are described in polar coordinates. The angle
                <span class="math inline">\(\phi&#39;\)</span> corresponds to the azimuthal angle between the vectors <span class="math inline">\({`{\\bf p}`}\)</span> and <span class="math inline">\({`{\\bf p}`}&#39;\)</span>:

              </p>
              <div className=" flex justify-center" >
                <Image id="Fig_2B_coordinate" src={fig} className="w-[250px] my-2 justify-center " alt={"#"} />
              </div>
            </div>


            <p>The PW representation significantly simplifies solving the LS
              equation by reducing the dimensionality of the integral and isolating
              contributions from each angular momentum channel <span
                class="math inline">\(m\)</span>. This method is particularly effective
              in analyzing systems with rotational symmetry, such as those encountered
              in 2D quantum mechanics.
            </p>

            <p>In summary, the Lippmann-Schwinger equation provides a robust
              framework for describing 2B bound states in 2D systems. The use of the
              PW representation and appropriate symmetry considerations enables an
              efficient solution of the integral equation, shedding light on the
              nature of the interactions and the resulting bound states.
            </p>

            <h1 id=" numerical-implementation" className="text-xl font-bold" >Numerical Implementation</h1>
            <p>To numerically solve the Lippmann-Schwinger equation <a
              href="#eq.LS_pw" data-reference-type="eqref"
              data-reference="eq.LS_pw">[eq.LS_pw]</a> for 2B bound states in 2D,
              represented in the Partial Wave (PW) framework, the integral equation
              should be transformed into a discretized form that can be solved
              iteratively or through matrix diagonalization.</p>
            <p id="eq.LS_pw" >To efficiently handle the integrals, variable transformations are
              introduced to map the infinite domains of momentum <span
                class="math inline">\(p\)</span>, spatial coordinate <span
                  class="math inline">\(r\)</span>, and angle <span
                    class="math inline">\(\phi\)</span> onto finite intervals. The
              transformations are defined as: <span class="math display">\[p =
                \frac{`{1 + x}{1 - x}`}, \quad r = \frac{`{1 + x}{1 - x}`}, \quad \phi = \pi (1+x),
                \quad x \in [-1, 1],\] </span> where <span
                  class="math inline">\(x\)</span> is a variable spanning the interval
              <span class="math inline">\([-1, 1]\)</span>, suitable for integration
              using Gaussian-Legendre quadrature. The discretized form of the integral
              equation for the wave function <span
                class="math inline">\(\psi_m\)</span> becomes an eigenvalue problem:
              <span class="math display">\[\lambda \cdot \psi_m = {`{\\cal K}`}(E) \,
                \psi_m,\]</span> where <span class="math inline">\({`{\\cal K}`}(E)\)</span>
              represents the integral kernel operator dependent on the binding energy
              <span class="math inline">\(E\)</span>. The eigenvalue <span
                class="math inline">\(\lambda\)</span> is used as a criterion to verify
              the solution.</p>
            <h3 className="text-lg font-bold" id="determining-the-binding-energy">Determining
              the Binding Energy</h3>

            <p>The binding energy <span class="math inline">\(E\)</span> is
              determined by solving for the eigenvalue <span
                class="math inline">\(\lambda = 1\)</span>. This involves iteratively
              searching over initial guesses for <span
                class="math inline">\(E\)</span> until convergence is achieved. A
              tolerance of <span class="math inline">\(10^{-6}\)</span> is set for the
              eigenvalue condition, ensuring high accuracy in the computed energy. The
              iterative process can be summarized as follows:</p>

            <ol className="list-decimal" >
              <li><p>Choose an initial guess for the binding energy <span
                class="math inline">\(E\)</span>.</p></li>
              <li><p>Construct the kernel <span class="math inline">\({`{\\cal
            K}`}(E)\)</span> based on the chosen energy.</p></li>
              <li><p>Solve the eigenvalue problem <span class="math inline">\(\lambda
                \cdot \psi_m = {`{\\cal K}`}(E) \psi_m\)</span> to find <span
                  class="math inline">\(\lambda\)</span> and the corresponding wave
                function <span class="math inline">\(\psi_m\)</span>.</p></li>
              <li><p>Adjust <span class="math inline">\(E\)</span> iteratively until
                <span class="math inline">\(\lambda\)</span> converges to 1 within the
                specified tolerance.</p></li>
            </ol>

            <p>The kernel <span class="math inline">\({`{\cal K}`}(E)\)</span> is
              diagonalized at each step, which allows for the extraction of both the
              eigenvalue <span class="math inline">\(\lambda\)</span> and the wave
              function <span class="math inline">\(\psi_m\)</span>. Efficient
              numerical techniques such as matrix diagonalization, implemented through
              libraries like LAPACK, or iterative solvers like the Lanczos algorithm,
              can be employed for this purpose.
            </p>



            <h1 className=" text-xl sm:text-2xl font-bold" id="numerical-results">Numerical Results</h1>
            <h2 className=" text-xl font-bold" id="pedagogical-and-numerical-test-hydrogen-atom-in-2d">Pedagogical
              and Numerical Test: Hydrogen Atom in 2D</h2>
            <p>The study of the hydrogen atom in two dimensions (2D) serves as a
              pedagogical example for understanding bound states and wave functions in
              quantum mechanics. Unlike its three-dimensional counterpart, the 2D
              hydrogen atom exhibits unique energy quantization and wave function
              characteristics due to the reduced spatial dimensions. This section
              explores the analytical and numerical solutions for the system.</p>
            <ul className=" list-disc" >
              <li><p>Particle Properties: The mass of the particle is normalized to
                <span class="math inline">\(m = 1\)</span> for simplicity, allowing
                the
                focus to remain on the interaction and quantum behavior.</p></li>
              <li><p>Two-Body Potential: The interaction potential in real space is
                given by: <span class="math display">\[V(r) = -\dfrac{2}{`{r}`},\]</span>
                which translates to a momentum-space representation as:
                <span class="math display">{`\\[V({\\bf p}, {\\bf p}') = \\dfrac{-1}{\\pi \\vert {\\bf q}\\vert}, \\quad {\\bf q}= {\\bf p}- {\\bf p}'.\\]`}</span>

                This
                form
                of the potential reflects the reduced dimensionality and ensures
                proper
                Coulomb-like behavior in 2D.</p></li>
              <li><p>Bound State Energy Levels: The energy levels for the two-body
                (2B) bound states in 2D are derived analytically and are given by:
                <span
                  class="math display">\[E_n = -\dfrac{1}{`{\\left(n + 1/2\\right)^2}`},
                  \quad n
                  = 0, 1, 2, \ldots\]</span> These quantized energy levels highlight
                the
                discrete nature of bound states in this system, with the energy
                becoming
                less negative as the quantum number <span
                  class="math inline">\(n\)</span> increases.</p></li>
            </ul>

            <div id="table:BE_inverse_q">
              <p>
                Comparison of analytical <span
                  class="math inline">\(E_{"{exact}"}\)</span>) and numerical (<span
                    class="math inline">\(E_{"{Num}"}\)</span>) 2B binding energies for
                Hydrogen
                atom in 2D for quantum number <span
                  class="math inline">\(m=0\)</span>.
                The calculations are performed with 500 mesh points for the magnitude
                of
                relative momenta and 40 mesh points for angle variables.
              </p>
              {/* Table 1 */}

              {/* <div className="flex justify-center" >
                <Image src={Table_1} className="w-3/4 my-2 justify-center " alt={"#"} />
              </div> */}

              <div className="flex justify-center" >
                <table className="w-[605px] px-2 py-6" >

                  <thead>
                    <tr class="header">
                      <th styles={{ textAlign: 'left' }}>n</th>
                      <th styles={{ textAlign: 'center' }}></th>
                      <th styles={{ textAlign: 'center' }}><span
                        class="math inline">\(E_{"{exact}"}\)</span><span class="citation"
                          data-cites="parfitt2002two"></span></th>
                      <th styles={{ textAlign: 'center' }}></th>
                      <th styles={{ textAlign: 'center' }}><span
                        class="math inline">\(E_{"{Num}"}\)</span></th>
                      <th styles={{ textAlign: 'center' }}></th>
                      <th styles={{ textAlign: 'center' }}><span
                        class="math inline">\(\left(\dfrac{"{E_{exact} - E_{num}}{E_{exact}}"}
                        \right) \times 100 \%\)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td styles={{ textAlign: 'left' }}>0</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-4.00000</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-3.99928</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>0.01800</td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: 'left' }}>1</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-0.44444</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-0.44441</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>0.00700</td>
                    </tr>
                    <tr class="odd">
                      <td styles={{ textAlign: 'left' }}>2</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-0.16000</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-0.16017</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>0.10625</td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: 'left' }}>3</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-0.08163</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>-0.08193</td>
                      <td styles={{ textAlign: 'center' }}></td>
                      <td styles={{ textAlign: 'center' }}>0.36751</td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>
            <div class="flex justify-center ">
              <p><Image src={photo_1} className="w-[500px] my-2 justify-center " alt={"#"} />
                <span
                  id="fig:WF_invers_q" label="fig:WF_invers_q"></span></p>
            </div>

            <div className="my-10" >
              <iframe src="https://csu-physics.github.io/Pedagogical_-_Numerical_Test-Hydrogn_Atom-in-2D/lab/index.html?enableMemoryStorage=1" width="100%" height="650px" />
            </div>
            <div>
              <h2 className=" text-xl font-bold" id="pedagogical-and-numerical-test-hydrogen-atom-in-2d">Pedagogical and
                Numerical Test: Deuteron in 2D</h2>
              <p>This section details the numerical simulation of a deuteron (the
                bound state of one proton and one neutron) in two dimensions using the
                Malfliet-Tjon (MT) potential, highlighting the adaptations made for
                reduced dimensions and their implications on binding energy
                calculations. The simulation parameters are specifically adjusted to
                reflect realistic physical interactions within a 2D framework.</p>
              <ul>
                <li><p><strong>The mass of proton and neutron</strong> is given as <span
                  class="math inline">\(\hbar^2/m = 41.47\)</span> MeV fm<span
                    class="math inline">\(^2\)</span>.</p></li>
                <li><p><strong>Malfliet-Tjon potential in configuration space</strong>:
                  The potential is expressed as a sum of attractive and repulsive Yukawa
                  interactions (exponential terms scaled by distance <span
                    class="math inline">\(r\)</span>): <span class="math display">\[V(r)
                      =
                      V_r \frac{`{e ^ {-\\mu_r r}}`}{`{r}`} + V_a \frac{`{e ^ {-\\mu_a r}}{r}`},\]</span>
                  where <span class="math inline">\(V_r\)</span> and <span
                    class="math inline">\(V_a\)</span> are the strengths of the
                  repulsive
                  and attractive components, respectively, and <span
                    class="math inline">\(\mu_r\)</span> and <span
                      class="math inline">\(\mu_a\)</span> are their corresponding range
                  parameters.</p></li>
                <li><p><strong>Malfliet-Tjon potential in momentum space</strong>: In
                  momentum space, the potential transforms to: <span
                    class="math display">\[V({`{\\bf p}`}, {`{\\bf p}`}&#39;) = \frac{1}{`{2\\pi}`}
                    \left(\frac{`{V_r}{\\sqrt{q ^ 2 + \\mu_r^2}}`} + \frac{`{V_a}{\\sqrt{q ^ 2 + \\mu_a^2}}`} \right),
                    \quad q = | {`{\\bf p}`}- {`{\\bf p}`}&#39; |,\]</span></p></li>
              </ul>

              {/* Table 2 */}
              {/* <div className="flex justify-center" >
                <Image src={Table_2} className="w-3/4 my-2 justify-center " alt={"#"} />
              </div> */}
              <div id="table:MT--I-parameters" className="flex justify-center">
                <table className="w-[700px] px-2 py-6" >
                  <caption>Parameters of two models of MT potential used in our
                    calculations. Hadi check parameters!</caption>
                  <thead>
                    <tr class="header">
                      <th styles={{ textAlign: "center" }}>MT-model</th>
                      <th styles={{ textAlign: "center" }}><span class="math inline">\(V_a \,
                        \text{`{(MeV fm)}`}\)</span></th>
                      <th styles={{ textAlign: "center" }}><span class="math inline">\(\mu_a \,
                        (\text{`{fm}^{-1})`}\)</span></th>
                      <th styles={{ textAlign: "center" }}><span class="math inline">\(V_r \,
                        \text{`{(MeV fm)}`}\)</span></th>
                      <th styles={{ textAlign: "center" }}><span class="math inline">\(\mu_r \,
                        (\text{`{fm}^{-1}`})\)</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td styles={{ textAlign: "center" }}>Model-1</td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(-600.00\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(1.550\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(1438.7228\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(3.21\)</span></td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: "center" }}>Model-2</td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(-600.00\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(1.550\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(0\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(0\)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div class="flex justify-center">
                <p><Image src={photo_2} className="w-[500px] my-2 justify-center " alt={"#"} />
                </p>
              </div>
              <p>Calculated deuteron binding energy in 2D for both models of the
                MT Potential. These calculations utilized 200 mesh points for the
                magnitude of two-body relative momenta and 101 mesh points for angular
                variables.
              </p>

              {/* Table 3*/}
              {/* <div className="flex justify-center" >
                <Image src={Table_3} className="w-1/3 my-2 justify-center " alt={"#"} />
              </div> */}
              <div id="Deuteron_bidning_energy" className="flex justify-center" >
                <table className="w-1/2 px-2 py-6" >
                  <thead>
                    <tr class="header">
                      <th styles={{ textAlign: "center" }}><span
                        class="math inline">\(E_{`{d}`}\)</span> (MeV)</th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}><span
                        class="math inline">\(E^{(0)}_{`{d}`}\)</span> (MeV)</th>
                      <th styles={{ textAlign: "center" }}><span
                        class="math inline">\(E^{(1)}_{`{d}`}\)</span> (MeV)</th>
                      <th styles={{ textAlign: "center" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td styles={{ textAlign: "center" }}>Model-1</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td colSpan="2" styles={{ textAlign: "center" }}>Model-2</td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(-6.246\)</span></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(-7806\)</span></td>
                      <td styles={{ textAlign: "center" }}><span
                        class="math inline">\(-312.4\)</span></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="flex flex-row justify-center" >
                <Image src={photo_3} className="w-[500px] my-2 justify-center " alt={"#"} />
                <Image src={photo_4} className="w-[500px] my-2 justify-center " alt={"#"} />
              </div>
              <div className="my-10" >
                <iframe src="https://csu-physics.github.io/Pedagogical-and-Numerical-Test-Deuteron-in-2D/lab/index.html?enableMemoryStorage=0" width="100%" height="650px" />
              </div>
            </div>

            <div>
              <h2 className=" text-xl font-bold" id="excitons-electron-hole-bound-states-in-2d-materials">Excitons:
                Electron-Hole Bound States in 2D Materials</h2>
              <p>Excitons are quasiparticles formed by the binding of an electron and
                a hole through Coulombic attraction, playing a pivotal role in the
                optical properties of two-dimensional (2D) materials. These materials
                exhibit enhanced quantum confinement effects and reduced dimensionality,
                leading to distinct excitonic behaviors, such as increased binding
                energies and modified spectral features compared to their
                three-dimensional counterparts. The primary focus of this section is the
                numerical solution of the Lippmann-Schwinger equation for excitons in
                momentum space. This analytical approach allows for a comprehensive
                examination of the binding and spectral properties of excitons in 2D
                systems. By solving this integral equation numerically, we gain insights
                into the interaction dynamics and energy distributions that define
                electron-hole pairs in these materials, which is essential for
                predicting exciton behavior in practical applications and developing
                advanced materials with specific optical properties. Particular emphasis
                is placed on the modified potential models, including the Rytova-Keldysh
                potential, which addresses the environmental screening effects inherent
                to 2D systems. A thorough understanding of these bound states is crucial
                for exploiting the optoelectronic properties of 2D materials across a
                variety of applications, from photovoltaics and light-emitting diodes to
                quantum computing and biomedical imaging.</p>
              <h3 className="text-lg font-bold" id="the-rytova-keldysh-potential">The Rytova-Keldysh potential</h3>
              <p>The Rytova-Keldysh (RK) potential is fundamental in modeling exciton
                behaviors in 2D materials. This model captures the nuanced electron-hole
                interactions more accurately in such confined systems compared to
                traditional Coulombic models due to the environmental screening
                effects.</p>
              <ul>
                <li>
                  <p>
                    <strong>The RK potential in configuration space</strong> defined
                    as <span class="math display">\[V(r) = -\dfrac{`{\\alpha \\hbar c \\pi}`}{`{2r_0 \\kappa}`}
                      \left[H_0\left(\dfrac{`{r}`}{`{r_0}`}\right)-Y_0\left(\dfrac{`{r}`}{`{r_0}`}\right)\right],\]</span>
                    where <span class="math inline">\(H_0\)</span> and <span
                      class="math inline">\(Y_0\)</span> are the Struve function and
                    Bessel
                    function of the second kind, respectively.</p></li>
                <li><p><strong>The RK potential in momentum space:</strong> <span
                  class="math display">\[V({`{\\bf p}`},{`{\\bf p}`}&#39;) = - \dfrac{1}{`{4\\pi^2}`}
                  \left( \dfrac{1}{`{4\\pi \\epsilon_0 \\kappa}`} \dfrac{`{2\\pi e^2}`}{`{q(1 + r_0 q /\\kappa )}`}\right), \quad q = | {`{\\bf p}`}- {`{\\bf p}`}&#39;|.\]</span></p></li>
                <li><p><strong>Key parameters:</strong></p>
                  <ul className=" list-disc">
                    <li><p><span class="math inline">\(r\)</span>: electron-hole relative
                      distance.</p></li>
                    <li><p><span class="math inline">\(r_0\)</span>: screening length,
                      indicative of the medium.</p></li>
                    <li><p><span class="math inline">\(\kappa = \dfrac{`{\\epsilon_1 + \\epsilon_2}`}{2}\)</span>: average environmental dielectric
                      constant.</p></li>
                    <li><p><span class="math inline">\(\epsilon_0 / e^2 = \dfrac{1}{`{4\\pi \\alpha}`} \cdot \dfrac{1}{`{\\hbar c}`}\)</span>: a constant converting
                      units
                      between the fine structure constant and energy scales.</p></li>
                    <li><p><span class="math inline">\(\alpha = 137.035999084\)</span>:
                      fine
                      structure constant.</p></li>
                    <li><p><span class="math inline">\(\hbar c = 1973.269804\)</span>
                      eV<span class="math inline">\(\cdot\)</span>Å.</p></li>
                    <li><p><span class="math inline">\(m_{0} = 0.510998950\)</span> MeV:
                      electron rest mass.</p></li>
                  </ul></li>
              </ul>
              <div className="flex justify-center" >
                <p><Image src={photo_7} className="w-[500px] my-2 justify-center " alt={"#"} /></p>

              </div>

              <p>The parameters of electron-hole RK interactions in transition
                metal dichalcogenides (TMDs).

              </p>


              {/* Table 4*/}
              {/* <div className="flex justify-center" >
                <Image src={Table_4} className="w-3/4 my-2 justify-center " alt={"#"} />
              </div> */}
              <div className="flex justify-center" >
                <table className="w-[700px] px-2 py-6" >

                  <thead>
                    <tr class="header">
                      <th styles={{ textAlign: "left" }}>Substance</th>
                      <th styles={{ textAlign: "center" }}><span class="math inline">\(m_e = m_h
                        \
                        (m_0)\)</span></th>
                      <th styles={{ textAlign: "center" }}><span
                        class="math inline">\(r_0\)</span>
                        (Å)</th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td styles={{ textAlign: "left" }}>MoS<span class="math inline">\(_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>0.50</td>
                      <td styles={{ textAlign: "center" }}>41.47</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: "left" }}>MoSe<span
                        class="math inline">\(_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>0.54</td>
                      <td styles={{ textAlign: "center" }}>51.71</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="odd">
                      <td styles={{ textAlign: "left" }}>WS<span
                        class="math inline">\(_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>0.32</td>
                      <td styles={{ textAlign: "center" }}>37.89</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: "left" }}>WSe<span
                        class="math inline">\(_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>0.34</td>
                      <td styles={{ textAlign: "center" }}>45.11</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold" id="exciton-binding-energy">Exciton Binding Energy</h3>
              <p>This section details the binding energies derived from various
                computational methods and experimental findings, highlighting their
                variances and potential sources.
              </p>

              {/* Table 5*/}
              {/* <div className="flex justify-center" >
                <Image src={Table_5} className="w-3/4 my-2 justify-center " alt={"#"} />
              </div> */}
              <div className="grid content-center justify-items-center w-full " >
                <table className="w-1/2 " >
                  <caption>Reported exciton binding energies (meV) for different TMD
                    materials.</caption>
                  <thead>
                    <tr class="header">
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}>FEM <span class="citation"
                        data-cites="van2017excitons"></span></th>
                      <th styles={{ textAlign: "center" }}>MC <span class="citation"
                        data-cites="mayers2015binding"></span></th>
                      <th styles={{ textAlign: "center" }}>SV <span class="citation"
                        data-cites="kidd2016binding"></span></th>
                      <th styles={{ textAlign: "center" }}>DFT <span class="citation"
                        data-cites="kylanpaa2015binding"></span></th>
                      <th styles={{ textAlign: "center" }}>Exp. <span class="citation"
                        data-cites="klots2014probing chernikov2014exciton ugeda2014giant ye2014probing he2014tightly mai2014many"></span></th>
                      <th styles={{ textAlign: "center" }}>Present</th>
                      <th styles={{ textAlign: "center" }}></th>
                      <th styles={{ textAlign: "center" }}></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="odd">
                      <td styles={{ textAlign: "center" }}>Mo<span
                        class="math inline">\(\text{`{S}`}_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>559.5</td>
                      <td styles={{ textAlign: "center" }}>551.4</td>
                      <td styles={{ textAlign: "center" }}>555.0</td>
                      <td styles={{ textAlign: "center" }}>526.5</td>
                      <td styles={{ textAlign: "center" }}>500, 570</td>
                      <td styles={{ textAlign: "center" }}>567.1</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: "center" }}>MoSe<span
                        class="math inline">\(_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>483.8</td>
                      <td styles={{ textAlign: "center" }}>477.8</td>
                      <td styles={{ textAlign: "center" }}>480.4</td>
                      <td styles={{ textAlign: "center" }}>476.9</td>
                      <td styles={{ textAlign: "center" }}>550</td>
                      <td styles={{ textAlign: "center" }}>492.2</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="odd">
                      <td styles={{ textAlign: "center" }}>W<span
                        class="math inline">\(\text{`{S}`}_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>528.6</td>
                      <td styles={{ textAlign: "center" }}>519.1</td>
                      <td styles={{ textAlign: "center" }}>523.5</td>
                      <td styles={{ textAlign: "center" }}>509.8</td>
                      <td styles={{ textAlign: "center" }}>320, 700</td>
                      <td styles={{ textAlign: "center" }}>534.7</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                    <tr class="even">
                      <td styles={{ textAlign: "center" }}>WSe<span
                        class="math inline">\(_2\)</span></td>
                      <td styles={{ textAlign: "center" }}>474.4</td>
                      <td styles={{ textAlign: "center" }}>466.7</td>
                      <td styles={{ textAlign: "center" }}>470.2</td>
                      <td styles={{ textAlign: "center" }}>456.4</td>
                      <td styles={{ textAlign: "center" }}>370</td>
                      <td styles={{ textAlign: "center" }}>481.2</td>
                      <td styles={{ textAlign: "center" }}></td>
                      <td styles={{ textAlign: "center" }}></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="my-10" >
                <iframe src="https://csu-physics.github.io/Excitons_2D/lab/index.html?enableMemoryStorage=1" width="100%" height="650px" />
              </div>
            </div>

          </div>
        </section>
      </div>


    </main>
  );
}
