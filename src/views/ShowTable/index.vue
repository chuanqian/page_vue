<template>
  <div>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="name" label="日期" width="180"> </el-table-column>
      <el-table-column prop="age" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="email" label="地址"> </el-table-column>
    </el-table>
    <div>
      <el-pagination
        small
        @current-change="paginationCurrent"
        layout="prev, pager, next"
        :page-size="pageSize"
        :page-count="currentNum"
        :total="totalNum">
      </el-pagination>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style lang="less" src="./index.less"></style>
