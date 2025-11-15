import Script from "next/script";
import Figure_1 from "../Assets/Figure_1.png"
import Figure_2 from "../Assets/Figure_2.png"
import Figure_3 from "../Assets/Figure_3.png"

import Image from "next/image"
const Hydro = () => {
    return (
        <div id="Hydrogen" className='scroll-mt-20' >
            <h2 className=" text-lg sm:text-xl font-semibold" >Hydrogenic atom in 2D</h2>
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
                        className="math display" >\[E_{`{exact}`} = -{`\\dfrac{Z ^ 2 m}{4\\left(n + 1/2\\right)^2}`}, \quad n = 0, 1,
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
            {/*Table 1*/}
            <div className=" grid grid-rows-1 justify-items-center " >
                <p className=" mb-4 text-start break-words w-9/12 "> <span className="font-bold" >Table 1</span> Comparison of analytical (<span
                    className="math inline">{`\\(E_{num}\\)`}</span>) and numerical (<span
                        className="math inline">{`\\(E_{num}\\)`}</span>) 2B binding energies, obtained
                    from Eqs. (14) and (4), respectively, for the 2D
                    hydrogenic atom with partial wave <span
                        className="math inline">\(m=0\)</span> and nuclear charge <span
                            className="math inline">\(Z=2\)</span>. Calculations employ <span
                                className="math inline">\(500\)</span> grid points for the magnitude of the
                    relative momentum and <span className="math inline">\(40\)</span> points for
                    the angular variables.
                </p>
                <table className="w-fit " >
                    <thead>
                        <tr className="header">
                            <th styles={{ textAlign: "left" }}>n</th>
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">\(E_{`exact`}\)</span><span className="citation"
                                    data-cites="parfitt2002two"></span></th>
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(E_{Num}\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">\(\left({`\\dfrac{E_{exact} - E_{num}}{E_{exact}}`}
                                \right) \times 100 \%\)</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td styles={{ textAlign: "left" }}>0</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-4.00000</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-3.99928</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>0.01800</td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "left" }}>1</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-0.44444</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-0.44441</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>0.00700</td>
                        </tr>
                        <tr className="odd">
                            <td styles={{ textAlign: "left" }}>2</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-0.16000</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-0.16017</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>0.10625</td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "left" }}>3</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-0.08163</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>-0.08193</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}>0.36751</td>
                        </tr>
                    </tbody>
                </table>

                <p className="" > <span className="" >Fig. 1</span> complements the
                    binding‐energy results in Table <a href="#table_hydrogen_BE"
                        data-reference-type="ref" data-reference="table_hydrogen_BE">1</a> by
                    showing momentum-space hydrogenic wave functions for <span
                        className="math inline">{`\\(n=0-3\\)`}</span>. The plots depict <span
                            className="math inline">{`\\(\\psi^{(n)}_{m}(p)\\)`}</span> versus relative
                    momentum <span className="math inline">{`\\(p\\)`}</span>, highlighting how the
                    momentum distribution varies with the energy level. The ground state
                    exhibits a broader high-<span className="math inline">\(p\)</span>
                    distribution, whereas excited states (<span
                        className="math inline">{`\\(n=1,2,3\\)`}</span>) develop nodes and shift weight
                    toward lower <span className="math inline">{`\\(p\\)`}</span>, consistent with
                    their larger spatial extent in configuration space.</p>

                <div className=" text-start bg-black h-fit   " >
                    <Image src={Figure_1} className="w-fit justify-center  h-3/5 " alt={"#"} />
                </div>

                <p className="w-9/12" ><span className="font-bold" >Figure 1</span> Ground (<span class="math inline">{`\\(n=0\\)`}</span>) and first three
                    excited (<span class="math inline">{`\\(n=1-3\\)`}</span>) momentum-space wave
                    functions <span class="math inline">{`\\(\psi^{(n)}_{m}(p)\\)`}</span> of the
                    2D hydrogenic atom for partial wave <span
                        class="math inline">{`\\(m=0\\)`}</span> and nuclear charge <span
                            class="math inline">{`\\(Z=2\\)`}</span> as functions of relative momentum
                    <span class="math inline">{`\\(p\\)`}</span>. States correspond to the
                    numerical binding energies in Table 1
                </p>
            </div>
            {/* <div className="flex justify-center" >
                <Image src={Table_1} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div> */}


            <div className="my-8" >
                <iframe src="https://csu-physics.github.io/Hydrogn_2D.github.io/lab/index.html?enableMemoryStorage=0" width="100%" height="650px" />
            </div>
        </div >
    )
}
const Deutro = () => {
    return (
        <div id="Deuteron" className='scroll-mt-20' >
            <h2 className=" text-lg sm:text-xl font-semibold" >Deuteron in 2D</h2>
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

            {/* Table 2 */}
            <div id="table:MT-I-parameters" className="grid grid-rows-1 justify-items-center" >

                <p className=" text-start"> <span className="font-bold" >Table 2</span> Parameter sets for the two MT potential models used in our
                    calculations.
                </p>

                <table className=" w-fit " >
                    <thead>
                        <tr className="header">
                            <th styles={{ textAlign: "center" }}>MT-model</th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(V_a \\, \\text{(MeV  fm)}\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(\\mu_a \\,  (\\text{fm}^{-1})\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(V_r \\, \\text{(MeV  fm)}\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(\mu_r \\, (\\text{fm}^{-1})\\)`}</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td styles={{ textAlign: "center" }}>Model-1</td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-600.00\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(1.550\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(1438.7228\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(3.21\)</span></td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "center" }}>Model-2</td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-600.00\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(1.550\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(0\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(0\)</span></td>
                        </tr>
                    </tbody>
                </table>
                <div>
                    <Image src={Figure_2} className="w-fit  justify-center " alt={"#"} />
                </div>
                <p><span className="font-bold" >Figure 2</span> Comparison of the two MT potentials as functions of the momentum transfer <span class="math inline">{`\\(q\\)`}</span>. </p>
            </div>


            {/* <div className="flex justify-center" >
                <Image src={Table_2} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div> */}


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

            {/* Table 3 */}

            <div id="Deuteron_bidning_energy" className=" grid grid-rows-1 justify-items-center " >
                <p className=" text-start w-8/12 "> <span className="font-bold" >Table 3</span> Calculated 2D deuteron binding energies for the two MT
                    potential models, using <span className="math inline">\(200\)</span> grid
                    points for the 2B relative-momentum magnitude and <span
                        className="math inline">\(101\)</span> grid points for the angular
                    variables.</p>
                <table className="w-fit" >

                    <thead>
                        <tr className="header">
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(E_{d}\\)`}</span> (MeV)</th>
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(E^{(0)}_{d}\\)`}</span> (MeV)</th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(E^{(1)}_{d}\\)`}</span> (MeV)</th>
                            <th styles={{ textAlign: "center" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td styles={{ textAlign: "center" }}>Model-1</td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td colSpan="2" styles={{ textAlign: "center" }}>Model-2</td>
                            <td styles={{ textAlign: "center" }}></td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-6.246\)</span></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-7806\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-312.4\)</span></td>
                            <td styles={{ textAlign: "center" }}></td>
                        </tr>
                    </tbody>

                </table>
                <div className=" text-start bg-black  h-fit " >
                    <Image src={Figure_3} className="w-fit justify-center " alt={"#"} />
                </div>
                <p className="w-9/12" ><span className="font-bold" >Figure 3</span> 2D momentum-space deuteron wave functions <span
                    class="math inline">{`\\(\\psi(p)\\)`}</span>, computed with the MT potential:
                    Model 1 {`(left)`} and Model 2 {`(right),`} plotted versus relative momentum
                    <span class="math inline">{`\\(p\\)`}</span>.
                </p>

            </div>



            {/* <div className="flex justify-center" >
                <Image src={Table_3} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div> */}
            <div className="my-10" >
                <iframe src="https://csu-physics.github.io/Pedagogical-and-Numerical-Test-Deuteron-in-2D/lab/index.html" width="100%" height="650px" />
            </div>
        </div >
    )
}

const Excit = () => {
    return (
        <div id="Exciton" className='scroll-mt-20' >
            <h2 className=" text-lg sm:text-xl font-semibold" >Excitons in 2D Materials</h2>
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

            {/* Table 4 */}
            <div id="tab:rk_params" className=" grid grid-rows-1 justify-items-center " >
                <p className="w-9/12 text-start"> <span className="font-bold" >Table 4</span> Electron-hole RK potential parameters for monolayer TMDs,
                    electron and hole effective masses <span
                        className="math inline">{`\\(m_e\\)`}</span>, <span
                            className="math inline">{`\\(m_h\\)`}</span> (in units of <span
                                className="math inline">{`\\(m_0\\)`}</span>) and screening length <span
                                    className="math inline">{`\\(r_0\\)`}</span> (Å), for MoS<span
                                        className="math inline">{`\\(_2\\)`}</span>, MoSe<span
                                            className="math inline">{`\\(_2\\)`}</span>, WS<span
                                                className="math inline">{`\\(_2\\)`}</span>, and WSe<span
                                                    className="math inline">{`\\(_2\\)`}</span>; values from density functional theory
                    in Ref. <span className="citation"
                        data-cites="PhysRevB.92.205418"></span>.</p>
                <table className="w-fit " >
                    {/*  */}
                    <thead>
                        <tr className="header">
                            <th styles={{ textAlign: "left" }}>Substance</th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(m_e \\ (m_0)\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(m_h \\  (m_0)\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(r_0\\)`}</span>
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td styles={{ textAlign: "left" }}>MoS<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}>0.47</td>
                            <td styles={{ textAlign: "center" }}>0.54</td>
                            <td styles={{ textAlign: "center" }}>44.6814</td>
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
                        <tr className="even">
                            <td styles={{ textAlign: "left" }}>MoSe<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}>0.55</td>
                            <td styles={{ textAlign: "center" }}>0.59</td>
                            <td styles={{ textAlign: "center" }}>53.1624</td>
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
                        <tr className="odd">
                            <td styles={{ textAlign: "left" }}>WS<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}>0.32</td>
                            <td styles={{ textAlign: "center" }}>0.35</td>
                            <td styles={{ textAlign: "center" }}>40.1747</td>
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
                        <tr className="even">
                            <td styles={{ textAlign: "left" }}>WSe<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}>0.34</td>
                            <td styles={{ textAlign: "center" }}>0.36</td>
                            <td styles={{ textAlign: "center" }}>47.5701</td>
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

            {/* <div className="flex justify-center" >
                <Image src={Table_4} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div> */}
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

            {/* Table 5 */}
            <div id="table:exciton_bindings" className=" grid grid-rows-1 justify-items-center " >
                <p className="w-9/12 text-start"> <span className="font-bold" >Table 5</span> Exciton binding energies and Hamiltonian expectation values for monolayer TMDs.
                    with
                    the corresponding Hamiltonian expectation values, <span
                        className="math inline">\(\langle H\rangle=\langle H_0\rangle+\langle
                        V\rangle\)</span>, along with their relative percentage differences.
                    Calculations use <span className="math inline">\(500\)</span> grid points in
                    the relative momentum magnitude <span className="math inline">\(p\)</span>
                    and <span className="math inline">\(40\)</span> in the azimuthal angle.
                </p>
                <table className="w-fit" >

                    <thead>
                        <tr className="header">
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(E_{2B}\\)`}</span> (meV)</th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(\\langle H_0 \\rangle\\)`}</span> (meV)</th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(\\langle V\\rangle\\)`}</span> (meV)</th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(\\langle H\\rangle\\)`}</span> (meV)</th>
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(\\vert  \\frac{\\langle H \\rangle- E_{2B}}{E_{2B}} \\vert  \\times 100 \\%\\)`}</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td styles={{ textAlign: "center" }}>MoS<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-529.821\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(135.816\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-665.637\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-529.821\)</span></td>
                            <td styles={{ textAlign: "center" }}><span className="math inline">\(5.73 \cdot
                                10^{-7}\)</span></td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "center" }}>MoSe<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-480.553\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(116.507\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-597.060\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-480.553\)</span></td>
                            <td styles={{ textAlign: "center" }}><span className="math inline">\(1.40 \cdot
                                10^{-7}\)</span></td>
                        </tr>
                        <tr className="odd">
                            <td styles={{ textAlign: "center" }}>WS<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-512.597\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(144.819\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-657.416\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-512.597\)</span></td>
                            <td styles={{ textAlign: "center" }}><span className="math inline">\(2.45 \cdot
                                10^{-6}\)</span></td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "center" }}>WSe<span
                                className="math inline">\(_2\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-460.118\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(124.665\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-584.783\)</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">\(-460.118\)</span></td>
                            <td styles={{ textAlign: "center" }}><span className="math inline">\(1.38 \cdot
                                10^{-7}\)</span></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <div className="flex justify-center" >
                <Image src={Table_5} className="w-3/6 my-2 justify-center " alt={"#"} />
            </div> */}


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

            {/* Table 6 */}
            <div id="table_exciton_mesh" className=" grid grid-rows-1 justify-items-center " >
                <p className=" text-start"> <span className="font-bold" >Table 6</span> Exciton binding energies (meV) for different numbers of mesh points.
                </p>
                <table className="w-fit" >
                    {/* <caption>Exciton binding energies (meV) for different numbers of mess
                        points.</caption>*/}
                    <thead>
                        <tr className="header">
                            <th styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(N_p\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}>500</th>
                            <th styles={{ textAlign: "center" }}>600</th>
                            <th styles={{ textAlign: "center" }}>700</th>
                            <th styles={{ textAlign: "center" }}>800</th>
                            <th styles={{ textAlign: "center" }}><span className="math inline">{`\\(\\to \\infty\\)`}</span></th>
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}></th>
                            <th styles={{ textAlign: "center" }}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="odd">
                            <td styles={{ textAlign: "center" }}>Mo<span
                                className="math inline">{`\\(\\text{S}_2\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-529.821\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-527.901\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-526.718\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-525.955\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-524.872\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "center" }}>MoSe<span
                                className="math inline">{`\\(_2\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-480.553\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-478.640\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-477.460\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-476.700\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-475.753\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                        </tr>
                        <tr className="odd">
                            <td styles={{ textAlign: "center" }}>W<span
                                className="math inline">{`\\(\\text{S}_2\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-512.597\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-510.759\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-509.613\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-508.866\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-507.613\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                        </tr>
                        <tr className="even">
                            <td styles={{ textAlign: "center" }}>WSe<span
                                className="math inline">{`\\(_2\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-460.118\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-458.303\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-457.170\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-456.426\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}><span
                                className="math inline">{`\\(-454.772\\)`}</span></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                            <td styles={{ textAlign: "center" }}></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* <div className="flex justify-center" >
                <Image src={Table_6} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div> */}
            <div className="my-10" >
                <iframe src="https://msak-ai.github.io/Exciton_2D/lab/index.html?enableMemoryStorage=0" width="100%" height="650px" />
            </div>
        </div>
    )
}

