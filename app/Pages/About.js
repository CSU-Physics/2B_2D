
const About = () => {
    return (
        <div id="About" className={"mt-4 my-4 md:my2 scroll-mt-20"}>
            {/* className="flex flex-row p-0 items-center md:px-8 lg:px-12" */}
            {/* className="leading-6 md:px-8 lg:px-12 py-2 text-lg" */}
            <div  >
                <h1 className=" text-xl sm:text-2xl font-bold text-center" >Open-source Interactive Website for Exciton modeling via the lippmann-schwinger equation</h1>
            </div>            
            <h2 className=" text-lg sm:text-xl mt-2 font-semibold" >Solve 2d quantum bound states in your browser</h2>
            <p >This website provides an open, browser-based platform for solving the Lippmann–Schwinger (LS) equation in two dimensions.
                It delivers executable Jupyter notebooks that take users from parameter setup and Gauss–Legendre discretization to numerical
                solution, binding-energy evaluation, Hamiltonian-expectation checks, and wave-function visualization. Ready-to-run case
                studies—2D hydrogenic (Coulomb), deuteron (Malfliet–Tjon), and exciton (Rytova–Keldysh)—link compact theory to reproducible
                momentum-space computations. Hosted on GitHub Pages, it is free, zero-install, and open for community contributions.</p>
        </div>
    )
}
export default About;