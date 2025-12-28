const ToolOverview= () => {
    return (

        <div id="wrapper" >
        
            {/* <!-- Main --> */}
            <div id="main" style={{ paddingBottom: "1rem" }}>
                <div className="inner" >

                    <header style = {{ textAlign:'left' ,color:'#000000ff'}}>
							<h1> Overview </h1>
                            <p> This learning tool is a web application which drew inspiration from Uruguayan economist Eduardo Galeano’s book Open Veins of Latin America. 
                                This book was published in 1971 and explained how the Latin American continent has been impacted by mining. 
                                The tool built in this body of work is designed to extend transparency of mineral acquisition practices to the rest of the world.</p>

                            <p> 
                                The major mineral deposits of the world can be further found on and interacted with below
                                <a href="https://mrdata.usgs.gov/major-deposits/map-us.html" target="_blank" rel="noopener noreferrer"> (https://mrdata.usgs.gov/major-deposits/map-us.html)</a>
                                <br/> Please zoom out to see mineral deposits around the world.  
                            </p>


                            
					</header>

                    <div style ={{ display: "flex", justifyContent: "center", alignItems: "center" }}> 
                        <iframe src="https://mrdata.usgs.gov/major-deposits/map-us.html" height="500" width="800" title="Iframe Example"></iframe>
                    </div>
                    


                </div>
            </div>
           
        </div>
    ) 
}; 

export default ToolOverview;