const Contacts= () => {
    return (

        <div id="wrapper" >
         
				{/* <!-- Main --> */}
					<div id="main" >
                    <div className="inner" >

                        {/* <header style = {{ paddingTop: '1rem', textAlign:'left' ,color:'#000000ff', lineHeight:'0%'}}> */}
                                 {/* <h1>Where Materials Relevant to Modern Society Come From</h1> */}
                                {/* <h1>Tool Overview </h1> */}
                              
						{/* </header> */}


						<header style = {{ paddingTop: '1rem', textAlign:'left' ,color:'#000000ff', lineHeight:'0%'}}>
								{/* <h1>Where Materials Relevant to Modern Society Come From</h1> */}
							<h1>Contacts </h1>
		
					
						</header>

                        <div className="flex-container" style= {{marginTop: '2rem', gap: '1rem'}} >

							<div className="column" style={{width:"25rem",height:"25rem"}}>
								<img src="./contacts/SofieContact.png" alt=" Sofie Image" style={{width:"22rem",height:"25rem", border: "5px solid #030303"}} />
								<div style={{display:"flex", alignContent:"left", flexDirection:"column",marginTop:"1rem"}}>
									<h1 style= {{fontSize: "large",fontWeight: "bold"}}>
										Sofie Roger <br></br>
										<span style = {{fontWeight: "normal"}}> email: </span>
											roger.s@northeastern.edu
											
									</h1>
								</div>
							</div>


                        <div className="column" style={{width:"25rem",height:"25rem"}}>
							<img src="./contacts/DruhiContact.png" alt="Druhi Image " style={{width:"21rem",height:"25rem", border: "5px solid #030303"}} />
							<div style={{display:"flex", alignContent:"left", flexDirection:"column",marginTop:"1rem"}}>
								<h1 style= {{fontSize: "large",fontWeight: "bold"}}>
									Druhi Bhargava <br></br>
									<span style = {{fontWeight: "normal"}}> email: </span>
									 bhargava.d@northeastern.edu
									 
								</h1>
							</div>
						</div>

						<div className="column" style={{width:"25rem",height:"25rem"}}>
							<img src="./contacts/landherr-l.jpg" alt="Dr.Landherr " style={{width:"21rem",height:"25rem", border: "5px solid #030303"}} />
							<div style={{display:"flex", alignContent:"left", flexDirection:"column", marginTop:"1rem"}}>
								<h1 style= {{fontSize: "large",fontWeight: "bold"}}>
									Dr. Luke Landherr
									<br></br>
									<span style = {{fontWeight: "normal"}}> email: </span>
										l.landherr@northeastern.edu
										
								</h1>
								
								
								
							</div>
						</div>
		
					</div>
                    



							
						</div>
					</div>
					

			</div>

		
    )

    }; 

export default Contacts;

