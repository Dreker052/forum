<template>
  <reply-form />
  <div class="container">
    <div class="cupPostContainer">
      <div class="curPost">
        <div class="curPostTitle"></div>
        <div class="curPostBody"></div>
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
      replies: [
        { id: 1, Title: "asd1", Content: "fgh1" },
        { id: 2, Title: "asd2", Content: "fgh2" },
        { id: 3, Title: "asd3", Content: "fgh3" },
      ],
    };
  },
  methods: {
    async loadCurPost() {
      const response = await axios.get(
        `http://localhost:5153/api/posts/${this.$route.params.id}`
      );
      // response.Title = this.Title;
      // response.Content = this.Content;
      console.log(response);
    },
    // async loadReplies() {
    //   const response = await axios.get(
    //     `http://localhost:5153/api/replies/${this.$route.params.id}`
    //   );
    //   this.repies = response.data;
    // },
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
