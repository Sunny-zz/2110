<template>
  <div>
    <el-table :data="tableData">
      <el-table-column type="index" label="序号" width="100"></el-table-column>
      <el-table-column prop="time" label="时间" width="150"> </el-table-column>
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
            <el-button
              @click="edit(row)"
              type="primary"
              size="mini"
              >编辑</el-button
            >
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

    <el-dialog title="Edit" :visible.sync="dialogFormVisible">
      <el-form
        :model="form"
        :rules="rules"
        label-width="80px"
        label-position="left"
        ref="myForm"
      >
        <el-form-item label="时间" prop="time">
          <el-date-picker
            v-model="form.time"
            type="datetime"
            placeholder="选择日期时间"
            value-format="yyyy-MM-dd HH:mm"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="title" label="标题">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="状态">
          <el-select v-model="form.status" placeholder="选择书籍状态">
            <el-option label="draft" value="draft"></el-option>
            <el-option label="published" value="published"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="重要性">
          <el-rate v-model="form.importance" :max="3"></el-rate>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm('myForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: "uhu78",
          time: "1987-06-26 20:36",
          title: "Opkrylrb Wvdbprko Fksbjc Zqhjqw Tkfjwm Mtvpoxcbm EwmodfJapan",
          author: "Sarah",
          importance: 2,
          visit_count: 313,
          status: "published",
        },
        {
          id: "6y7t7",
          time: "1981-02-04 10:48",
          title: "Bhkucoqtrv Bkelr Jugifl Ftylpk RupmehqJapan",
          author: "Larry",
          importance: 1,
          visit_count: 844,
          status: "draft",
        },
        {
          id: "yhgr45",
          time: "1977-11-22 06:43",
          title:
            "Bbt Tltrqbg Wlpihfnh Kkevvzyo Cjhmbwtmg Pxepqpng HylfzjeJapan",
          author: "Amy",
          importance: 3,
          visit_count: 3754,
          status: "published",
        },
      ],
      editBook: null,
      dialogFormVisible: false,
      form: {
        time: "",
        title: "",
        importance: 0,
        status: "",
      },
      rules: {
        time: [{ required: true, message: "请选择时间", trigger: "blur" }],
        title: [
          {
            required: true,
            whitespace: true,
            message: "请输入标题",
            trigger: "blur",
          },
          { min: 3, max: 25, message: "长度在 3 到 5 个字符", trigger: "blur" },
          // 自定义的检验规则
          {
            validator(rule, value, callback) {
              return value.includes("哈哈哈")
                ? callback(new Error(`敏感词汇`))
                : callback();
            },
            message: "不能包含敏感词汇",
            trigger: "blur",
          },
        ],
      },
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
    // 公共表单校验函数
    checkForm(formName, callback) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          callback();
        } else {
          return false;
        }
      });
    },
    edit(book){
      this.dialogFormVisible = true
      this.editBook = book
      this.form = {
        title: book.title,
        time: book.time,
        importance: book.importance,
        status: book.status
      }
    },
    confirm(formName) {
      // 先校验输入内容， 把 form 自带的检验直接走一遍，不利用 trigger
      this.checkForm(formName, () => {
        // 如没修改不编辑 ， 直接关闭对话框
        const {
          title: editTitle,
          time: editTime,
          importance: editImportance,
          status: editStatus,
        } = this.form;
        const { title, time, importance, status, id } = this.editBook;
        if (
          !(
            editTitle === title &&
            editTime === time &&
            editImportance === importance &&
            editStatus === status
          )
        ) {
          let book = this.tableData.find((item) => item.id === id);
          Object.assign(book, this.form)
        }
        this.dialogFormVisible = false;
      });
    },
  },
};
</script>

<style>
</style>