const ToolOverview= () => {
    return (

        <div id="wrapper" >
            {/* <!-- Main --> */}
            <div id="main" style={{ paddingBottom: "1rem" }}>
                <div className="inner" >

                    <header style = {{ textAlign:'left' ,color:'#000000ff'}}>
							<h1> What is this website? </h1>
                            <p> 
                                This web application is a learning tool that aims to provide an overview of
                                where materials come from, how they are mined, and what they are used for. 
                                There are three major sections of this website: </p>
                            <p><strong>Home Page</strong></p> 
                            
                                <p>On the home page, you will find an interactive, color coded map that shows which countries have exported materials over a time period.
                                The production data that is visualized in this map was transcribed from mineral commodity surveys published from the two oldest geological surveys in the world,
                                the British Geological Survey (1493-1900), and the United States Geological Survey (1913-2019), with the exception of Nickel reported from 1913-2023. Each one of these mineral commodity surveys report on the production of 40 different items.
                                Due to time constraints, the authors constrained the scope of this work to 10 widely used materials of the modern age. </p>
                            
                            <p><strong>Case Studies</strong></p>
                            <p> If you scroll past the interactive map, you will find a clickable photo of the materials included in this work. 
                                Each page describes how the mineral is mined, what it is used for, what the mineral looks like, and where the mineral naturally occurs.
                                The authors have also linked in two more interactive features. The first is from 'Compare your country'. This allows for people to see 
                                where the mineral is imported to. The second is another map generated with Cesium, the open source equivalent of GoogleEarth. 
                                The authors have geotagged some of the largest mining operations for the respective mineral. There are however so many more mines than the ones that 
                                have been highlighted. </p>
                            
                            <p><strong>'What is Mining?' Page</strong></p>
                            <p> The authors have also made a page titled 'What is mining?' to give an overview of the different ways materials can be 
                                extracted from the Earth's surface. 
                            </p>
                            
                            <h1> What is the motivation behind this work? </h1>
                            <p>This work is inspired by Uruguayan economist Eduardo Galeano's book Open Veins of Latin America which was published in 1971. 
                            Galeano examines how the extraction of materials and their trade relationships have impacted the people of South America. 
                            His work has made clear that as we pursue a sustainable, safe, and equitable global society, we must reconcile with the fact that Earth's resources
                            are unevenly distributed. As engineers, scientists, and other industrial professionals design and implement exciting technologies, 
                            they should also have to consider the consequences of how the materials required for these projects are acquired. 
                            

                                 </p>

                            
					</header>

                    


                </div>
            </div>
           
        </div>
    ) 
}; 

export default ToolOverview;