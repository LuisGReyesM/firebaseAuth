<template>
  <div>
    <h1>Esta es una vista protegida</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script>
import {signOut, auth} from '@/auth'
import {useRouter} from 'vue-router'

export default{

  setup(){
    const router = useRouter()
    const logout = async() => {
      try{
        await signOut(auth)     
        router.push('/')
      } catch(error){
        console.error('Error al desloguearse:', error)
      }     
    }
    return {
      logout
    }
  }
}
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
