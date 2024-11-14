<template>
    <div>
      <h2>Iniciar Sesión con cambio</h2>
      <input v-model="email" type="email" placeholder="Correo electrónico">
      <input v-model="password" type="password" placeholder="Contraseña">
      <button @click="singIn">Iniciar Sesión</button>
    </div>   
  </template>


<script>
import { signInWithEmailAndPassword,auth } from '@/auth';

export default{
    data() {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      async singIn() {
        try {
          //La misma funcion pero forma diferente que registro
            const {email, password} = this;            
            const {user} = await signInWithEmailAndPassword(auth, email, password);
            console.log(user)

        } catch (error) {
          console.error('Error al iniciar sesión:', error);
        }
      }
    }
  
}





</script>