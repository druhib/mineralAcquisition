const HomePage = () => {
    return (

        <div id="wrapper" >
         
				{/* <!-- Menu --> */}
					<nav id="menu">
						<h2>Menu</h2>
						<ul>
							<li><a href="index.html">Home</a></li>
							<li><a href="generic.html">Ipsum veroeros</a></li>
							<li><a href="generic.html">Tempus etiam</a></li>
							<li><a href="generic.html">Consequat dolor</a></li>
							<li><a href="elements.html">Elements</a></li>
						</ul>
					</nav>

				{/* <!-- Main --> */}
					<div id="main">
						<div className="inner">
							<header style = {{ paddingTop: '1rem', textAlign:'left' ,color:'#606b2fff', lineHeight:'0%'}}>

                                <h1>Where Materials Relevant to Modern Society Come From</h1>
                                <p>A Historical Global Overview of Mineral Acquisition and Exploitation.</p>
            
                                <span className="container" style = {{paddingTop: '2rem', paddingBottom: '6rem'}}>
										<img src="images/introductioncomic.png" alt="" style ={{ display: 'flex',  alignItems: 'center', width: '100%', height: '100%'}}/>
								</span>
                              
							</header>
							<section className="tiles">
								<article className="style1">
									<span className="image">
										<img src="images/rockphotos/aluminum.png" alt="" />
									</span>
									<a href="generic.html">
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
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
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
								{/* <article className="style4">
									<span className="image">
										<img src="images/pic12.jpg" alt="" />
									</span>
									<a href="generic.html">
										<h2>Pretium</h2>
										<div className="content">
											<p>Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.</p>
										</div>
									</a>
								</article> */}
							</section>
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
							<section>
								<h2>Follow</h2>
								<ul className="icons">
									<li><a href="#" className="icon brands style2 fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a href="#" className="icon brands style2 fa-facebook-f"><span className="label">Facebook</span></a></li>
									<li><a href="#" className="icon brands style2 fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="#" className="icon brands style2 fa-dribbble"><span className="label">Dribbble</span></a></li>
									<li><a href="#" className="icon brands style2 fa-github"><span className="label">GitHub</span></a></li>
									<li><a href="#" className="icon brands style2 fa-500px"><span className="label">500px</span></a></li>
									<li><a href="#" className="icon solid style2 fa-phone"><span className="label">Phone</span></a></li>
									<li><a href="#" className="icon solid style2 fa-envelope"><span className="label">Email</span></a></li>
								</ul>
							</section>
							<ul className="copyright">
								<li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
							</ul>
						</div>
					</footer>

			</div>

		
    )

    }; 

export default HomePage;
