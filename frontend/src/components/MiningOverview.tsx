const MiningOverview = () => {
    return (

        <div id="wrapper" >
        
            {/* <!-- Main --> */}
            <div id="main" style={{ paddingBottom: "1rem" }}>
                <div className="inner" >

                    <header style = {{ textAlign:'left' ,color:'#000000ff'}}>
                            <h1 style={{ textAlign: 'left', marginBottom: '2rem' }}>A Brief Overview of Mineral Deposits and Mining Methods</h1>
                          
                             <p> Earth formed 4.6 billion years ago and has accrued mass through 
                                collisions with celestial bodies like meteorites in the solar system. 
                                Over time, gravitational forces and intense heat caused the accrued materials to
                                differentiate, resulting in Earth's complex internal structure. 

                                Earth's outermost layer, the crust has a depth of 100 km. At the base of the crust lies the lithosphere, 
                                where tectonic plates rest. Their collisions and points of divergence have contributed to the 
                                development of rich, diverse material deposits. 
                            
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem", marginTop:"0.1rem"}}>
                                <img 
                                    src="../images/MiningOverview/EarthsLayers.png" 
                                    alt="Earths_layers image" 
                                    style={{ width: "450px", height: "auto" }} 
                                />
                             
                               <figure style={{ margin: 15, justifyContent:"right" }}>
                                <img 
                                    src="../images/MiningOverview/TectonicPlates_PhysicalGeology.png" 
                                    alt="EarthsTectonicPlates_image" 
                                    style={{ width: "720px", height: "auto" }} 
                                />
                                <figcaption style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.1rem" }}>
                                    Image credit: Physical Geology by Steven Earle pg. 279
                                </figcaption>
                            </figure>

                                <div>
                                </div>
                            </div>
                        
                            <div style={{ display: "flex", justifyContent: "right", alignItems: "center", marginTop: "1rem" }}> 
                                <iframe src="https://mrdata.usgs.gov/major-deposits/map-us.html" height="600" width="720" title="Iframe Example"></iframe>
                                        
                                        
                            </div>
                            
                            
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "2rem", marginTop: "-45rem" }}>
                            <div style={{ width: "430px" }}>
                                <p> 
                                    
                                    The Earth's crust hosts a plethora of inorganic materials including over 6,100 distinct mineral species recognized by the
                                     <a href="https://www.rruff.net/ima-mineral-list/?" target="_blank" rel="noopener noreferrer"> International Mineralogical Association 
                                    </a>. The USGS has compiled <a href="https://mrdata.usgs.gov/major-deposits/map-us.html" target="_blank" rel="noopener noreferrer">a map of critical mineral deposits of the world </a>
                                     which can be further found and interacted with below. (Please zoom out to see mineral deposits around the world!) 
                                    
                                    <br/>
                                    <br/>
                                    These materials are extracted through mining. Mining refers to the process of extracting "ore" from Earth. 
                                    The term "ore" refers to a section of rock that is comprised of economically 
                                    significant concentrations of a material to motivate a mining operation. 
                                    <br/>
                                    <br/>
                                    The selected mining process depends on the deposit's hardness, abundance, and depth in addition to any existing 
                                    surrounding infrastructure, labor costs, and environmental restrictions. Most mined materials are extracted within the first 4 km (~13,000 ft) 
                                    of the Earth's surface due to extreme pressure and temperature constraints. Generally, the process of acquiring materials from the ground can be 
                                    divided into broad categories of: surface, underground, solution, and ocean mining.                                 
                                </p> </div> <br/> <p> </p> </div> <p> </p> </p>    
                                 



                    <div style={{ marginTop: "2rem" }}>
                            <div style={{ marginBottom: "3rem", overflow: "auto" }}>
                                <h1 style={{ clear: "both" }}>Surface Mining</h1>
                                <figure style={{ float: "right", margin: "0 0 1rem 2rem" }}>
                                    <img 
                                        src="../images/MiningOverview/SurfaceMining_AdobeStock_1810648454.jpeg" 
                                        alt="Surface Mining" 
                                        style={{ width: "500px", height: "auto" }} 
                                    />
                                    <figcaption style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.1rem", }}>
                                        Image credit: Adobe Stock | © Kiki
                                    </figcaption>
                                </figure>
                                <p>Surface mining is a form of mining where minerals and raw materials are extracted by removing soil and rock to expose ore. These processes account for over 2/3 of all mining process and is generally safer than underground mining.
                                     <br />
                                     <br />There are many different types of surface mining. These differ by the direction the surface is dug, the choice of excavator, and the discarding method of uprooted Earth.
                                    <br />
                                     <br />Generally for surface mining to be accomplished topsoil and overburden, or unwanted rock, is removed through excavation. When the ground becomes too hard to dig, holes are drilled so explosives can be set up. Upon detonation, the loose rock is removed.
                                    <br />
                                     <br />This process is repeated to expose the mineral deposit so it may be recovered. As the deposit is depleted, the excavation and blasting process is repeated. Care is taken to excavate the ground in a stepwise fashion to ensure the walls of the growing pit remain intact. 
                                    <br />
                                     <br />Once the mine has ceased operation, the area is backfilled and restored with the topsoil that was initially removed. 
                            </p>
                            </div>
                            </div>



                     <div style={{ marginTop: "2rem" }}>
                            <div style={{ marginBottom: "3rem", overflow: "auto" }}>
                                <h1 style={{ clear: "both" }}>Underground Mining</h1>
                                <figure style={{ float: "right", margin: "0 0 1rem 2rem" }}>
                                    <img 
                                        src="../images/MiningOverview/UndergroundMining_AdobeStock_1783672142.jpeg" 
                                        alt="Underground Mining" 
   
                                        style={{ width: "500px", height: "auto" }} 
                                    />
                                    <figcaption style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.1rem" }}>
                                        Image credit: Adobe Stock | © islak
                                    </figcaption>
                                </figure>
                                <p>Underground mining refers to the process of acquiring ore through digging underneath the Earth's surface. Underground mining is structurally complex as the bore tunnels must be reinforced to prevent internal collapse. 
                                    <br />
                                     <br /> Similar to Surface Mining, there are many different methods of underground mining. These methods differ by the direction, depth, and structural reinforcement methods used to access the deposit.</p>
                            </div>
                            </div>                           
     


                      <div style={{ marginTop: "2rem" }}>
                            <div style={{ marginBottom: "3rem", overflow: "auto" }}>
                                <h1 style={{ clear: "both" }}>Brine Mining</h1>
                                <figure style={{ float: "right", margin: "0 0 1rem 2rem" }}>
                                    <img 
                                        src="../images/MiningOverview/brinemining.png" 
                                        alt="Surface Mining" 
                                        style={{ width: "700px", height: "auto" }} 
                                    />
                                    <figcaption style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.1rem"  }}>
                                        Image credit: Halkes et. al. Volume 207, 2024, 107554, 
                                         <br /> https://doi.org/10.1016/j.resconrec.2024.107554. 
                                          <br /> licensed under CC BY-SA 4.0
                                    </figcaption>
                                </figure>
                                <p>Solution mining is the process of extracting liquid that is rich in minerals. Rather than use explosives, the deposit, which is often a confined aquifer, is exposed for further processing through drilling bore holes. 
                                    <br />
                                 <br />For Brine Mining, bore holes allow for brine from underground aquifers to be pumped to the surface. Brine is a sodium rich solution that can contain dissolved minerals which can be recovered in downstream mineral processing facilities. This method is used to recover a number of important minerals like lithium, halogens, salt, and rare earth elements.</p>
                            </div>
                            </div> 
                     


                     <div style={{ marginTop: "2rem" }}>
                            <div style={{ marginBottom: "3rem", overflow: "auto" }}>
                                <h1 style={{ clear: "both" }}>In Situ Leach Mining</h1>
                                <figure style={{ float: "right", margin: "0 0 1rem 2rem" }}>
                                    <img 
                                        src="../images/MiningOverview/NRC_Uranium_In_Situ_Leach.png" 
                                        alt="Surface Mining" 
                                        style={{ width: "500px", height: "auto" }} 
                                    />
                                    <figcaption style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.1rem"}}>
                                        Image credit: From:  NUREG-1350, Volume 25 Section 4, Nuclear Materials  
                                         <br /> http://www.nrc.gov/reading-rm/doc-collections/nuregs/staff/sr1350/ 
                                          <br /> licensed under CC BY-SA 4.0.
                                    </figcaption>
                                </figure>
                                <p>For the other type of solution mining, In-situ Leaching, a lixiviant, a solution made of an oxidizing agent like hydrogen peroxide combined with sodium carbonate or carbon dioxide, is injected through wells that were previously bored. When the lixiviant reaches the ore body, metals of interest are dissolved in the solution which is subsequently pumped back to the surface. Monitoring wells measure if the operation is generating contamination. 
                                      <br />                              
                                 <br /> This process is often used to acquire uranium as its radioactivity makes it dangerous to mine with other methods that require physical handling of the product.</p>
                            </div>
                            </div>     



                     <div style={{ marginTop: "2rem" }}>
                            <div style={{ marginBottom: "3rem", overflow: "auto" }}>
                                <h1 style={{ clear: "both" }}>Deep Sea Mining</h1>
                                <figure style={{ float: "right", margin: "0 0 1rem 2rem" }}>
                                    <img 
                                        src="../images/MiningOverview/Deep_sea_mining_schematic_1.svg" 
                                        alt="Surface Mining" 
                                        style={{ width: "500px", height: "auto" }} 
                                    />
                                    <figcaption style={{ fontSize: "0.9rem", color: "#666", marginTop: "0.1rem" }}>
                                        Image credit: "Deep sea mining schematic 1" by G.Mannaerts, 
                                         <br />licensed under CC BY-SA 4.0.
                                    </figcaption>
                                </figure>
                                <p>Deep-sea mining is the process of extracting minerals from the ocean floor which began in the 1970s. Remote controlled mining vehicles are lowered via a pipeline system to the seabed floor. Upon reaching the bottom of the ocean, the vehicle uses a hydraulic pump system that feeds mineral rich sediment to the above ship from which the mining vehicle was deployed. The collected material is removed of liquid that is discharged back into the ocean. The dewatered composite is then brought onshore for further refinement. 
                                    <br />
                                    <br /> Although this mining process has yet to reach commercial scales, the ocean bed is rich in several critical materials such as copper, nickel, cobalt, manganese, and rare earth elements. Despite severe environmental concerns, demands for these materials has motivated interest in this mining process.</p>
                            </div>
                            </div>   



                    </header>
                </div>
            </div>
        </div>
    );
};

export default MiningOverview;