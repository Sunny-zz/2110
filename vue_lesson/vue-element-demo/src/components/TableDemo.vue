<template>
  <div>
    <el-table :data="tableData">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="date" label="时间" width="150"> </el-table-column>
      <el-table-column prop="title" label="标题" width="400"> </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <!-- 自定义列模板 -->
      <el-table-column label="重要性">
        <!-- 作用域插槽是 el-table-column 组件自己写好的 -->
        <!-- 作用于插槽传递回来的内容是一个 {row: {表格数据}} -->
        <template v-slot="{ row }">
          <el-rate disabled :value="row.importance"></el-rate>
        </template>
      </el-table-column>
      <el-table-column prop="visit_count" label="阅读数"> </el-table-column>
      <el-table-column label="状态">
        <template v-slot="{ row }">
          <el-tag :type="row.status === 'draft' ? 'info' : ''">{{
            row.status
          }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column width="220" label="操作">
        <template v-slot="{ row }">
          <div class="btns">
            <el-popconfirm title="确定删除吗？" @confirm="delBook(row.id)">
              <el-button slot="reference" type="danger" size="mini"
                >删除</el-button
              >
            </el-popconfirm>
            <el-button type="primary" size="mini">编辑</el-button>
            <el-button
              @click="changeStatus(row)"
              :type="row.status === 'published' ? '' : 'success'"
              size="mini"
              >{{ row.status === "draft" ? "发布" : "草稿" }}</el-button
            >
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "uhu78",
          date: "1987-06-26 20:36",
          title: "Opkrylrb Wvdbprko Fksbjc Zqhjqw Tkfjwm Mtvpoxcbm EwmodfJapan",
          author: "Sarah",
          importance: 2,
          visit_count: 313,
          status: "published",
        },
        {
          id: "6y7t7",
          date: "1981-02-04 10:48",
          title: "Bhkucoqtrv Bkelr Jugifl Ftylpk RupmehqJapan",
          author: "Larry",
          importance: 1,
          visit_count: 844,
          status: "draft",
        },
        {
          id: "yhgr45",
          date: "1977-11-22 06:43",
          title:
            "Bbt Tltrqbg Wlpihfnh Kkevvzyo Cjhmbwtmg Pxepqpng HylfzjeJapan",
          author: "Amy",
          importance: 3,
          visit_count: 3754,
          status: "published",
        },
      ],
    };
  },

  methods: {
    changeStatus(row) {
      // const book = this.tableData.find( item => item.id === id)
      // console.log(book === row)
      row.status = row.status === "draft" ? "published" : "draft";
    },
    delBook(id) {
      this.tableData = this.tableData.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
</style>