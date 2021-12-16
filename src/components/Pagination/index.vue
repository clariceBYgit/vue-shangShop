<template>
  <div class="pagination">
    <button :disabled="pageNo === 1" @click="$emit('getPageNo', pageNo - 1)">
      上一页
    </button>
    <button
      @click="$emit('getPageNo', 1)"
      v-if="starNumAndEndNum.startNum > 1"
      :class="{ active: pageNo == 1 }"
    >
      1
    </button>
    <button v-if="starNumAndEndNum.startNum > 2">···</button>

    <button
      @click="$emit('getPageNo', item)"
      v-for="(item, index) in starNumAndEndNum.endNum"
      :key="index"
      v-if="item >= starNumAndEndNum.startNum"
      :class="{ active: pageNo == item }"
    >
      {{ item }}
    </button>

    <button v-if="starNumAndEndNum.endNum < totalPage - 1">···</button>
    <button
      @click="$emit('getPageNo', totalPage)"
      v-if="starNumAndEndNum.endNum < totalPage"
       :class="{active:pageNo==totalPage}"
    >
      {{ totalPage }}
    </button>
    <button
      :disabled="pageNo == totalPage"
      @click="$emit('getPageNo', pageNo + 1)"
    >
      下一页
    </button>

    <button style="margin-left: 30px">共 {{ total }}条</button>
    <h1>{{ starNumAndEndNum }}---- 当前页：{{ pageNo }}</h1>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: ["pageNo", "pageSize", "total", "continues"],
  computed: {
    // 一共有多少页
    totalPage() {
      return Math.ceil(this.total / this.pageSize);
    },
    // 	分页器连续页码的个数：5 | 7 【奇数】 continues   算出 其start开始页 end结束页
    starNumAndEndNum() {
      let { pageNo, totalPage, continues } = this;
      let startNum = 0;
      let endNum = 0;
      // 1 2 3 4 5  --> 若totalPage刚好小于continues时
      if (totalPage < continues) {
        startNum = 1;
        endNum = totalPage;
      } else {
        //  6 7 8 9 10  当前页8 连续页码 5 | 7
        startNum = pageNo - parseInt(continues / 2);
        endNum = pageNo + parseInt(continues / 2);
        //   若当前页 为1    则此时计算的startNum为 0 | 负数  纠正错误
        if (startNum < 1) {
          startNum = 1;
          endNum = continues;
        }
        //  若共31页 当前页为 30页 则此时计算的endNum为32 超过了总页数 纠正错误
        //  27   28 29 30 31 (32)
        if (endNum > totalPage) {
          startNum = totalPage - continues + 1;
          endNum = totalPage;
        }
      }

      return { startNum, endNum };
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
    .active {
      background: skyblue;
    }
  }
}
</style>