<template>
  <reply-form />
  <div class="container">
    <div class="cupPostContainer">
      <div class="curPost">
        <div class="curPostTitle">{{ Title }}</div>
        <div class="curPostBody">{{ Content }}</div>
      </div>
    </div>
    <post-list :posts="replies" />
  </div>
</template>

<script>
import PostList from "@/components/postList.vue";
import ReplyForm from "@/components/replyForm.vue";
import axios from "axios";
export default {
  components: { PostList, ReplyForm },
  data() {
    return {
      Content: "",
      Title: "",
      replies: [],
    };
  },
  methods: {
    async loadCurPost() {
      const response = await axios.get(
        `http://localhost:5153/api/posts/${this.$route.params.id}`
      );
      this.Title = response.data.Title;
      this.Content = response.data.Content;
    },
    async loadReplies() {
      const response = await axios.get(
        `http://localhost:5153/api/replies/${this.$route.params.id}`
      );
      this.replies = response.data;
    },
  },
  mounted() {
    this.loadCurPost();
    this.loadReplies();
  },
};
</script>

<style scoped>
* {
  font-size: 18px;
}
.cupPostContainer {
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
  margin-bottom: 5px;
}
.curPost {
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  background-color: white;
  font-weight: 600;
}
.curPostTitle {
  margin-bottom: 10px;
}
.container {
  border: none;
}
</style>
