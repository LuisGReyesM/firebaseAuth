<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/registro">Registro</router-link>
    <router-link to="/about" v-if="isAuthenticated">About</router-link>

    <RouterView />
  </div>
</template>

<script>
import { onAuthStateChanged,auth} from '@/auth';
export default{
  name: "App",
  data(){
    return{
      isAuthenticated: false
    }
  },
  created(){
    onAuthStateChanged(auth,(user)=>{
      this.isAuthenticated = !!user
      //El codigo anterior es lo mismo que esto
      // if (user){
      //   this.isAuthenticated = true
      // }else{
      //   this.isAuthenticated = false
      // }
    }
  )
  }
}
</script>