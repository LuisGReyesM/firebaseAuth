<script>
import { createUserWithEmailAndPassword,auth } from '@/auth';

export default{
  data() {
    return {
      email: '',
      password: ''
    }
  },
  
  methods: {
    async register() {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth,this.email, this.password);
        const user = userCredential.user;
        console.log('Usuario registrado', user);
        
      } catch (error) {
        console.error('Error al registrar:', error.message);
      }
    }
  }
}
</script>

<template>
  <div>
    <h2>Registro</h2>
    <input v-model="email" type="email" placeholder="Correo electrónico">
    <input v-model="password" type="password" placeholder="Contraseña">
    <button @click="register">Registrarse</button>
  </div>

  <!-- <RouterView /> -->
</template>

<style scoped>

</style>
