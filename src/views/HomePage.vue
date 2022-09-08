<template>
  <div class="container">
    <button
      v-for="subject in subjects"
      :key="subject.Title"
      @click="$router.push(`/${subject.Title}`)"
      class="subjectLink"
    >
      {{ subject.Title }}
    </button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HomeView",
  data() {
    return {
      subjects: [],
    };
  },

  methods: {
    async loadSubjects() {
      const response = await axios.get("http://localhost:5153/api/subjects");
      this.subjects = response.data;
    },
  },
  mounted() {
    this.loadSubjects();
  },
};
</script>

<style scoped>
.subjectLink {
  text-decoration: none;
  color: black;
  font-size: 20px;
  margin: 10px;
  display: inline-block;
  border: 3px solid lightblue;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
}
</style>
