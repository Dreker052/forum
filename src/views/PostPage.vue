<template>
  <div class="container">
    <div class="cupPostContainer">
      <div class="curPost">
        <div class="curPostTitle">{{ postTitle }}</div>
        <div class="curPostBody">{{ postContent }}</div>
      </div>
    </div>
    <reply-form @add="addReply" />
    <div class="replyList">
      <reply-item v-for="reply in replies" :key="reply.id" :reply="reply" />
    </div>
  </div>
  <message-popup v-if="message != ''">{{ message }}</message-popup>
</template>

<script>
import ReplyForm from "@/components/replyForm.vue";
import ReplyItem from "@/components/replyItem.vue";
import axios from "axios";
import messagePopup from "@/components/messagePopup.vue";
export default {
  components: { ReplyForm, ReplyItem, messagePopup },
  data() {
    return {
      message: "",
      postContent: "",
      postTitle: "",
      replies: [],
    };
  },
  methods: {
    async loadCurPost() {
      const response = await axios.get(
        `http://localhost:5153/api/posts/curpost/${this.$route.params.id}`
      );
      this.postTitle = response.data.Title;
      this.postContent = response.data.Content;
    },
    async loadReplies() {
      const response = await axios.get(
        `http://localhost:5153/api/replies/${this.$route.params.id}`
      );
      this.replies = response.data;
    },
    async addReply(reply) {
      this.message = "";
      await axios
        .post("http://localhost:5153/api/replies", {
          Id: reply.id,
          Content: reply.Content,
          PostId: this.$route.params.id,
        })
        .catch(() => {
          this.showMessage("The field is required");
        });
      this.replies.push(reply);
      this.loadReplies();
    },
    showMessage(message) {
      this.message = message;
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
.replyList {
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
}
</style>
