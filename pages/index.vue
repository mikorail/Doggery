<template>
  <div class="landing-page">
    <div class="parallax">
      <div class="overlay">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <h1>Welcome to Doggery </h1>
              <p>"Breeding Excellence, Nurturing Companionship."</p>
                <!-- <button class="btn btn-primary" >
                  <NuxtLink to="/breed" style="color:whitesmoke;text-decoration:none">
                      Check our breeding list here
                </NuxtLink>
                </button> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'index'
}
</script>

<style scoped>
.landing-page {
  position: relative;
  height: 100vh;
  overflow: hidden;
}

.parallax {
  position: relative;
  height: 100vh;
  background-image: url('https://www.pixel4k.com/wp-content/uploads/2018/11/running-dogs-4k_1542237721.jpg.webp');
  background-size: cover;
  background-position: center center;
  transform-style: preserve-3d;
  z-index: -1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}

.content {
  padding: 50px;
}
</style>
