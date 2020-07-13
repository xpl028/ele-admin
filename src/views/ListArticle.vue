<template>
  <el-table :data="articles">
    <el-table-column prop="title" label="标题" width="140"> </el-table-column>
    <el-table-column prop="content" label="内容" width="120"></el-table-column>
    <el-table-column fixed="right" label="操作" width="100">
      <template slot-scope="scope">
        <el-button @click="edit(scope.row._id)" type="text" size="small"
          >编辑</el-button
        >
        <el-button @click="del(scope.row._id)" type="text" size="small"
          >删除</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    fetch() {
      this.$http.get("/articles").then((res) => {
        this.articles = res.data;
      });
    },

    edit(id) {
      this.$router.push(`/articles/edit/${id}`);
    },

    del(id) {
      this.$http.delete(`/articles/${id}`).then(() => {
        this.$message({
          message: "文章删除成功",
          type: "success",
        });

        this.fetch();
      });
    },
  },
};
</script>
