import Image from "next/image";
import Code_1 from "../Equations/Code_1.png"
import Code_2 from "../Equations/Code_2.png"
import Code_3 from "../Equations/Code_3.png"
import Graph from "../Equations/Graph.png"

const Guide = () => {
    return (
        <div id="Guide" className='scroll-mt-20' >
            <h1 className=" text-xl sm:text-2xl font-bold">User Guide: Accessing, Editing, and Running the Interactive Code</h1>
            <p>The website hosts runnable Jupyter notebooks (via
                JupyterLite/Pyodide), so you can explore 2B quantum bound state problems
                in 2D directly in your browser-no installation required.</p>
            <h2 className=" text-lg sm:text-xl font-semibold">Getting In</h2>
            <ol className="list-decimal" >
                <li><p>Navigate to <a href="https://csu-physics.github.io/2B_2D/"
                    className="uri">https://csu-physics.github.io/2B_2D/</a>.</p></li>
                <li><p>From the homepage, select a notebook from the top menu bar (e.g.,
                    <em>Hydrogen in 2D</em>, <em>Deuteron in 2D</em>, <em>Exciton in
                        2D</em>).</p></li>
                <li><p>Allow a few seconds for the Python runtime to load.</p></li>
                <li><p>From the file browser in the left sidebar, open a Jupyter
                    notebook (e.g., <em>Hydrogen<span
                        className="math inline">\(_-\)</span>2D.ipynb</em>, <em>Deuteron<span
                            className="math inline">\(_-\)</span>2D.ipynb</em>, <em>Exciton<span
                                className="math inline">\(_-\)</span>2D.ipynb</em>).</p></li>
            </ol>
            <p><strong>Visual cue:</strong> You will see the Jupyter toolbar (Run,
                Kernel, etc.) and executable code cells.</p>
            <h2 id="changing-input-parameters font-semibold">Changing Input Parameters</h2>
            <p>Parameters are defined near the top of each notebook in
                <em>Parameters</em> section. Edit them, then re-run the cell.</p>


            <div className="flex justify-center" >
                <Image src={Code_1} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <p><strong>Visual cue:</strong> Parameter cells are labeled
                <em>Parameters</em>. Start with defaults and increase (Np, Nphi)
                gradually for convergence studies.</p>

            <h2 className=" text-lg sm:text-xl font-semibold ">Running the Code</h2>
            <ul className="list-disc space-y-2" >
                <li><p><strong>Run a single cell:</strong> click the cell and press
                    <code>Shift+Enter</code> (or use the Run button).</p></li>
                <li><p><strong>Run the entire notebook:</strong> <em>Kernel</em> <span
                    className="math inline">\(\rightarrow\)</span> <em>Restart Kernel and Run
                        All Cells</em> (recommended after parameter changes).</p></li>
                <li><p><strong>Interrupt a long run:</strong> <em>Kernel</em> <span
                    className="math inline">\(\rightarrow\)</span> <em>Interrupt</em>.</p></li>
            </ul>
            <p><strong>Visual cue:</strong> A cell shows <code>[Busy]</code> while
                running, then <code>[Idle]</code> as execution completes.</p>
            <h2 className=" text-lg sm:text-xl font-semibold ">Expected Outputs</h2>
            <h4 className="text-sm sm:text-base"><strong>(1) Energy Search / Binding Energy</strong> During the iterative solution of the LS equation, you will see a
                short search log. A typical printout for exciton:
            </h4>

            <div className="flex justify-center" >
                <Image src={Code_2} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <p><strong>Visual cue:</strong> If convergence is slow, lower <span
                className="math inline">\(Np\)</span> and <span
                    className="math inline">\(Nphi\)</span> and then run the cell again.</p>

            <h4 id="hamiltonian-expectation-value-check-only-for-exciton"><strong>(2)
                Hamiltonian Expectation Value Check (only for exciton)</strong> Each calculated binding energy <span className="math inline">\(E\)</span>
                is checked against the expectation value <span
                    className="math inline">\(\langle H\rangle = \langle H_0\rangle + \langle
                    V\rangle\)</span> computed from the corresponding wave function. A
                typical printout for exciton:</h4>
            <div className="flex justify-center" >
                <Image src={Code_3} className="w-3/5 my-2 justify-center " alt={"#"} />
            </div>
            <p><strong>Expectation:</strong> The relative percentage difference
                should be very small (near machine precision for well converged binding
                energies), indicating numerical consistency.</p>
            <h4 id="wave-function-plots"><strong>(3) Wave-Function Plots</strong>You will see momentum space wave functions <span
                className="math inline">\(\psi^{`{(n)}_{m}`}(p)\)</span> for ground and, when
                present, excited states. A typical output wave function plot for exciton
                is shown in Fig 4.</h4>
            <div className="flex justify-center" >
                <Image src={Graph} className="w-2/5 my-2 justify-center " alt={"#"} />

                {/* <div>
                    <p><span className="font-bold" >Figure 4</span></p>
                </div> */}
            </div>
            <p><strong>Visual cue:</strong> Ground states are typically broader in
                <span className="math inline">\(p\)</span>; excited states exhibit nodes and
                shift weight toward lower <span className="math inline">\(p\)</span> as
                spatial extent increases.</p>


            <h2 className=" text-lg sm:text-xl font-semibold">Saving or Resetting Your
                Work</h2>
            <ul className="list-disc space-y-2">
                <li><p><strong>Download your edits:</strong> Right-click a notebook
                    (<span><em>i.e. Exciton<span
                        className="math inline">\(_-\)</span>2D.ipynb</em></span>) and choose
                    <em>Download</em>.</p></li>
                <li><p><strong>Save figures:</strong> Select the plot, then drag and
                    drop it onto your device.</p></li>
                <li><p><strong>Reset to original:</strong> Refresh the page (sessions
                    are ephemeral).</p></li>
            </ul>
            <h2 className=" text-lg sm:text-xl font-semibold ">Troubleshooting</h2>
            <ul className="list-disc space-y-2">
                <li><p><strong>Blank or unresponsive:</strong> Ensure JavaScript is
                    enabled; refresh the page.</p></li>
                <li><p><strong>Memory or speed issues:</strong> Reduce Np or Nphi; close
                    heavy tabs.</p></li>
                <li><p><strong>Stuck kernel:</strong> <em>Kernel</em> <span
                    className="math inline">\(\rightarrow\)</span> <em>Restart
                        Kernel</em>.</p></li>
                <li><p><strong>No changes after edits:</strong> <em>Run</em> <span
                    className="math inline">\(\rightarrow\)</span> <em>Run All
                        Cells</em>.</p></li>
            </ul>
            <h2 className=" text-lg sm:text-xl font-semibold ">Quick Checklist</h2>
            <ol className="list-decimal">
                <li><p>Open a notebook and <em>Run All</em> once.</p></li>
                <li><p>Edit <code>Np</code>, <code>Nphi</code>, <code>m</code>, and
                    potential parameters.</p></li>
                <li><p><em>Restart Kernel and Run All Cells</em>.</p></li>
                <li><p>Confirm convergence of energy; check <span
                    className="math inline">\(\langle H\rangle\)</span> vs. <span
                        className="math inline">\(E\)</span> (small relative percentage difference);
                    inspect wave-function plots.</p></li>
                <li><p>Download the notebook or images if you wish to keep
                    results.</p></li>
            </ol>
        </div>

    )
}
export default Guide;