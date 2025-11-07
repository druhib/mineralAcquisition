import { Route, Routes } from "react-router";

const HomePage = () => {
    return (

        <div id="wrapper" >
         
				{/* <!-- Main --> */}
					<div id="main">
						<div className="inner">
							<header style = {{ paddingTop: '1rem', textAlign:'left' ,color:'#000000ff', lineHeight:'0%'}}>

                                <h1>Where Materials Relevant to Modern Society Come From</h1>
                                <p>A Historical Global Overview of Mineral Acquisition and Exploitation.</p>
            
                              
							</header>
							
							<div className="tiles" style = {{ alignItems: 'center'}}>
								<article className="style1">
									<span className="image">
										<img src="images/rockphotos/Bauxite_siimsepp_AdobeStock_52934386.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© siimsepp / AdobeStock</p>
									
									<a href="elements.html">
										<h2>Buaxite</h2>
										<div className="content">
											<p> (aluminum ore) </p>
										</div>
									</a>
								</article>
								<article className="style2">
									<span className="image">
										<img src="images/rockphotos/Cobalt_Valerie Garner_AdobeStock_51615139.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© Valerie Garner / AdobeStock</p>
									<a href="generic.html">
										<h2>Cobalt</h2>
										<div className="content">
											{/* <p>Cobalite from Canada</p> */}
										</div>
									</a>
								</article>
								<article className="style3">
									<span className="image">
										<img src="images/rockphotos/Copper_vvoe_AdobeStock_102491386.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© vvoe / AdobeStock</p>
									<a href="generic.html">
										<h2>Copper</h2>
										<div className="content">
											{/* <p>Native Copper from United Kingdom </p> */}
										</div>
									</a>
								</article>
								<article className="style4">
									<span className="image">
										<img src="images/rockphotos/Gold_Elzbieta Sekowska_AdobeStock_25400183.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© Elzbieta Sekowska / AdobeStock</p>
									<a href="generic.html">
										<h2>Gold</h2>
										<div className="content">
											{/* <p>Carbon Leader Gold Ore from South Africa</p> */}
										</div>
									</a>
								</article>
								<article className="style5">
									<span className="image">
										<img src="images/rockphotos/Iron(hematite)_michal812_AdobeStock_25214049.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© michal812 / AdobeStock</p>
									<a href="generic.html">
										<h2>Iron</h2>
										<div className="content">
											{/* <p>Hermatite from Madagascar</p> */}
										</div>
									</a>
								</article>
								<article className="style6">
									<span className="image">
										<img src="images/rockphotos/Lithium_Henri Koskinen_AdobeStock_257006124.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© Henri Koskinen / AdobeStock</p>
									<a href="generic.html">
										<h2>Lithium</h2>
										<div className="content">
											{/* <p>Spudumene from Madagascar</p> */}
										</div>
									</a>
								</article>
								<article className="style2">
									<span className="image">
										<img src="images/rockphotos/Manganese_Okan_AdobeStock_522571038.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© Okan / AdobeStock</p>
									<a href="generic.html">
										<h2>Manganese</h2>
										<div className="content">
											{/* <p>Pyrolusite from Brazil</p> */}
										</div>
									</a>
								</article>
								<article className="style1">
									<span className="image">
										<img src="images/rockphotos/Nickel_Agnieszka_AdobeStock_371622481.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© Agnieszka / AdobeStock</p>
									<a href="generic.html">
										<h2>Nickel</h2>
										<div className="content">
											{/* <p>Pentlandite from Canada</p> */}
										</div>
									</a>
								</article>
								<article className="style5">
									<span className="image">
										<img src="images/rockphotos/PhosphateRock_Apatite_Ekaterina_AdobeStock_760534276.png" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© Apatite_Ekaterina / AdobeStock</p>
									<a href="generic.html">
										<h2>Phosphorous</h2>
										<div className="content">
											{/* <p>Apatite from Madagascar</p> */}
										</div>
									</a>
								</article>
								<article className="style6">
									<span className="image">
										<img src="images/rockphotos/Silver_bambambu_AdobeStock_189623313.jpeg" alt="" />
									</span>
									<p style = {{fontSize:"x-small", fontWeight:"bold", marginTop:".75rem"}}>© bambambu / AdobeStock</p>
									<a href="generic.html">
										<h2>Silver</h2>
										<div className="content">
											{/* <p>Native Silver from Czech Republic</p> */}
										</div>
									</a>
								</article>
								
							</div>
					
						</div>
					</div>
					

			</div>

		
    )

    }; 

export default HomePage;
