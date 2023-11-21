<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <form>
            <h1>DOCENTE</h1>
            <table>
                <tr>
                <td>
                    NOMBRE DOCENTE: 
                </td>
                <td>
                    <input type="text" v-model="nombredocente" >
                </td>
                </tr>
                <tr>
                    <td>
                        APELLIDO DOCENTE: 
                    </td>
                    <td>
                        <input type="text" v-model="apellidodocente" >
                    </td>
                </tr>
                <tr>
                    <td>
                        
                    </td>
                    <td>
                        
                    </td>
                </tr>
                <tr>
                    <td>
                        DNI:             
                    </td>
                    <td>
                        <input type="number" v-model="dnidocente" >            
                    </td>
                </tr>
                <tr>
                    <td>
                        Materias del Docente:             
                    </td>
                    <td>
                        <input type="text" v-model="materiasdocente" >               
                    </td>
                </tr>
                <tr>
                    <td>
                        Todos los papeles: 
                    </td>
                    <td>
                        <input type="checkbox" v-model="papelesdocente"/>            
                    </td>
                </tr>
                <tr>
                    <td colspan="2">
                        <button @click="validar()">Agregar</button>
                    </td>
                </tr>
                <tr>
                    <td>
                        <h1>{{ consolidado }}</h1>
                    </td>
                </tr>
            </table>
            
            
            <!-- <select v-model="country">
                <option value="Spain">Spain</option>
                <option value="UK">UK</option>
                <option value="Italy">Italy</option>
                <option value="Portugal">Portugal</option>
            </select> -->
        </form>
    </div>
    </template>
    
    <script lang="ts" setup>
    import {ref } from 'vue';
    let nombredocente = ref('')
    let apellidodocente = ref('')
    let dnidocente = ref(0)
    let materiasdocente = ref('')
    let papelesdocente = ref(false)
    let consolidado = ref('')
    
    const validar = () => ({
        consolidado:  ': ' + nombredocente.value + ',' + apellidodocente.value
    })
    //let agree =  ref(true)
    //let country = ref('Spain')
    </script>
    <style scoped>
    
    </style>
    