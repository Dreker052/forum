<template>
  <div class="container">
    <h1>{{ $route.params.title }}</h1>
    <post-form @add="addPost"></post-form>
    <post-list :posts="posts"></post-list>
  </div>
</template>

<script>
import postForm from "@/components/postForm.vue";
import postList from "@/components/postList.vue";
import axios from "axios";
export default {
  components: { postForm, postList },
  data() {
    return {
      posts: [],
    };
  },

  methods: {
    async addPost(post) {
      await axios.post("http://localhost:5153/api/posts", {
        Id: post.id,
        Title: post.title,
        Content: post.body,
        SubjectTitle: this.$route.params.title,
      });
      this.posts.push(post);
      this.loadPosts();
    },
    async loadPosts() {
      const response = await axios.get(
        `http://localhost:5153/api/posts/${this.$route.params.title}`
      );
      this.posts = response.data;
    },
  },

  mounted() {
    this.loadPosts();
  },
};
</script>

<style scoped>
.container {
  border: none;
}
</style>
