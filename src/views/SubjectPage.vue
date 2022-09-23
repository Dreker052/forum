<template>
  <div class="container">
    <h1>{{ $route.params.title }}</h1>
    <post-form @add="addPost"></post-form>
    <div class="postList">
      <post-item
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @click="$router.push(`/${$route.params.title}/${post.Id}`)"
      />
    </div>
  </div>
  <message-popup v-if="message != ''">{{ message }}</message-popup>
</template>

<script>
import postForm from "@/components/postForm.vue";
import axios from "axios";
import PostItem from "@/components/postItem.vue";
import messagePopup from "@/components/messagePopup.vue";
export default {
  components: { postForm, PostItem, messagePopup },
  data() {
    return {
      message: "",
      posts: [],
    };
  },

  methods: {
    async addPost(post) {
      this.message = "";
      await axios
        .post("http://localhost:5153/api/posts", {
          Id: post.id,
          Title: post.title,
          Content: post.body,
          SubjectTitle: this.$route.params.title,
        })
        .catch(() => {
          this.showMessage("The fields is required");
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
    showMessage(message) {
      this.message = message;
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

.postList {
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
}
</style>
