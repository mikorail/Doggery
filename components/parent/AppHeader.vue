<template>
  <div class="primary">
    <b-navbar toggleable="lg" type="dark" variant="info">
      <b-navbar-brand href="#">Doggery <i class="fa-solid fa-dog"></i>
    </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto mr-50">
          <b-nav-item class="link">
           <NuxtLink to="/">
            Home
           </NuxtLink>
          </b-nav-item>
          <b-nav-item class="link">
            <NuxtLink to="/breed">
              Breed
            </NuxtLink>
          </b-nav-item>
          <b-nav-item class="link">
            <NuxtLink to="/about">
              About Us
            </NuxtLink>
          </b-nav-item>
          <!-- <b-nav-item class="link">
          <NuxtLink to="/guide">
            Site Guide
            </NuxtLink>
          </b-nav-item> -->
          <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name: 'AppHeader'
}
</script>
<style scoped>
a {
  color: whitesmoke;
  display:inline-block;
  margin:0;
}
a:after {
  display:block;
  content: '';
  border-bottom: solid 4px #019fb6;
  transform: scaleX(0);
  transition: transform 250ms ease-in-out;
}
a:hover:after {
  transform: scaleX(2);
}
a.fromRight:after{
  transform-origin:100% 50%;
}
a.fromLeft:after{
  transform-origin:  0% 50%;
  }
</style>
