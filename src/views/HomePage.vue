<template>
  <div class="container">
    <button
      v-for="subject in subjects"
      :key="subject.title"
      @click="$router.push(`/${subject.title}`)"
      class="subjectLink"
    >
      {{ subject.title }}
    </button>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      subjects: [
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
        { title: "series" },
        { title: "science" },
        { title: "programming" },
        { title: "learning languages" },
        { title: "anime" },
        { title: "movies" },
        { title: "video games" },
        { title: "books" },
        { title: "politics" },
      ],
    };
  },

  methods: {},
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
