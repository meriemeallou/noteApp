<template>
    <div>
       <h1 class="text-center my-4">Your Notes</h1>
       <div class="row">
         <div class="col-md-4 mb-4" v-for="note in notes" :key="note.id">
           <div class="card">
             <div class="card-header d-flex justify-content-between align-items-center">
               <h5 class="card-title">{{ note.name }}</h5>
               <p>{{ note.date }}</p>
               <button type="button" class="btn-close" data-bs-dismiss="card" aria-label="Close" v-on:click="deleteN(note.id)"></button>
              </div>
             <div class="card-body">
               <p class="card-text">{{ note.description }}</p>
             </div>
             <div class="card-footer">
              <button type="submit" class="btn btn-outline-primary custom-btn">
                <router-link  :to="'/update/'+note.id" class="link">Update</router-link>
              </button>

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
  async deleteN(id){
          let result= await axios.delete('http://localhost:3000/notes/'+id)
          if(result.status===200)
          {
            this.loadData()
          }
        },
    async loadData() {
      try {
        let result = await axios.get('http://localhost:3000/notes');
        this.notes = result.data;
      } catch (error) {
        console.error('Error loading notes:', error);
      }
    },
 },
 async mounted() {
    this.loadData();
 },
};

</script>
<style>
.btn-outline-primary{
background-color: transparent; 
border-color: rgb(85, 85, 168);
color: rgb(85, 85, 168);
text-decoration: none;
}
.link{
  text-decoration: none;
  color: rgb(85, 85, 168);
}
.link:hover{
  text-decoration: none;
  color:white;
}

.btn-outline-primary:hover {
background-color: rgb(85, 85, 168); 
color: white; 
}
</style>
