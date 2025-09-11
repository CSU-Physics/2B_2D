import React from 'react'
import Script from "next/script";


const Lps = () => {
  return (
    <div id='Lippmann–Schwinger' className='scroll-mt-20' >
      <h2 className=" text-lg sm:text-xl font-semibold" >Lippmann–Schwinger Equation for 2B Bound States in 2D</h2>
      <p>
        The starting point for a 2B bound state with reduced mass <span className="math inline">\(\mu\)</span> is the time-independent Schrödinger equation <span className="math display">\[(H_0 + V)\,|\Psi\rangle = E\,|\Psi\rangle\]</span>
        where

        <span className="math inline">\(H_0\)</span> is the free Hamiltonian, <span className="math inline">\(V\)</span> 

        is the
        interaction, <span className="math inline">\(E&lt;0\)</span> is the binding
        energy, and <span className="math inline">\(|\Psi\rangle\)</span>
        is the corresponding bound state wave function. Rearranging the equation above gives the homogeneous LS equation for a bound state

        <span className="math display">\[|\Psi\rangle = G_0(E)\,V\,|\Psi\rangle,
          \qquad
          G_0(E) \equiv {`\\frac{1}{E - H_0}`}\]</span> which expresses the state in terms of <span className="math inline">\(G_0(E)\)</span>
        and the
        interaction. In a momentum basis
        <span className="math inline">\(|{`\\mathbf p`}\rangle\)</span>, adopting the completeness the free propagator
        <span className="math inline">\(\int \! d^2 p\, |{`\\mathbf p`}\rangle\langle {`\\mathbf p`}| = 1\)</span>, the LS equation projects to
        <span
          className="math display">\[\psi({`\\mathbf p`}) =
          \frac{1}{`E - \\dfrac{p ^ 2}{2\\mu}`}\,
          \int_0^\infty \! dp&#39;\, p&#39; \int_0^{`2\\pi`} \! d\phi&#39;\,
          V({`\\mathbf p`},{`\\mathbf p`}&#39;)\, \psi({`\\mathbf p`}&#39;)\]
        </span>

        where  <span className="math inline">\(\psi({`\\mathbf p`}) \equiv \langle {`\\mathbf p`}| \Psi\rangle\)</span> and
        <span className="math inline">\(V({`\\mathbf p`},{`\\mathbf p`}&#39;) \equiv \langle {`\\mathbf p`}| V | {`\\mathbf p`}&#39;
          \rangle\)</span>. For central interactions in 2D, it is convenient to separate the angular dependence by a partial-wave (PW) expansion, which reduces LS equation
        to a one-dimensional
        integral equation for each angular-momentum channel <span
          className="math inline">\(m\)</span>
        <span className="math display">\[\psi_m(p)  = \frac{1}{`{E - \\dfrac{p ^ 2}{2\\mu}}`} \int_0^\infty \! dp&#39;\, p&#39;\, V_m(p,p&#39;)\, \psi_m(p&#39;).\]</span>
        The PW-projected kernel can be obtained from
        the angular integration in momentum space, <span
          className="math display">\[{`\\begin{aligned}`}
          V_m(p, p&#39;) = \int_0^{`{2\\pi}`} d\phi&#39; \, V(p, p&#39;, \phi&#39;)
          \cos(m \phi&#39;) \equiv
          \int_0^\infty dr r \, J_m(pr) V(r) J_m(p&#39;r).
          {`\\end{aligned}`}\]</span>
        with <span className="math inline">\(J_m\)</span> the
        Bessel function of the first kind. The PW representation for each <span
          className="math inline">\(m\)
        </span> reduces the 2D integral equation to a
        one-dimensional radial form. This framework is used throughout to
        compute 2D bound states, e.g., hydrogenic systems with Coulomb
        interactions and the deuteron with Yukawa-type interactions, and, in
        particular, excitons with the RK interaction, within a momentum-space LS
        scheme.
      </p>

      <p>A convenient internal consistency check for a numerically obtained 2B
        binding energy and wave function is to compare the eigenvalue <span
          className="math inline">\(E\)</span> from the LS equation with the
        Hamiltonian expectation value, <span className="math inline">\(\langle H
          \rangle = \langle H_0 \rangle + \langle V \rangle\)</span>, evaluated
        using the corresponding momentum-space wave function. The degree of
        agreement between <span className="math inline">\(E\)</span> and <span
          className="math inline">\(\langle H \rangle\)</span> provides a direct
        measure of the numerical accuracy of the method. For a given PW channel
        <span className="math inline">\(m\)</span>, with the wave function
        normalization <span className="math display">\[\int \! d^2p\,
          \psi^2({`\\mathbf p`})
          = 2\pi \int_0^\infty \! dp\, p\, \psi_m^2(p)
          = 1.\]</span> The Hamiltonian expectation value,
        expressed in terms of the kinetic and potential contributions, reads
        <span className="math display">\[{`\\begin{aligned}`}
          \langle H \rangle
          &amp;= \langle H_0 \rangle + \langle V \rangle, \\[3pt]
          \langle H_0 \rangle
          &amp;= 2\pi \int_0^\infty \! dp\, p\;
          {`\\frac{p ^ 2}{2\\mu}`}\, |\psi_m(p)|^2, \\[3pt]
          \langle V \rangle
          &amp;= 2\pi \int_0^\infty \! dp\, p
          \int_0^\infty \! dp&#39;\, p&#39;\;
          \psi_m(p)\, V_m(p,p&#39;)\, \psi_m(p&#39;) \,.
          {`\\end{aligned}`}\]</span></p>

    </div>
  )
}

const NumImp = () => {
  return (
    <div id='Numerical-Implementation' className='scroll-mt-20'>
      <h2  className="font-semibold text-lg sm:text-xl" >Numerical Implementation</h2>
      <p>To numerically solve the LS integral equation  for
        a 2B bound state in 2D, represented in the PW framework, the integral
        equation should be transformed into a discretized form that can be
        solved iteratively or through matrix diagonalization. To efficiently
        handle the integrals, variable transformations are introduced to map the
        infinite domains of momentum <span className="math inline">\(p\)</span>, spatial coordinate <span className="math inline">\(r\)</span>, and angle
        <span className="math inline">\(\phi\)</span> onto finite intervals. The
        transformations are defined as: <span className="math display">\[p,p&#39;, r
          = {`\\frac{1 + x}{1 - x}`}, \quad \phi&#39; = \pi (1+x), \quad x \in [-1,1],\]
        </span>

        where <span className="math inline">\(x\)</span> is a variable
        spanning the interval <span className="math inline">\([-1, 1]\)</span>,
        suitable for integration using Gaussian-Legendre quadrature. The
        discretized form of the integral equation for the wave function <span className="math inline">\(\psi_m\)</span> becomes an eigenvalue problem:

        <span className="math display">\[\lambda \ \psi_m = {`{\\cal K}`}(E) \,
          \psi_m,\]</span> where <span className="math inline">\({`{\\cal K}`}(E)\)</span>
        represents the integral kernel operator dependent on the binding energy <span className="math inline">\(E\)</span>.

        The eigenvalue <span
          className="math inline">\(\lambda\)</span> is used as a criterion to verify
        the solution. The binding energy <span className="math inline">\(E\)</span> is determined by solving for the eigenvalue <span
          className="math inline">\(\lambda = 1\)</span>. This involves iteratively
        searching over initial guesses for <span
          className="math inline">\(E\)</span>
        until convergence is achieved. A
        tolerance of <span className="math inline">\(10^{-6}\)</span> is set for the
        eigenvalue condition, ensuring high accuracy in the computed
        energy.<br />
        The iterative search procedure can be outlined as follows:
      </p>

      <ol className="list-decimal">
        <li><p>Select two initial guesses for the binding energy E.</p></li>
        <li><p>Construct the kernel <span className="math inline">\({`{\\cal K}`}(E)\)</span> for each chosen energy.</p></li>
        <li><p>Solve the eigenvalue problem <span className="math inline">\(\lambda
          \, \psi_m = {`{\\cal K}`}(E) \, \psi_m\)</span> to obtain <span
            className="math inline">\(\lambda\)</span> and the corresponding wave
          function <span className="math inline">\(\psi_m\)</span> for both initial
          guesses.</p></li>
        <li><p>Using these two initial pairs <span className="math inline">\((E,
          \lambda)\)</span>, perform a linear fit to predict the next energy value
          for which <span className="math inline">\(\lambda = 1\)</span>.</p></li>
        <li><p>Iterate the process with the updated energy values until <span
          className="math inline">\(\lambda\)</span> converges to <span
            className="math inline">\(1\)</span> within the specified
          tolerance.</p></li>
      </ol>
      <p>The kernel <span className="math inline">\({`{\\cal K}`}(E)\)</span> is
        diagonalized at each step, which allows for the extraction of both the
        eigenvalue <span className="math inline">\(\lambda\)</span> and the wave
        function <span className="math inline">\(\psi_m\)</span>. Efficient
        numerical techniques such as matrix diagonalization, implemented through
        libraries like LAPACK, or iterative solvers like the Lanczos algorithm
        <span className="citation" data-cites="Hadizadeh_PRA85"></span>, can be
        employed for this purpose.
      </p>
    </div >


  )
}

function Theory() {
  return (
    <div className='' >
      <Script
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml-full.js"
        type="text/javascript"></Script>
      <Lps />
      <NumImp />
    </div>
  )
}

export default Theory