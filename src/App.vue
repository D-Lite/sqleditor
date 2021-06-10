<template>
  <div class="font-sans antialiased h-screen">
    <div>
    <NavBar> </NavBar>
    </div>
    <div id="main" class="relative  md:flex">
      <SideNav/> <Section/>
    </div>
  </div>
</template>


<script>
import NavBar from './components/NavBar.vue'
import Section from './components/Section'
import SideNav from './components/SideNav.vue'

import axios from "axios"
// import data from "./../public/customers.json"


export default {
  name: 'App',
  components: {
    NavBar, 
    SideNav,
    Section,  
  },
  data: function() {
    return {
      results: []
    }
  },
  mounted() {
    // let url = 'https://api.enye.tech/v1/challenge/records';
    let url = 'customers.csv';
    axios.get(url)
    .then((response) => {
      // alert(response.data)
      console.log(response)
    }).catch((err) => {
        console.log(err);
        alert(err);
    });    
  },
  methods() {
    
  }
}
</script>

<style>

</style>
