<template>
  <div>
    <section class="jumbotron text-center">
      <h1 class="display-4">Welcome to Doggery</h1>
      <p class="lead">
        We are passionate about dogs and dedicated to providing the best
        furry companions for you and your family.
      </p>
      <a href="#contact" class="btn btn-primary">Contact Us</a>
    </section>

    <section class="container py-5">
      <div class="row">
        <div class="col-lg-6">
          <h2>Our Story</h2>
          <p>
            At Doggery, we started with a simple vision: to bring joy and
            happiness to every dog owner. Our love for dogs inspired us to
            create a place where people can find their perfect four-legged
            companion.
          </p>
          <p>
            With years of experience in dog breeding, we have developed a deep
            understanding of different breeds and their unique qualities. We
            strive to maintain the highest standards of breeding practices to
            ensure the health and well-being of our dogs.
          </p>
          <p>
            Whether you're looking for a loyal and protective guardian or a
            playful and energetic companion, we have a wide selection of
            well-bred dogs that will melt your heart.
          </p>
        </div>
        <div class="col-lg-6">
          <img
            src="https://via.placeholder.com/500"
            alt="About Us Image"
            class="img-fluid rounded"
          />
        </div>
      </div>
    </section>

    <section class="bg-light py-5">
      <div class="container text-center">
        <h2>Our Mission</h2>
        <p>
          Our mission is to connect loving families with healthy and happy
          dogs. We believe that every dog deserves a loving home, and we are
          committed to finding the perfect match for each dog and owner.
        </p>
        <p>
          We prioritize the well-being of our dogs by providing them with a
          safe and comfortable environment. Our dedicated team of professionals
          ensures that all our dogs receive proper care, nutrition, and
          socialization.
        </p>
        <p>
          We also educate our customers on responsible dog ownership and
          provide ongoing support to help them create a strong bond with their
          new furry friend.
        </p>
      </div>
    </section>

    <section id="contact" class="container py-5">
      <div class="text-center">
        <h2>Contact Us</h2>
        <p>
          Have a question or interested in one of our dogs? Reach out to us
          using the contact information below.
        </p>
        <div>
          <i class="fas fa-envelope mr-2"></i>info@doggery.com
        </div>
        <div>
          <i class="fas fa-phone-alt mr-2"></i>+1 123-456-7890
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'about',
};
</script>
