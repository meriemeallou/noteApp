<template>
<NoteForm />
<NoteList />
</template>

<script>
import NoteForm from './components/NoteForm.vue';
import NoteList from './components/NoteList.vue';


export default {
  name: 'App',
  components:{
    NoteForm,
    NoteList
  }
}
</script>

