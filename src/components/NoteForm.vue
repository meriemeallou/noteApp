<template>
    <div class="container my-3">
       <h1>Add a Note</h1>
       <div class="card my-2 mx-2">
         <div class="card-body">
           <form @submit.prevent="addNote">
             <div class="form-group">
               <input type="text" placeholder="Enter Note name here" class="form-control" v-model="name"><br>
               <textarea class="form-control" rows="3" placeholder="Enter note description here" v-model="description"></textarea>
             </div>
             <button type="submit" class="btn btn-primary" >Add Note</button>
           </form>
         </div>
       </div>
       <h1>Your Notes</h1>
       <div class="row container-fluid" id="notes"></div>
    </div>
   </template>
   
   <script>
   import axios from 'axios';
   
   export default {
    name: 'NoteForm',
    data() {
       return {
         name: '',
         description: ''
       }
    },
    methods: {
       async addNote() {
         if (this.name || this.description) {
           try {
             let result = await axios.post('http://localhost:3000/notes', {
               name: this.name,
               description: this.description
             });
             console.log(result);
             this.name = '';
             this.description = '';
           } catch (error) {
             console.error('Error adding note:', error);
           }
         }
       }
    }
   }
   </script>
   