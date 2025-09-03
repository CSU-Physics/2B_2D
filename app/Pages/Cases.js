import Script from "next/script";
import Table_1 from "../Equations/Table_1.png"
import Table_2 from "../Equations/Table_2.png"
import Table_3 from "../Equations/Table_3.png"
import Table_4 from "../Equations/Table_4.png"
import Table_5 from "../Equations/Table_5.png"
import Table_6 from "../Equations/Table_6.png"
import Image from "next/image";
const Hydro = () => {
    return (
        <div id="Hydrogen" className='scroll-mt-20' >
            <h2 className=" text-lg sm:text-xl" >Hydrogenic atom in 2D</h2>
            <p>We begin with the 2D hydrogenic system, a well-established case that
                provides an ideal benchmark for testing the accuracy of our numerical
                method. In contrast to its three-dimensional analogue, the 2D system
                exhibits distinctive features in its energy spectrum and wave function
                behavior arising from the reduced dimensionality. In this section, we
                present both analytical and numerical treatments of the problem, working
                in natural units where <span className="math inline">\(\hbar c = e = m = 1\)
                </span>. The 2B potential energy between a nucleus of charge <span
                    className="math inline">\(Z\)</span> and a single electron in configuration
                space is given by <span className="math display">\[V(r) =
                    {`-\\dfrac{Z}{r}`},\]</span> which can be expressed in momentum space as
                <span className="math display">\[V({`{\\mathbf p}`}, {`\\mathbf p`}&#39;) =
                    {`\\dfrac{-Z}`}{`{2\\pi \\vert {\\mathbf q}\\vert}`}, \quad {`\\mathbf q`}= {`\\mathbf p`}-
                    {`{\\mathbf p}`}&#39;.\]</span>
                The analytical solutions of the LS integral
                equation for the 2B binding energy levels are given in Ref. <span
                    className="citation" data-cites="parfitt2002two"></span> <span
                        className="math display">\[E_{`{exact}`} = -{`\\dfrac{Z ^ 2 m}{4\\left(n + 1/2\\right)^2}`}, \quad n = 0, 1,
                    2, \ldots\]</span> The exact energy levels for 2D hydrogenic atoms offer
                a clear reference for comparison. Evaluating the agreement between our
                computed values and the known analytical results allows us to assess the
                reliability of the approach and identify potential issues at an early
                stage. Establishing this validation is essential before extending the
                method to more complex systems, such as excitons or deuterons. The
                results of this comparison are presented in Table 1, showing that our numerical
                values closely match the exact energy levels of the 2D hydrogenic atom.
                The relative errors are very small, less than 0.4% for the ground state
                and the first three excited states, demonstrating the accuracy and
                reliability of our method.
            </p>

            <div className="flex justify-center" >
                <Image src={Table_1} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <div className="my-10" >
                <iframe src="https://csu-physics.github.io/Hydrogn_2D.github.io/lab/index.html?enableMemoryStorage=0" width="100%" height="650px" />
            </div>
        </div >
    )
}
const Deutro = () => {
    return (
        <div id="Deuteron" className='scroll-mt-20' >
            <h2 className=" text-lg sm:text-xl" >Deuteron in 2D</h2>
            <p>
                This section presents the numerical simulation of the deuteron, the
                bound state of one proton and one neutron, in 2D using the MT potential,
                written as a sum of repulsive and attractive Yukawa terms, <span
                    className="math display">\[V(r) = V_r {`\\frac{e ^ {-\\mu_r r}}{r}`} + V_a
                    {`\\frac{e ^ {-\\mu_a r}}{r}`},\]</span> where <span
                        className="math inline">\(V_r\)</span> and <span
                            className="math inline">\(V_a\)</span> are the strengths of the repulsive
                and attractive components, respectively, and <span
                    className="math inline">\(\mu_r\)</span> and <span
                        className="math inline">\(\mu_a\)</span> are the corresponding range
                parameters. The potential transforms to momentum space as <span
                    className="math display">\[V({`\\mathbf p`}, {`\\mathbf p`}&#39;) = {`\\frac{1}{2\pi}`}
                    \left( {`\\frac{V_r}{\\sqrt{q ^ 2 + \\mu_r^2}}`} + {`\\frac{V_a}{\\sqrt{q ^ 2 + \\mu_a^2}}`} \right), \quad q = | {`\\mathbf p`}- {`\\mathbf p`}&#39; |.\]</span>
                The parameter sets for the two MT models used in our calculations are
                listed in Table and the corresponding momentum-space potentials <span
                    className="math inline">\(V(q)\)</span> are plotted in Fig. as functions of the momentum
                transfer <span className="math inline">\(q\)</span>.
            </p>
            <div className="flex justify-center" >
                <Image src={Table_2} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <p>In our calculations, we use the nucleon mass with <span
                className="math inline">\(\hbar^{2}/m = 41.47\ MeV \text{`·fm`}^2\)</span>. As
                shown in Table , the computed binding
                energies for the 2D deuteron differ markedly between the two MT models.
                This is expected: Model 1, which superposes repulsive and attractive
                Yukawa terms, supports only a single (ground) bound state, whereas Model
                2, which is purely attractive, supports two deeper bound states (ground
                and first excited). The corresponding momentum-space wave functions are
                shown in Fig.The left panel (Model
                1) displays a single ground-state wave function, <span
                    className="math inline">\(\psi(p)\)</span>, versus relative momentum <span
                        className="math inline">\(p\)</span>. The right panel (Model 2) presents two
                ground and excited bound states, labeled <span
                    className="math inline">\(n=0\)</span> and <span
                        className="math inline">\(n=1\)</span>.
            </p>
            <div className="flex justify-center" >
                <Image src={Table_3} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <div className="my-10" >
                <iframe src="https://csu-physics.github.io/Pedagogical-and-Numerical-Test-Deuteron-in-2D/lab/index.html" width="100%" height="650px" />
            </div>
        </div >
    )
}

const Excit = () => {
    return (
        <div id="Exciton" className='scroll-mt-20' >
            <h2 className=" text-lg sm:text-xl" >Excitons in 2D Materials</h2>
            <p className=" text-start" >
                Having validated the framework on 2D hydrogenic atoms and the
                deuteron, we now apply it to excitons-bound electron-hole pairs formed
                by Coulomb attraction that play a central role in the optical response
                of 2D materials. In this section we solve the LS integral equation for
                excitons using the RK potential. This yields exciton binding energies
                and wave functions, providing insight needed to predict exciton behavior
                in practical devices and to inform the design of materials with targeted
                optical properties. The RK potential accounts for nonlocal,
                distance-dependent dielectric screening in 2D materials, and thus models
                electron-hole interactions more accurately than a bare Coulomb
                potential. The explicit forms of the RK potential in configuration and
                momentum space are
                <span className="math display">\[{`\\begin{aligned}`}
                    V(r) &amp;=&amp; -{`\\dfrac{\\alpha \\hbar c \\pi}{2 r_0 \\kappa}`}
                    \left[H_0\left({`\\dfrac{r}{r_0}`}\right)-Y_0
                    \left({`\\dfrac{r}{r_0}`}\right)\right],
                    \cr
                    V({`\\mathbf p`},{`\\mathbf p`}&#39;) &amp;=&amp; - {`\\dfrac{1}{4\\pi^2}`}
                    \left(  {`\\dfrac{1}{4\\pi \\epsilon_0 \\kappa}`} {`\\dfrac{2\\pi e^2}{q(1 + r_0  q/\\kappa )}`}\right), \quad q = | {`\\mathbf p`}- {`\\mathbf p`}&#39; |
                    {`\\end{aligned}`}\]
                </span>
                where <span className="math inline">\(H_0\)</span>
                and <span className="math inline">\(Y_0\)</span> denote, respectively, the
                order-zero Struve function and the Bessel function of the second kind.
                Here <span className="math inline">\(r\)</span> denotes the electron-hole
                separation, <span className="math inline">\(r_0\)</span> is the screening
                length, and <span
                    className="math inline">\(\kappa=(\epsilon_1+\epsilon_2)/2\)</span> is the
                average environmental dielectric constant. The factor <span
                    className="math inline">\(\epsilon_0/e^2=\big(4\pi\,\alpha\,\hbar
                    c\big)^{-1}\)</span> converts between the fine-structure constant and
                energy units. We use <span className="math inline">\(\alpha^{-1}=137.035999084\)</span>, <span
                    className="math inline">\(\hbar c=1973.269804\ {`\\text{eV}`}\!\cdot\!{`\\text{Å}`}\)</span>, and the electron rest mass <span className="math inline">\(m_0=0.510998950\ {`\\text{MeV}`}\)</span>.
                The material-dependent RK parameters used in our calculations are summarized in Table <a>4</a>.
            </p>

            <div className="flex justify-center" >
                <Image src={Table_4} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <p>Our exciton binding energies for monolayer MoS<span
                className="math inline">\(_2\)</span>, MoSe<span
                    className="math inline">\(_2\)</span>, WS<span
                        className="math inline">\(_2\)</span>, and WSe<span
                            className="math inline">\(_2\)</span>, computed with the RK momentum-space
                potential using the parameters in Table 4 and obtained by solving the LS integral equation are reported in Table 5.
                As a numerical self-consistency check, we also compare each binding
                energy with the Hamiltonian expectation value <span
                    className="math inline">\(\langle H\rangle=\langle H_0\rangle+\langle
                    V\rangle\)</span> evaluated from the corresponding wave function. In all
                four materials, the relative percentage differences are well below <span
                    className="math inline">\(3 \cdot 10^{-6}\%\)</span>, indicating that the
                momentum/angle discretization, kernel construction, and diagonalization
                are converged and the solutions are numerically reliable.
            </p>
            <div className="flex justify-center" >
                <Image src={Table_5} className="w-3/6 my-2 justify-center " alt={"#"} />
            </div>
            <p>In Table 6, we show the convergence of
                exciton binding energies for the TMDs as a function of the number of
                mesh points in the relative momentum magnitude <span
                    className="math inline">\(N_p\)</span>, together with an extrapolation to
                <span className="math inline">\(1/N_p \to 0\)</span> (last column). The
                extrapolated values are in excellent agreement with Refs. <span
                    className="citation"
                    data-cites="PhysRevB.101.195417 PhysRevB.111.085404"></span> across all
                materials, with relative percentage differences below <span
                    className="math inline">\(0.3\%\)</span>.
            </p>
            <div className="flex justify-center" >
                <Image src={Table_6} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <div className="my-10" >
                <iframe src="https://msak-ai.github.io/Exciton_2D/lab/index.html?enableMemoryStorage=0" width="100%" height="650px" />
            </div>
        </div>
    )
}

const Cases = () => {
    return (
        <div className="">
            <Script
                src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
                type="text/javascript"></Script>
            <h1 className=" text-xl sm:text-xl">Systems Studied</h1>
            <p className="">
                To ensure the robustness and accuracy of our computational framework, a critical first step is validating
                the numerical methods against established benchmarks. For this purpose, we compare our simulated
                results for the 2D hydrogenic atom and the 2D deuteron system with well-known theoretical findings.
                These systems serve as ideal case studies: the hydrogenic atom, with its fundamental Coulomb potential,
                provides an exact analytical benchmark for bound states, while the deuteron, modeled with the more
                intricate MT potential, demonstrates the framework’s ability to handle complex nuclear interactions. By
                showing strong agreement between our computational outputs and trusted reference values, we establish
                confidence in the accuracy and reliability of our algorithms. This rigorous validation provides the essential
                foundation for applying our methods to more complex systems, such as excitons in 2D materials, where
                the RK potential is used to probe the influence of screening length and dielectric constants on binding
                energies and wavefunctions
            </p>
            <Hydro />
            <Deutro />
            <Excit />
        </div>
    )
}
export default Cases;