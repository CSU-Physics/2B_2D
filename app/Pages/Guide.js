import Image from "next/image";
import Code_1 from "../Equations/Code_1.png"
import Code_2 from "../Equations/Code_2.png"
import Code_3 from "../Equations/Code_3.png"
import Graph from "../Equations/Graph.png"

const Guide = () => {
    return (
        <div>
            <h1 className=" text-xl sm:text-2xl">User Guide: Accessing, Editing, and Running the Interactive Code</h1>
            <p>The website hosts runnable Jupyter notebooks (via
                JupyterLite/Pyodide), so you can explore 2B quantum bound state problems
                in 2D directly in your browser-no installation required.</p>
            <h2 className=" text-lg sm:text-xl">Getting In</h2>
            <ol className="list-decimal" >
                <li><p>Navigate to <a href="https://csu-physics.github.io/2B_2D/"
                    class="uri">https://csu-physics.github.io/2B_2D/</a>.</p></li>
                <li><p>From the homepage, select a notebook from the top menu bar (e.g.,
                    <em>Hydrogen in 2D</em>, <em>Deuteron in 2D</em>, <em>Exciton in
                        2D</em>).</p></li>
                <li><p>Allow a few seconds for the Python runtime to load.</p></li>
                <li><p>From the file browser in the left sidebar, open a Jupyter
                    notebook (e.g., <em>Hydrogen<span
                        class="math inline">\(_-\)</span>2D.ipynb</em>, <em>Deuteron<span
                            class="math inline">\(_-\)</span>2D.ipynb</em>, <em>Exciton<span
                                class="math inline">\(_-\)</span>2D.ipynb</em>).</p></li>
            </ol>
            <p><strong>Visual cue:</strong> You will see the Jupyter toolbar (Run,
                Kernel, etc.) and executable code cells.</p>
            <p>Parameters are defined near the top of each notebook in
                <em>Parameters</em> section. Edit them, then re-run the cell.</p>
            <h4 className="text-sm sm:text-base">(A) Mesh / Discretization</h4>
            <div class="python">
                <p># Discretization (edit these) Np = 300 # number of momentum points
                    Nphi = 40 # number of angular points</p>
            </div>
            <h4 className="text-sm sm:text-base"> (B) Partial-Wave Channel</h4>
            <div class="python">
                <p># Quantum numbers m_angular = 0 # partial-wave index (e.g., 0, 1, 2,
                    ...)</p>
            </div>
            <h4 className="text-sm sm:text-base">(C) Potential Parameters
                (examples)</h4>
            <div class="python">
                <p># Coulomb (Hydrogenic) Z = 2</p>
                <p># Malfliet-Tjon (Deuteron) Vr = 1438.72280 # MeV.fm Mr = 3.21 # fm^-1
                    Va = -600.0 # MeV.fm Ma = 1.550 # fm^-1</p>
                <p># Rytova-Keldysh (Exciton) m_e = 0.55 * me # Electron mass in eV for
                    MoSe2 m_h = 0.59 * me # Hole mass in eV for MoSe2 r_0 = 53.1624 #
                    screening length for MoSe2</p>
            </div>
            <p><strong>Visual cue:</strong> Parameter cells are labeled
                <em>Parameters</em>. Start with defaults and increase (Np, Nphi)
                gradually for convergence studies.</p>

            <h2 className=" text-lg sm:text-xl">Running the Code</h2>
            <ul className="list-disc space-y-2" >
                <li><p><strong>Run a single cell:</strong> click the cell and press
                    <code>Shift+Enter</code> (or use the Run button).</p></li>
                <li><p><strong>Run the entire notebook:</strong> <em>Kernel</em> <span
                    class="math inline">\(\rightarrow\)</span> <em>Restart Kernel and Run
                        All Cells</em> (recommended after parameter changes).</p></li>
                <li><p><strong>Interrupt a long run:</strong> <em>Kernel</em> <span
                    class="math inline">\(\rightarrow\)</span> <em>Interrupt</em>.</p></li>
            </ul>
            <p><strong>Visual cue:</strong> A cell shows <code>[Busy]</code> while
                running, then <code>[Idle]</code> as execution completes.</p>
            <h2 className=" text-lg sm:text-xl">Expected Outputs</h2>
            <h4 className="text-sm sm:text-base"><strong>(1) Energy Search / Binding Energy</strong> During the iterative solution of the LS equation, you will see a
                short search log. A typical printout for exciton:</h4>

        </div>
    )
}
export default Guide;