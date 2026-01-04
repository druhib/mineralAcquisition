import React from 'react';

const MiningOverview = () => {
    return (
        <div id="wrapper">
            <style>{`
                #main {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 2rem;
                }

                .content-section {
                    margin-bottom: 3rem;
                }

                .content-section p {
                    text-align: justify;
                    line-height: 1.5;
                    margin-bottom: 1rem;
                }

                .intro-images {
                    display: grid;
                    grid-template-columns: 350px 80px 500px;
                    grid-template-rows: auto auto;
                    gap: 1rem;
                    margin: 2rem 0;
                    align-items: center;
                }

                .intro-images img {
                    width: 100%;
                    height: auto;
                    object-fit: contain;
                }

                .earth-layers {
                    grid-column: 1;
                    grid-row: 1 / 3;
                    max-width: 350px;
                }

                .arrow-right {
                    grid-column: 2;
                    grid-row: 1;
                    font-size: 4rem;
                    color: #030303;
                    text-align: center;
                }

                .arrow-down-right {
                    grid-column: 2;
                    grid-row: 2;
                    font-size: 4rem;
                    color: #030303;
                    transform: rotate(45deg);
                    text-align: center;
                }

                .plate-movement {
                    grid-column: 3;
                    grid-row: 1;
                    max-width: 500px;
                }

                .earth-composition {
                    grid-column: 3;
                    grid-row: 2;
                    max-width: 400px;
                }

                .text-with-chart {
                    display: flex;
                    gap: 2rem;
                    align-items: flex-start;
                    margin-top: 2rem;
                }

                .text-with-chart p {
                    flex: 1;
                }

                .text-with-chart img {
                    width: 400px;
                    height: auto;
                    flex-shrink: 0;
                }

                .tectonic-figure {
                    margin: 2rem 0;
                    text-align: center;
                }

                .tectonic-figure img {
                    max-width: 100%;
                    height: auto;
                }

                .tectonic-figure figcaption {
                    font-size: 0.9rem;
                    color: #666;
                    margin-top: 0.5rem;
                }

                .two-column-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 2rem;
                    align-items: start;
                    margin: 2rem 0;
                }

                .text-content {
                    line-height: 1.5;
                }

                .iframe-container {
                    width: 100%;
                    height: 600px;
                    border: 1px solid #ccc;
                }

                .iframe-container iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }

                .mining-method {
                    margin-bottom: 3rem;
                    overflow: auto;
                }

                .mining-method h1 {
                    clear: both;
                    margin-bottom: 1rem;
                }

                .mining-method figure {
                    float: right;
                    margin: 0 0 1rem 2rem;
                    max-width: 500px;
                }

                .mining-method figure img {
                    width: 100%;
                    height: auto;
                    border: 3px solid #030303;
                }

                .mining-method figcaption {
                    font-size: 0.9rem;
                    color: #666;
                    margin-top: 0.5rem;
                    font-weight: bold;
                }

                .mining-method p {
                    text-align: justify;
                    line-height: 1.5;
                }

                @media (max-width: 1024px) {
                    .two-column-layout {
                        grid-template-columns: 1fr;
                    }
                    
                    .intro-images {
                        flex-direction: column;
                    }

                    .mining-method figure {
                        float: none;
                        margin: 1rem 0;
                        max-width: 100%;
                    }
                    
                    #main {
                        padding: 1.5rem;
                    }
                }

                @media (max-width: 768px) {
                    #main {
                        padding: 1rem;
                    }
                }
            `}</style>

            {/* Main */}
            <div id="main">
                <div className="inner">
                    <header style={{ textAlign: 'left', color: '#000000ff' }}>
                        <h1 style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            A Brief Overview of Mineral Deposits and Mining Methods
                        </h1>

                       {/* Introduction Section */}
<div className="content-section">
    <p>Earth formed 4.6 billion years ago and has grown from colliding with other celestial bodies in our solar system, like meteorites. Over time, gravitational forces and intense heat have caused the accrued materials to separate. This separation has formed Earth's internal structure.</p>
    <p>Earth's outermost layer, the crust, has a depth of 100 km. At the base of the crust lies the lithosphere, where tectonic plates rest. When these tectonic plates move to collide or separate away, magma is brought to the surface. Over millennia, the cooling and sedimentation of magma within the Earth's crust has formed the mineral deposits that are mined today. Many of these mineral deposits concentrate at the edges of tectonic plates.</p>
    
    <div style={{ display: 'flex', gap: '2rem', margin: '2rem 0', alignItems: 'flex-start', justifyContent: 'center' }}>
        <div style={{ maxWidth: '45%' }}>
            <img src="../images/MiningOverview/MiningOverviewFig1.png" alt="Mining Overview Figure 1" style={{ width: '100%', height: 'auto', border: '3px solid #030303' }} />
        </div>
        <div style={{ maxWidth: '45%' }}>
            <img src="../images/MiningOverview/TectonicPlates_PhysicalGeology.png" alt="Earth's tectonic plates" style={{ width: '100%', height: 'auto', border: '3px solid #030303' }} />
            <p style={{ fontSize: '0.9rem', color: '#666', fontWeight: 'bold', marginTop: '0.5rem' }}>
                Figure 2: Earth's tectonic plates. Image credit: Physical Geology by Steven Earle
            </p>
        </div>
    </div>
</div>

                        {/* Two Column: Text and Map */}
                        <div className="content-section">
                            <div className="two-column-layout">
                                <div className="text-content">
                                    <p>The Earth's crust hosts a plethora of inorganic materials including over 6,100 distinct mineral species recognized by the <a href="https://www.rruff.net/ima-mineral-list/?" target="_blank" rel="noopener noreferrer">International Mineralogical Association</a>. The USGS has compiled <a href="https://mrdata.usgs.gov/major-deposits/map-us.html" target="_blank" rel="noopener noreferrer">a map of critical mineral deposits of the world</a> which can be further found and interacted with below. (Please zoom out to see mineral deposits around the world!)</p>

                                    <p>These materials are extracted through mining. Mining refers to the process of extracting "ore" from Earth. The term "ore" refers to a section of rock that is comprised of economically significant concentrations of a material to motivate a mining operation.</p>

                                    <p>The selected mining process depends on the deposit's hardness, abundance, and depth in addition to any existing surrounding infrastructure, labor costs, and environmental restrictions. Most mined materials are extracted within the first 4 km (~13,000 ft) of the Earth's surface due to extreme pressure and temperature constraints. Generally, the process of acquiring materials from the ground can be divided into broad categories of: surface, underground, solution, and ocean mining.</p>
                                </div>

                                <div className="iframe-container">
                                    <iframe src="https://mrdata.usgs.gov/major-deposits/map-us.html" title="USGS Major Deposits Map"></iframe>
                                </div>
                            </div>
                        </div>

                        {/* Surface Mining */}
                        <div className="mining-method">
                            <h1>Surface Mining</h1>
                            <figure>
                                <img src="../images/MiningOverview/SurfaceMining_AdobeStock_1810648454.jpeg" alt="Surface Mining" />
                                <figcaption>Image credit: Adobe Stock | © Kiki</figcaption>
                            </figure>
                            <p>Surface mining is a form of mining where minerals and raw materials are extracted by removing soil and rock to expose ore. These processes account for over 2/3 of all mining process and is generally safer than underground mining.</p>
                            
                            <p>There are many different types of surface mining. These differ by the direction the surface is dug, the choice of excavator, and the discarding method of uprooted Earth.</p>
                            
                            <p>Generally for surface mining to be accomplished topsoil and overburden, or unwanted rock, is removed through excavation. When the ground becomes too hard to dig, holes are drilled so explosives can be set up. Upon detonation, the loose rock is removed.</p>
                            
                            <p>This process is repeated to expose the mineral deposit so it may be recovered. As the deposit is depleted, the excavation and blasting process is repeated. Care is taken to excavate the ground in a stepwise fashion to ensure the walls of the growing pit remain intact.</p>
                            
                            <p>Once the mine has ceased operation, the area is backfilled and restored with the topsoil that was initially removed.</p>
                        </div>

                        {/* Underground Mining */}
                        <div className="mining-method">
                            <h1>Underground Mining</h1>
                            <figure>
                                <img src="../images/MiningOverview/UndergroundMining_AdobeStock_1783672142.jpeg" alt="Underground Mining" />
                                <figcaption>Image credit: Adobe Stock | © islak</figcaption>
                            </figure>
                            <p>Underground mining refers to the process of acquiring ore through digging underneath the Earth's surface. Underground mining is structurally complex as the bore tunnels must be reinforced to prevent internal collapse.</p>
                            
                            <p>Similar to Surface Mining, there are many different methods of underground mining. These methods differ by the direction, depth, and structural reinforcement methods used to access the deposit.</p>
                        </div>

                        {/* Brine Mining */}
                        <div className="mining-method">
                            <h1>Brine Mining</h1>
                            <figure>
                                <img src="../images/MiningOverview/brinemining.png" alt="Brine Mining" />
                                <figcaption>Image credit: Halkes et. al. Volume 207, 2024, 107554, https://doi.org/10.1016/j.resconrec.2024.107554. licensed under CC BY-SA 4.0</figcaption>
                            </figure>
                            <p>Solution mining is the process of extracting liquid that is rich in minerals. Rather than use explosives, the deposit, which is often a confined aquifer, is exposed for further processing through drilling bore holes.</p>
                            
                            <p>For Brine Mining, bore holes allow for brine from underground aquifers to be pumped to the surface. Brine is a sodium rich solution that can contain dissolved minerals which can be recovered in downstream mineral processing facilities. This method is used to recover a number of important minerals like lithium, halogens, salt, and rare earth elements.</p>
                        </div>

                        {/* In Situ Leach Mining */}
                        <div className="mining-method">
                            <h1>In Situ Leach Mining</h1>
                            <figure>
                                <img src="../images/MiningOverview/NRC_Uranium_In_Situ_Leach.png" alt="In Situ Leach Mining" />
                                <figcaption>Image credit: From: NUREG-1350, Volume 25 Section 4, Nuclear Materials http://www.nrc.gov/reading-rm/doc-collections/nuregs/staff/sr1350/ licensed under CC BY-SA 4.0.</figcaption>
                            </figure>
                            <p>For the other type of solution mining, In-situ Leaching, a lixiviant, a solution made of an oxidizing agent like hydrogen peroxide combined with sodium carbonate or carbon dioxide, is injected through wells that were previously bored. When the lixiviant reaches the ore body, metals of interest are dissolved in the solution which is subsequently pumped back to the surface. Monitoring wells measure if the operation is generating contamination.</p>
                            
                            <p>This process is often used to acquire uranium as its radioactivity makes it dangerous to mine with other methods that require physical handling of the product.</p>
                        </div>

                        {/* Deep Sea Mining */}
                        <div className="mining-method">
                            <h1>Deep Sea Mining</h1>
                            <figure>
                                <img src="../images/MiningOverview/Deep_sea_mining_schematic_1.svg" alt="Deep Sea Mining" />
                                <figcaption>Image credit: "Deep sea mining schematic 1" by G.Mannaerts, licensed under CC BY-SA 4.0.</figcaption>
                            </figure>
                            <p>Deep-sea mining is the process of extracting minerals from the ocean floor which began in the 1970s. Remote controlled mining vehicles are lowered via a pipeline system to the seabed floor. Upon reaching the bottom of the ocean, the vehicle uses a hydraulic pump system that feeds mineral rich sediment to the above ship from which the mining vehicle was deployed. The collected material is removed of liquid that is discharged back into the ocean. The dewatered composite is then brought onshore for further refinement.</p>
                            
                            <p>Although this mining process has yet to reach commercial scales, the ocean bed is rich in several critical materials such as copper, nickel, cobalt, manganese, and rare earth elements. Despite severe environmental concerns, demands for these materials has motivated interest in this mining process.</p>
                        </div>
                    </header>
                </div>
            </div>
        </div>
    );
};

export default MiningOverview;