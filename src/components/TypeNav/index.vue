<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container" @mouseleave="leaveIndex">
      <h2 @mouseenter="enterShow" class="all">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <!-- 三级联动 -->
      <!-- transition动画过渡：该元素或者组件 必须有 v-show 或者 v-if  -->
      <transition name="sort">
        <div class="sort" v-show="isShow">
          <!-- 使用事件委托+编程式导航 完成路由跳转与传参->搜索页   goSearch事件
                    参数形式：/search?categoryName=XXX&category3Id=XX
                  借助自定义属性，帮助确定点击的是否为a标签与确定传递参数中 id(具体是几级菜单)  
                   -->
          <div class="all-sort-list2" @click="goSearch">
            <div
              class="item"
              v-for="(c1, index) in categoryList"
              :key="c1.categoryId"
              :class="{ cur: currentIndex == index }"
            >
              <h3 @mouseenter="changeIndex(index)">
                <a
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                  >{{ c1.categoryName }}</a
                >
              </h3>
              <!-- 二、三级分类 -->
              <div
                class="item-list clearfix"
                :style="{ display: currentIndex == index ? 'block' : 'none' }"
              >
                <div class="subitem">
                  <dl
                    class="fore"
                    v-for="c2 in c1.categoryChild"
                    :key="c2.categoryId"
                  >
                    <dt>
                      <a
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                        >{{ c2.categoryName }}</a
                      >
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                          >{{ c3.categoryName }}</a
                        >
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
// 按需引入 节流函数（node_modules已存在 无需下载）
import throttle from "lodash/throttle";

export default {
  name: "TypeNav",
  data() {
    return {
      currentIndex: -1,
      isShow: true,
    };
  },
  mounted() {
    if (this.$route.path !== "/home") {
      this.isShow = false;
    }
  },
  computed: {
    ...mapState({
      categoryList: (state) => state.home.categoryList,
    }),
  },
  methods: {
    // 使用lodash 完成三级联动的节流
    // throttle 别使用箭头函数，可能导致上下文this 指向不同
    // 一级菜单：鼠标进去给导航标题加上背景
    changeIndex: throttle(function (index) {
      this.currentIndex = index;
    }),
    // 一级菜单:鼠标移出 取消背景颜色
    leaveIndex() {
      this.currentIndex = -1;
      if (this.$route.path !== "/home") {
        this.isShow = false;
      }
    },

    // goSearch  使用事件委托+编程式导航 完成路由跳转与传参->搜索页
    // 参数形式：/search?categoryName=XXX&category3Id=XX
    goSearch(e) {
      let { categoryname, category1id, category2id, category3id } =
        e.target.dataset;
      // 如果 该元素有categoryname 属性 那就是a标签
      if (categoryname) {
        let location = { name: "search" };
        let query = { categoryName: categoryname };
        // 一级分类 二级分类 三级分类
        if (category1id) {
          query.category1Id = category1id;
        } else if (category2id) {
          query.category2Id = category2id;
        } else {
          query.category3Id = category3id;
        }
        // 如果有params 就合并参数
        if (this.$route.params) {
          // 整理参数
          location.query = query;
          this.$router.push(location);
        }
      }
    },
    // 当在search组件中  三级联动菜单默认为隐藏，当鼠标进入是 进行展示 + 动画过渡 transition
    enterShow() {
      //
      if (this.$route.path !== "/home") {
        this.isShow = true;
      }
    },
  },
};
</script>


<style lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          // 将原本的css样式控制二/三级菜单的显示与隐藏 改为使用js控制
          // &:hover {
          //   .item-list {
          //     display: block;
          //   }
          // }
        }
        .cur {
          background: skyblue;
        }
      }
    }
    // 过渡动画 进入的开始状态
    .sort-enter {
      height: 0px;
    }
    // 过渡动画 进入的结束状态

    .sort-enter-to {
      height: 461px;
    }
    // 定义动画的时间，速率
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>