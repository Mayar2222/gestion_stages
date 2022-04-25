import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Fragment>
      <section id="hero" className="hero d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <h1 data-aos="fade-up">
                Les meilleurs offres de stages pour les étudiants
              </h1>
              <h2 data-aos="fade-up" data-aos-delay={400}>
                C'est une solution au problème de l’inaccessibilité aux offres
                de stages pour les étudiants (Stage d'été, PFA, PFE)
              </h2>
              <div data-aos="fade-up" data-aos-delay={600}>
                <div className="text-center text-lg-start">
                  <Link
                    to={"/register"}
                    className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                  >
                    <span>S'inscrire</span>
                    <i className="bi bi-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img src="assets/img/hero-img.png" className="img-fluid" alt />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* ======= à propos Section ======= */}
        <section id="à propos" className="à propos">
          <div className="container" data-aos="fade-up">
            <div className="row gx-0">
              <div
                className="col-lg-6 d-flex flex-column justify-content-center"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="content">
                  <h3>Who We Are</h3>
                  <h2>
                    Expedita voluptas omnis cupiditate totam eveniet nobis sint
                    iste. Dolores est repellat corrupti reprehenderit.
                  </h2>
                  <p>
                    Quisquam vel ut sint cum eos hic dolores aperiam. Sed
                    deserunt et. Inventore et et dolor consequatur itaque ut
                    voluptate sed et. Magnam nam ipsum tenetur suscipit
                    voluptatum nam et est corrupti.
                  </p>
                  <div className="text-center text-lg-start">
                    <a
                      href="#"
                      className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center"
                    >
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 d-flex align-items-center"
                data-aos="zoom-out"
                data-aos-delay={200}
              >
                <img src="assets/img/à propos.jpg" className="img-fluid" alt />
              </div>
            </div>
          </div>
        </section>
        {/* End à propos Section */}
        {/* ======= Features Section ======= */}
        <section id="features" className="features">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Features</h2>
              <p>Laboriosam et omnis fuga quis dolor direda fara</p>
            </header>
            <div className="row">
              <div className="col-lg-6">
                <img src="assets/img/features.png" className="img-fluid" alt />
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0 d-flex">
                <div className="row align-self-center gy-4">
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={200}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Eos aspernatur rem</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={300}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Facilis neque ipsa</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={400}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Volup amet voluptas</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={500}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Rerum omnis sint</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={600}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Alias possimus</h3>
                    </div>
                  </div>
                  <div
                    className="col-md-6"
                    data-aos="zoom-out"
                    data-aos-delay={700}
                  >
                    <div className="feature-box d-flex align-items-center">
                      <i className="bi bi-check" />
                      <h3>Repellendus mollitia</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* / row */}
            {/* Feature Tabs */}
            <div className="row feture-tabs" data-aos="fade-up">
              <div className="col-lg-6">
                <h3>
                  Neque officiis dolore maiores et exercitationem quae est seda
                  lidera pat claero
                </h3>
                {/* Tabs */}
                <ul className="nav nav-pills mb-3">
                  <li>
                    <a
                      className="nav-link active"
                      data-bs-toggle="pill"
                      href="#tab1"
                    >
                      Saepe fuga
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab2">
                      Voluptates
                    </a>
                  </li>
                  <li>
                    <a className="nav-link" data-bs-toggle="pill" href="#tab3">
                      Corrupti
                    </a>
                  </li>
                </ul>
                {/* End Tabs */}
                {/* Tab Content */}
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab1">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2" />
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2" />
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  {/* End Tab 1 Content */}
                  <div className="tab-pane fade show" id="tab2">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2" />
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2" />
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  {/* End Tab 2 Content */}
                  <div className="tab-pane fade show" id="tab3">
                    <p>
                      Consequuntur inventore voluptates consequatur aut vel et.
                      Eos doloribus expedita. Sapiente atque consequatur minima
                      nihil quae aspernatur quo suscipit voluptatem.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2" />
                      <h4>
                        Repudiandae rerum velit modi et officia quasi facilis
                      </h4>
                    </div>
                    <p>
                      Laborum omnis voluptates voluptas qui sit aliquam
                      blanditiis. Sapiente minima commodi dolorum non eveniet
                      magni quaerat nemo et.
                    </p>
                    <div className="d-flex align-items-center mb-2">
                      <i className="bi bi-check2" />
                      <h4>Incidunt non veritatis illum ea ut nisi</h4>
                    </div>
                    <p>
                      Non quod totam minus repellendus autem sint velit. Rerum
                      debitis facere soluta tenetur. Iure molestiae assumenda
                      sunt qui inventore eligendi voluptates nisi at. Dolorem
                      quo tempora. Quia et perferendis.
                    </p>
                  </div>
                  {/* End Tab 3 Content */}
                </div>
              </div>
              <div className="col-lg-6">
                <img
                  src="assets/img/features-2.png"
                  className="img-fluid"
                  alt
                />
              </div>
            </div>
            {/* End Feature Tabs */}
            {/* Feature Icons */}
            <div className="row feature-icons" data-aos="fade-up">
              <h3>Ratione mollitia eos ab laudantium rerum beatae quo</h3>
              <div className="row">
                <div
                  className="col-xl-4 text-center"
                  data-aos="fade-right"
                  data-aos-delay={100}
                >
                  <img
                    src="assets/img/features-3.png"
                    className="img-fluid p-4"
                    alt
                  />
                </div>
                <div className="col-xl-8 d-flex content">
                  <div className="row align-self-center gy-4">
                    <div className="col-md-6 icon-box" data-aos="fade-up">
                      <i className="ri-line-chart-line" />
                      <div>
                        <h4>Corporis voluptates sit</h4>
                        <p>
                          Consequuntur sunt aut quasi enim aliquam quae harum
                          pariatur laboris nisi ut aliquip
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={100}
                    >
                      <i className="ri-stack-line" />
                      <div>
                        <h4>Ullamco laboris nisi</h4>
                        <p>
                          Excepteur sint occaecat cupidatat non proident, sunt
                          in culpa qui officia deserunt
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={200}
                    >
                      <i className="ri-brush-4-line" />
                      <div>
                        <h4>Labore consequatur</h4>
                        <p>
                          Aut suscipit aut cum nemo deleniti aut omnis.
                          Doloribus ut maiores omnis facere
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={300}
                    >
                      <i className="ri-magic-line" />
                      <div>
                        <h4>Beatae veritatis</h4>
                        <p>
                          Expedita veritatis consequuntur nihil tempore
                          laudantium vitae denat pacta
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={400}
                    >
                      <i className="ri-command-line" />
                      <div>
                        <h4>Molestiae dolor</h4>
                        <p>
                          Et fuga et deserunt et enim. Dolorem architecto
                          ratione tensa raptor marte
                        </p>
                      </div>
                    </div>
                    <div
                      className="col-md-6 icon-box"
                      data-aos="fade-up"
                      data-aos-delay={500}
                    >
                      <i className="ri-radar-line" />
                      <div>
                        <h4>Explicabo consectetur</h4>
                        <p>
                          Est autem dicta beatae suscipit. Sint veritatis et sit
                          quasi ab aut inventore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* End Feature Icons */}
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Services Section ======= */}
        <section id="services" className="services">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Services</h2>
              <p>Veritatis et dolores facere numquam et praesentium</p>
            </header>
            <div className="row gy-4">
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="service-box blue">
                  <i className="ri-discuss-line icon" />
                  <h3>Nesciunt Mete</h3>
                  <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="service-box orange">
                  <i className="ri-discuss-line icon" />
                  <h3>Eosle Commodi</h3>
                  <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto
                    sint. Libero corrupti neque eum hic non ut nesciunt dolorem.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={400}
              >
                <div className="service-box green">
                  <i className="ri-discuss-line icon" />
                  <h3>Ledo Markt</h3>
                  <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur.
                    Minus ea aut. Vel qui id voluptas adipisci eos earum
                    corrupti.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={500}
              >
                <div className="service-box red">
                  <i className="ri-discuss-line icon" />
                  <h3>Asperiores Commodi</h3>
                  <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={600}
              >
                <div className="service-box purple">
                  <i className="ri-discuss-line icon" />
                  <h3>Velit Doloremque.</h3>
                  <p>
                    Cumque et suscipit saepe. Est maiores autem enim facilis ut
                    aut ipsam corporis aut. Sed animi at autem alias eius
                    labore.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-up"
                data-aos-delay={700}
              >
                <div className="service-box pink">
                  <i className="ri-discuss-line icon" />
                  <h3>Dolori Architecto</h3>
                  <p>
                    Hic molestias ea quibusdam eos. Fugiat enim doloremque aut
                    neque non et debitis iure. Corrupti recusandae ducimus enim.
                  </p>
                  <a href="#" className="read-more">
                    <span>Read More</span> <i className="bi bi-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Clients Section ======= */}
        <section id="clients" className="clients">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Our Clients</h2>
              <p>Temporibus omnis officia</p>
            </header>
            <div className="clients-slider swiper">
              <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-1.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-2.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-3.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-4.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-5.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-6.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-7.png"
                    className="img-fluid"
                    alt
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="assets/img/clients/client-8.png"
                    className="img-fluid"
                    alt
                  />
                </div>
              </div>
              <div className="swiper-pagination" />
            </div>
          </div>
        </section>
        {/* End Clients Section */}
        {/* ======= Contact Section ======= */}
        <section id="contact" className="contact">
          <div className="container" data-aos="fade-up">
            <header className="section-header">
              <h2>Contact</h2>
              <p>Contact Us</p>
            </header>
            <div className="row gy-4">
              <div className="col-lg-6">
                <div className="row gy-4">
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-geo-alt" />
                      <h3>Address</h3>
                      <p>
                        A108 Adam Street,
                        <br />
                        New York, NY 535022
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-telephone" />
                      <h3>Call Us</h3>
                      <p>
                        +1 5589 55488 55
                        <br />
                        +1 6678 254445 41
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-envelope" />
                      <h3>Email Us</h3>
                      <p>
                        info@example.com
                        <br />
                        contact@example.com
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="info-box">
                      <i className="bi bi-clock" />
                      <h3>Open Hours</h3>
                      <p>
                        Monday - Friday
                        <br />
                        9:00AM - 05:00PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  action="forms/contact.php"
                  method="post"
                  className="php-email-form"
                >
                  <div className="row gy-4">
                    <div className="col-md-6">
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6 ">
                      <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <input
                        type="text"
                        className="form-control"
                        name="subject"
                        placeholder="Subject"
                        required
                      />
                    </div>
                    <div className="col-md-12">
                      <textarea
                        className="form-control"
                        name="message"
                        rows={6}
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                    </div>
                    <div className="col-md-12 text-center">
                      <div className="loading">Loading</div>
                      <div className="error-message" />
                      <div className="sent-message">
                        Your message has been sent. Thank you!
                      </div>
                      <button type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>{" "}
    </Fragment>
  );
};

export default Landing;
