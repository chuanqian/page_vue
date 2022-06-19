export default {
  data() {
    return {
      currentNum: 1,
      pageSize: 3,
      totalNum: 0,
      tableData: [],
    }
  },
  methods: {
    paginationCurrent(val) {
      this.currentNum = val
      this.sreachBrandtable()
    },
    sreachBrandtable() {
      this.$http
        .get('pageproject/user/getUserList', {
          params: {
            currentNum: this.currentNum,
            pageSize: this.pageSize,
          },
        })
        .then((res) => {
          this.currentNum = res.data.currentNum
          this.pageSize = res.data.page_number
          this.totalNum = res.data.total
          this.tableData = res.data.pageData
        })
        .catch(() => {
          console.log('rdfdfdfdfdf')
        })
    },
  },
  beforeMount() {
    this.$http
      .get('pageproject/user/getUserList', {
        params: {
          currentNum: this.currentNum,
          pageSize: this.pageSize,
        },
      })
      .then((res) => {
        this.currentNum = res.data.currentNum
        this.pageSize = res.data.page_number
        this.totalNum = res.data.total
        this.tableData = res.data.pageData
      })
      .catch(() => {
        console.log('rdfdfdfdfdf')
      })
  },
}
