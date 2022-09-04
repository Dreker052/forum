<template>
  <reply-form />
  <div class="container">
    <div class="curPost"></div>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from "@/components/postList.vue";
import ReplyForm from "@/components/replyForm.vue";
export default {
  components: { PostList, ReplyForm },
  data() {
    return {
      posts: [
        { id: 1, title: "asd1", body: "fgh1" },
        { id: 2, title: "asd2", body: "fgh2" },
        { id: 3, title: "asd3", body: "fgh3" },
      ],
    };
  },
};
</script>

<style scoped>
.curPost {
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
  margin-bottom: 5px;
}
.container {
  border: none;
}
</style>