const Gen = () => {
    return (
        <div>
            <h2 className=" text-lg sm:text-xl font-semibold" >Extending Beyond the Case Studies: General 2B Bound States in 2D</h2>
            <p>After the three example case studies, Hydrogenic atom in 2D, Deuteron in 2D, and Excitons in 2D materials, the following code is meant to serve as a general interactive environment for studying any two-body bound state in 2D, as long as the interaction is specified in configuration space as a function of the relative distance r.
                The core idea is simple: you provide a potential V(r) in configuration space, and the code handles the transformation to momentum space, builds the Lippmann–Schwinger kernel, and computes the binding energy and corresponding wave function.
                <br></br>
                <span> In practice, you have three options: use one of the two pre-defined potentials or define a new potential in the build_V_r function:</span>
            </p>
            <ul className="list-disc space-y-2">
                <li><p><strong>Use the pre-defined Coulomb-like potential</strong>
                    <br></br>
                    Appropriate for hydrogenic systems or excitons where a long-range attractive interaction is dominant.
                    You select this by choosing the Coulomb option in the <span className="  italic" >potential_type</span> setting.
                </p></li>
                <li>
                    <p><strong>Use the pre-defined Malfliet–Tjon (MT) potential</strong>
                        <br></br>
                        Suitable for nuclear-type systems like the deuteron, where the interaction has both short-range repulsive and intermediate-range attractive parts. You select this by choosing the MT option in <span className="  italic" >potential_type</span>. The standard MT parameters are already coded, but you can adjust them if you wish to explore variations.
                    </p></li>
                <li><p><strong>Define your own custom potential in configuration space</strong>
                    <br></br>

                    For any other two-body system, you can choose the “custom” option in <span className=" italic" >potential_type</span> and then modify the <span className=" italic" >“custom”</span> section of the potential-building function to implement your desired interaction. This is where you directly specify how the potential depends on the radial coordinate r. By editing just this part of the code, you can explore a wide variety of model interactions without changing the rest of the numerical machinery.
                </p></li>
            </ul>
            <p>Regardless of which option you choose—<span className=" italic" >Coulomb</span>, <span className=" italic" >Malfliet–Tjon</span>, or a <span className=" italic" >custom</span> interaction—it is essential to ensure that the <span className=" italic" >mass</span> parameter in the <span className=" italic" >get_mass</span> function is defined consistently with your physical problem and units. The mass determines how the kinetic term is treated and therefore has a direct impact on the resulting binding energy. When you introduce a new potential or change the physical system you are modeling, remember to update the mass definition in the configuration section of the script so that it matches your chosen units and physical context.</p>

            <div className="my-8" >
                <iframe src="https://csu-physics.github.io/General-2B-Bound-States-in-2D/lab/index.html?enableMemoryStorage=0" width="100%" height="650px" />
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
            <h1 className=" text-xl sm:text-xl font-semibold">Systems Studied</h1>
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
            <Gen />
        </div>
    )
}
export default Cases;