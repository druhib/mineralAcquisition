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
            
                                {/* <span className="container" style = {{paddingTop: '2rem', paddingBottom: '6rem'}}>
										<img src="images/introductioncomic.png" alt="" style ={{ display: 'flex',  alignItems: 'center', width: '100%', height: '100%'}}/>
								</span> */}
                              
							</header>
							
							<div className="tiles" style = {{ alignItems: 'center'}}>
								<article className="style1">
									<span className="image">
										<img src="images/rockphotos/aluminum.png" alt="" />
									</span>
									
									<a href="elements.html">
										<h2>Alumnium </h2>
										<div className="content">
											<p>Bauxite from France</p>
										</div>
									</a>
								</article>
								<article className="style2">
									<span className="image">
										<img src="images/rockphotos/cobalt.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Cobalt</h2>
										<div className="content">
											<p>Cobalite from Canada</p>
										</div>
									</a>
								</article>
								<article className="style3">
									<span className="image">
										<img src="images/rockphotos/copper.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Copper</h2>
										<div className="content">
											<p>Native Copper from United Kingdom </p>
										</div>
									</a>
								</article>
								<article className="style4">
									<span className="image">
										<img src="images/rockphotos/gold.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Gold</h2>
										<div className="content">
											<p>Carbon Leader Gold Ore from South Africa</p>
										</div>
									</a>
								</article>
								<article className="style5">
									<span className="image">
										<img src="images/rockphotos/iron.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Iron</h2>
										<div className="content">
											<p>Hermatite from Madagascar</p>
										</div>
									</a>
								</article>
								<article className="style6">
									<span className="image">
										<img src="images/rockphotos/lithium.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Lithium</h2>
										<div className="content">
											<p>Spudumene from Madagascar</p>
										</div>
									</a>
								</article>
								<article className="style2">
									<span className="image">
										<img src="images/rockphotos/manganese.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Manganese</h2>
										<div className="content">
											<p>Pyrolusite from Brazil</p>
										</div>
									</a>
								</article>
								<article className="style3">
									<span className="image">
										<img src="images/rockphotos/monazite2.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Monazite</h2>
										<div className="content">
											<p>Monazite from Madagascar</p>
										</div>
									</a>
								</article>
								<article className="style1">
									<span className="image">
										<img src="images/rockphotos/nickel.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Nickel</h2>
										<div className="content">
											<p>Pentlandite from Canada</p>
										</div>
									</a>
								</article>
								<article className="style5">
									<span className="image">
										<img src="images/rockphotos/phosphorus.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Phosphorous</h2>
										<div className="content">
											<p>Apatite from Madagascar</p>
										</div>
									</a>
								</article>
								<article className="style6">
									<span className="image">
										<img src="images/rockphotos/silver.png" alt="" />
									</span>
									<a href="generic.html">
										<h2>Silver</h2>
										<div className="content">
											<p>Native Silver from Czech Republic</p>
										</div>
									</a>
								</article>
								
							</div>
					
						</div>
					</div>

				{/* <!-- Footer --> */}
					<footer id="footer">
						<div className="inner">
							<section>
								<h2>Get in touch</h2>
								<form method="post" action="#">
									<div className="fields">
										<div className="field half">
											<input type="text" name="name" id="name" placeholder="Name" />
										</div>
										<div className="field half">
											<input type="email" name="email" id="email" placeholder="Email" />
										</div>
										<div className="field">
											<textarea name="message" id="message" placeholder="Message"></textarea>
										</div>
									</div>
									<ul className="actions">
										<li><input type="submit" value="Send" className="primary" /></li>
									</ul>
								</form>
							</section>
							
						</div>
					</footer>

			</div>

		
    )

    }; 

export default HomePage;
