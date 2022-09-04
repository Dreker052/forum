<template>
  <div class="list">
    <div
      @click="$router.push(`/${$route.params.title}/${post.id}`)"
      class="postList"
      v-for="post in posts"
      :key="post.id"
    >
      <div><strong>Title: </strong>{{ post.title }}</div>
      <div><strong>Body: </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      requared: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.list {
  width: 100%;
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 10px 5px 5px lightgray;
}
.postList {
  border: 3px solid lightblue;
  border-radius: 10px;
  padding: 10px;
  width: 100%;
  margin-bottom: 5px;
  background-color: white;
  box-sizing: border-box;
}
</style>
