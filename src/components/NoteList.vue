<template>
    <div>
       <h1 class="text-center my-4">Your Notes</h1>
       <div class="row">
         <div class="col-md-4 mb-4" v-for="note in notes" :key="note.id">
           <div class="card">
             <div class="card-body">
               <h5 class="card-title">{{ note.name }}</h5>
               <p class="card-text">{{ note.description }}</p>
             </div>
           </div>
         </div>
       </div>
    </div>
   </template>   
<script>
import axios from 'axios';

export default {
 name: 'NoteList',
 data() {
    return {
      notes: [],
    };
 },
 methods: {
    async loadData() {
      try {
        let result = await axios.get('http://localhost:3000/notes');
        this.notes = result.data;
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    },
 },
 created() {
    this.loadData();
 },
};

</script>
