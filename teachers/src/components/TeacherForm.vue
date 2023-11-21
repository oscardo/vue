    <template>
    <div>
            <section>
                <h3>añadir profesor</h3>
                <div>
                    <label>Nombre</label><input type="text" v-model='teacher.teacherName'><br>
                    <label>Apellido</label><input type="text" v-model="teacher.surname"><br>
                    <label>DNI</label><input type="text" v-model="teacher.dni"><br>
                    <label>Materias</label><input type="text" v-model="subjects"><button @click="handleSubject()">Agregar</button><br>
                    <div>
                        <ul>
                            <li v-for="(subj, index) in teacher.subjects" :key="index">{{ subj }}</li>
                        </ul>
                    </div>
                    <label>Documentos</label><input type="checkbox" v-model="teacher.docs"><br>
                    <button @click="handlaTeacher()">Agregar</button><br>
                </div>
            </section>
            <section>
                <h3>LISTADO DE DOCENTES</h3>
            <table>
                <tr>
                <td>Nombre</td>
                <td>Apellido</td>
                <td>DNI</td>
                <td>Materias</td>
                <td>Documentación</td>
                </tr>
                <tr v-for="tea in teachers" :key="tea.dni">
                    <td>{{tea.teacherName}}</td>
                    <td>{{tea.surname}}</td>
                    <td>{{tea.dni}}</td>
                    
                    <td>
                        <ul>
                            <li v-for="(mate, index) in tea.subjects" :key="index">{{ mate }}</li>
                        </ul>
                    </td>
                    <td v-if="tea.docs"><b>Entregada</b></td>
                    <td v-else><b>No entregada</b></td>
                </tr>
            </table> 
            </section>
    </div>
    </template>
    <script lang="ts" setup>
        import { ref, Ref } from 'vue';
        
        interface Iteacher{
            teacherName: string,
            surname: string,
            dni: string,
            subjects: Array<string>,
            docs: boolean
        }
        let teacher:Ref<Iteacher> = ref({
            teacherName: '',
            surname: '',
            dni: '',
            subjects: [],
            docs: false
        })

        let teachers:Ref<Array<Iteacher>> = ref([])
        let subjects:Ref<string> = ref('')

        const handleSubject = () => {
            teacher.value.subjects.push(subjects.value)   
            subjects.value = ''
        }

        const handlaTeacher = () => {

            teachers.value.push({
                teacherName: teacher.value.teacherName,
                surname: teacher.value.surname,
                dni: teacher.value.dni,
                subjects: teacher.value.subjects,
                docs: teacher.value.docs
            })
            teacher.value.teacherName = ''
            teacher.value.dni = ''
            teacher.value.docs = false
            teacher.value.surname = ''
            teacher.value.subjects = []

        }
    </script>
    <style scoped>
    
    </style>