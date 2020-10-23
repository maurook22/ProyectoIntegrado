<template>

  <section class="src-components-navbar">
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <router-link to="/">
          <a class="navbar-brand" href="#">Home</a>
        </router-link>
              
        <div class="collapse navbar-collapse" id="navbarNav">
          
          <ul class="navbar-nav">

            <li class="nav-item">
              <router-link to="/productos">
                <a class="nav-link" href="#">Productos</a>
              </router-link>  
            </li>

          </ul>

        </div>

      </nav>

  </section>

</template>

<script>

  export default  {
    name: 'src-components-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.src-components-navbar {
}
</style>
