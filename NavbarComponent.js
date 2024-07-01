// navbar-component.js

// Define the class for the custom element
class NavbarComponent extends HTMLElement {
  constructor() {
    super();

    // Create a shadow root
    this.attachShadow({ mode: "open" });

    // Define the HTML template for the navbar
    this.shadowRoot.innerHTML = `
   <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css2?family=Arizonia&display=swap" rel="stylesheet">

	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

	<link rel="stylesheet" href="css/animate.css">

	<link rel="stylesheet" href="css/owl.carousel.min.css">
	<link rel="stylesheet" href="css/owl.theme.default.min.css">
	<link rel="stylesheet" href="css/magnific-popup.css">

	<link rel="stylesheet" href="css/bootstrap-datepicker.css">
	<link rel="stylesheet" href="css/jquery.timepicker.css">

	<link rel="stylesheet" href="css/flaticon.css">
	<link rel="stylesheet" href="css/style.css">

	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link href="https://fonts.googleapis.com/css2?family=Homemade+Apple&display=swap" rel="stylesheet">
 

   <nav class="navbar fixed-top navbar-expand-lg navbar-light ftco_navbar ftco-navbar-light bg-warning bg-opacity-50"
		id="ftco-navbar">
		<div class="container">
			<a class="navbar-brand" href="index.html">
				<img src="images/signature-safari-official-logo.png" height="90px" width="150px" />
			</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
				aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span class="oi oi-menu"></span> Menu
			</button>
			<div class="collapse navbar-collapse" id="ftco-nav">
				<div class="row px-4 d-flex flex-column justify-content-center">
					<ul class="navbar-nav px-3 justify-content-between border-bottom">
						<span class="d-md-flex">
							<li class="nav-item d-none d-md-flex">
								<a href="contact.html" class="nav-link text-white">info@signaturesafari.com</a>
							</li>
							<li class="nav-item d-none d-md-flex">
								<a href="contact.html" class="nav-link text-white">+255 755 880 881</a>
							</li>
							<li class="nav-item">
							  <div class="bg-danger" id="google_translate_element"></div>
							</li>
						</span>
						<span class="d-flex">
							<li class="nav-item d-none d-md-flex">
								<a href="about-us-signaturesafari.html" class="nav-link text-white">About</a>
							</li>
							<li class="nav-item d-none d-md-flex">
								<a href="blog.html" class="nav-link text-white">Blog</a>
							</li>
							<li class="nav-item d-none d-md-flex">
								<a href="contact.html" class="nav-link text-white">Contact</a>
							</li>
						</span>
					</ul>
					<ul class="navbar-nav ml-auto">
						<li class="nav-item">
							<div class="" id="google_translate_element"></div>
						</li>
						<li class="nav-item">
							<a href="index.html" class="nav-link active">Home</a>
						</li>
						<li class="nav-item d-md-none d-block">
							<a href="about-us-signaturesafari.html" class="nav-link">About</a>
						</li>
						<li class="nav-item dropdown mega-menu">
							<a href="safari-packages.html" class="nav-link dropdown-toggle " role="button"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Safari</a>
							<div class="dropdown-menu bg-white mega-menu1" aria-labelledby="megaMenuDropdown">
								<div class="container w-100">
									<div class="row bg-warning w-100 d-flex justify-content-between align-items-center">
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center w-100 py-3"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/kilinp.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                        ">
											<h5 class="text-center text-white py-2 fw-bold">
												Tanzania Safari Packages
											</h5>
											<!-- <ul class=" text-white w-100">
                        <li class="text-center"><a class="dropdown-item text-white text-center" href="#">Serengeti Mara River Crossing & Zanzibar Beach</a></li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Maasai Mara</a>
                        </li>
                      </ul> -->
											<p class="text-white text-center">
												<a href="7-days-flying-beach-to-bush.html">7 Days Flying Beach to
													Bush</a>
											</p>
											<p class="text-center text-white">
												<a href="8-days-midrange-great-migration-safari.html">8 Days Midrange
													Great Migration
													Safari in Tanzania</a>
											</p>
											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a href="tanzania-safari-packages.html">View all Packages</a>
											</button>
										</div>
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/magical-kenya.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
											<h5 class="text-center text-white py-2 fw-bold">
												Kenya Safari Packages
											</h5>
											<!-- <ul class="list-unstyled">
                        <li>
                          <a class="dropdown-item text-white" href="#">Luxury Safaris</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Budget Safaris</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Family Safaris</a>
                        </li>
                      </ul> -->
											<p class="text-white text-center">
												<a href="5-days-masaimara-great-migration-safaris.html">5 Days Masai
													Mara Great Migration Safari</a>
											</p>
											<p class="text-center text-white">
												<a href="8-days-magical-kenya-luxury-safari.html">8 Days Magical Kenya
													Luxury Safari</a>
											</p>
											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a href="kenya-safari-packages.html">View all Packages</a>
											</button>
										</div>
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/uganda-destination.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
											<h5 class="text-center text-white py-2">
												Uganda Safari Packages
											</h5>
											<!-- <ul class="list-unstyled">
                        <li>
                          <a class="dropdown-item text-white" href="#">Game Drives</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#"
                            >Hot Air Balloon Safaris</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Walking Safaris</a>
                        </li>
                      </ul> -->
											<p class="text-center text-white">
												<a href="7-days-uganda-gorilla-and-chimpanzee-trekking-safari.html">07
													Days Uganda Gorilla and
													Chimpanzee Trekking Safari</a>
											</p>
											<p class="text-center text-white">
												<a href="3-days-signature-safari-to-queen-elizabeth-national-park.html">3
													Days Signature Safari
													to Queen Elizabeth National Park</a>
											</p>
											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a href="uganda-safari-packages.html">View all Packages</a>
											</button>
										</div>
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/mud.avif');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a href="safari-packages.html">View all Destinations</a>
											</button>
											<h5 class="text-white pt-3">SAFARI TIPS</h5>
											<p class="text-center text-white">
												<a href="tanzania-safari-packing-list.html">Tanzania Safari Packing
													List</a>
											</p>
											<p class="text-center text-white">
												<a href="">About Tanzania</a>
											</p>
											<p class="text-center text-white">
												<a href="">Safari Faqs</a>
											</p>
											<!-- <ul class="list-unstyled">
                        <li>
                          <a class="dropdown-item text-white" href="#">Game Drives</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#"
                            >Hot Air Balloon Safaris</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Walking Safaris</a>
                        </li>
                      </ul> -->
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown mega-menu">
							<a href="safari-packages.html" class="nav-link dropdown-toggle" role="button"
								data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Climbing</a>
							<div class="dropdown-menu bg-white mega-menu1" aria-labelledby="megaMenuDropdown">
								<div class="container w-100">
									<div class="row bg-warning w-100 d-flex justify-content-between align-items-center">
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center w-100 py-3"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/kilibg.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                        ">
											<h5 class="text-center text-white py-2 fw-bold">
												Mountain Kilimanjaro & Routes
											</h5>
											<!-- <ul class=" text-white w-100">
                        <li class="text-center"><a class="dropdown-item text-white text-center" href="#">Serengeti Mara River Crossing & Zanzibar Beach</a></li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Maasai Mara</a>
                        </li>
                      </ul> -->

											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a href="kilimanjaro-climbing-routes.html">View all Routes</a>
											</button>
										</div>
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/mount-kenya1.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
											<h5 class="text-center text-white py-2 fw-bold">
												Kilimanjaro Group Joining 2024-2025
											</h5>
											<!-- <ul class="list-unstyled">
                        <li>
                          <a class="dropdown-item text-white" href="#">Luxury Safaris</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Budget Safaris</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Family Safaris</a>
                        </li>
                      </ul> -->

											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a
													href="best_kilimanjaro_trekking_group_join_with_signature_safari_2023_2024_2025.html">View
													all Groups</a>
											</button>
										</div>
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/ruwenzori.jpg');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
											<h5 class="text-center text-white py-2">
												Mountain Kenya
											</h5>
											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a
													href="5days-4nights-mount-kenya-climbing-naromoru-route-sirimon.html">View
													all Routes</a>
											</button>
										</div>
										<div class="col-md-3 col-sm-6 d-flex flex-column justify-content-center align-items-center py-5"
											style="
                          height: 350px;
                          background-image: linear-gradient(
                              45deg,
                              rgba(15, 15, 15, 0.612),
                              rgba(15, 15, 15, 0.612)
                            ),
                            url('images/mount-meru-peak.avif');
                          background-position: center;
                          background-repeat: no-repeat;
                          background-size: cover;
                          overflow: hidden;
                        ">
											<h5 class="text-white text-center pt-3">
												Mountain Meru
											</h5>
											<button type="button" class="btn btn-outline-white mb-2 rounded-pill">
												<a href="mount-meru-climbing.html">View
													all Routes</a>
											</button>
											<!-- <ul class="list-unstyled">
                        <li>
                          <a class="dropdown-item text-white" href="#">Game Drives</a>
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#"
                            >Hot Air Balloon Safaris</a
                          >
                        </li>
                        <li>
                          <a class="dropdown-item text-white" href="#">Walking Safaris</a>
                        </li>
                      </ul> -->
										</div>
									</div>
								</div>
							</div>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="tanzania-safari-packages.html" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Tanzania
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="tanzania-safari-packages.html">Tanzania Safari
										Packages</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="tanzania-national-parks.html">Tanzania National
										Parks</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="tanzania-day-trip-excursions.html">Tanzania
										Daytrips</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="tanzania-pratical-information.html">Tanzania Pratical
										Information</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<a href="zanzibar-holiday-beaches.html" class="nav-link">Zanzibar</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="safari-packages.html" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Destinations
							</a>
							<ul class="dropdown-menu">
								<li><a class="dropdown-item" href="tanzania-safari-packages.html">Tanzania</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="kenya-safari-packages.html">Kenya</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="uganda-safari-packages.html">Uganda</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="rwanda-safari-packages.html">Rwanda</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="botswana-safari-packages.html">Botswana</a></li>
								<li>
									<hr class="dropdown-divider">
								</li>
								<li><a class="dropdown-item" href="south-africa-safari-packages.html">South Africa</a>
								</li>
							</ul>
						</li>
						<li class="nav-item">
							<a href="tanzania-cyclic-tour.html" class="nav-link">Cycling</a>
						</li>
						<li class="nav-item d-md-none d-block">
							<a href="blog.html" class="nav-link text-white">Blog</a>
						</li>
						<li class="nav-item d-md-none d-block">
							<a href="signature-safari-trustee-board.html" class="nav-link text-white">Board of
								Trustees</a>
						</li>
						<li class="nav-item d-md-none d-block">
							<a href="contact.html" class="nav-link text-white">Contact</a>
						</li>
					</ul>
				</div>
				<p class="">
					<a href="tailor-made-safari-and-kilimanjaro.html" class="btn btn-primary">Let's Plan a Tour</a>
				</p>
			</div>
		</div>
	</nav>
 

    `;
   

   // Load necessary scripts
    this.loadScript('https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js');
    this.loadScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');

    // Initialize Google Translate
    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es,fr,de,zh-CN,it,ru' }, 'google_translate_element');
    };
  }

  loadScript(src, defer = false) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = defer;
    document.head.appendChild(script); // Append script to document head, not shadow DOM
  }

  connectedCallback() {
    // Load necessary scripts
    this.loadScript('https://stackpath.bootstrapcdn.com/bootstrap/5.3.3/js/bootstrap.bundle.min.js');
    this.loadScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');

    // Initialize Google Translate
    window.googleTranslateElementInit = function() {
      new google.translate.TranslateElement({ pageLanguage: 'en', includedLanguages: 'en,es,fr,de,zh-CN,it,ru' }, 'google_translate_element');
    };

    // Handle Bootstrap dropdowns
    var dropdownToggleList = this.shadowRoot.querySelectorAll('.dropdown-toggle');
    dropdownToggleList.forEach((dropdownToggle) => {
      var dropdownMenu = dropdownToggle.nextElementSibling;

      dropdownToggle.addEventListener('mouseover', () => {
        dropdownMenu.classList.add('show');
      });

      dropdownToggle.addEventListener('mouseout', (event) => {
        if (!dropdownMenu.contains(event.relatedTarget)) {
          dropdownMenu.classList.remove('show');
        }
      });

      dropdownMenu.addEventListener('mouseover', () => {
        dropdownMenu.classList.add('show');
      });

      dropdownMenu.addEventListener('mouseout', (event) => {
        if (!dropdownToggle.contains(event.relatedTarget)) {
          dropdownMenu.classList.remove('show');
        }
      });

      document.addEventListener('click', (event) => {
        if (!dropdownToggle.contains(event.target) && !dropdownMenu.contains(event.target)) {
          dropdownMenu.classList.remove('show');
        }
      });
    });

    // Toggle menu on small screens
    var navbarToggler = this.shadowRoot.querySelector('.navbar-toggler');
    var collapseMenu = this.shadowRoot.querySelector('#ftco-nav');

    navbarToggler.addEventListener('click', () => {
      collapseMenu.classList.toggle('show');
    });
  }

  loadScript(src, defer = false) {
    const script = document.createElement('script');
    script.src = src;
    script.defer = defer;
    document.head.appendChild(script); // Append script to document head, not shadow DOM
  }
}

// Register the custom element
customElements.define("navbar-component", NavbarComponent);




