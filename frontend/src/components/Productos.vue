<template>

  <section class="src-components-productos">
     <div>
        <div class="container p-4">

            <div class="row">
                <div class="col-md-4" v-for="producto in productos" :key="producto._id">
                    <div class="card mb-2">
                        <img :src="producto.img" class="card-img-top">
                        <div class="card-body">
                            <h5>{{producto.descripcion}}</h5>
                            <p>{{producto.precio}}</p>
                        </div>
                    </div>
                </div>    
            </div>
            
        </div>
    </div>
  </section>

</template>

<script>

  export default  {
    name: 'src-components-productos',
    props: [],
    mounted () {
      this.getArticles()
    },
    data () {
      return {
        productos: [],
        baseURL: 'http://localhost:3000/',
        endpoint: 'products'
      }
    },
    methods: {
      
      async getArticles(){
            await this.axios.get(`${this.baseURL}${this.endpoint}`)
                            .then(res => this.productos = res.data)
                            .catch(err => console.log(err, 'Error al buscar los productos'))
      }
    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-productos {

  }
</style>
