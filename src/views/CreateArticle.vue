<template>
  <el-form
    @submit.native.prevent="onSubmit"
    ref="form"
    :model="article"
    label-width="120px"
  >
    <el-form-item label="文章标题">
      <el-input v-model="article.title"></el-input>
    </el-form-item>
    <el-form-item label="文章内容">
      <el-input v-model="article.content"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">保存</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      article: {
        name: "",
        content: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$http.post("articles", this.article).then(() => {
        this.$message({
          message: "文章创建成功",
          type: "success",
        });

        this.$router.push("/articles/index");
      });
    },
  },
};
</script>
