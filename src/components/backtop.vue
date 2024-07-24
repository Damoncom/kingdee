<template>
    <div id="goTop" v-show="goTopShow">
      <a @click="goTop" class="toTop">
        <!-- <i class="el-icon-caret-top"></i> -->
        <i class="iconfont icon-zhiding"></i>
    </a>
    </div>
  </template>
  
  <script>
    export default {
      name: "backTop",
      data() {
        return {
          scrollTop: '',
          goTopShow: false,
        }
      },
      created() {
      },
      methods: {
        handleScroll() {
          this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          if (this.scrollTop > 150) {//设置页面滑动多少显示按钮
            this.goTopShow = true
          } else {
            this.goTopShow = false;
          }
        },
        goTop() {
          let timer = null,
            _that = this;
          cancelAnimationFrame(timer)
          timer = requestAnimationFrame(function fn() {
            if (_that.scrollTop > 0) {
              _that.scrollTop -= 50;//回到顶部的速度
              _that.scrollTop -= 70;//回到顶部的速度
              document.body.scrollTop = document.documentElement.scrollTop = _that.scrollTop;
              timer = requestAnimationFrame(fn)
            } else {
              cancelAnimationFrame(timer);
              _that.goTopShow = false;
            }
          })
        }
      },
      mounted() {
        window.addEventListener('scroll', this.handleScroll);
      },
      destroyed() {
        window.removeEventListener('scroll', this.handleScroll)
      }
    }
  </script>
  
  <style scoped>
  
    .toTop {
      display: inline-block;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: transparent;
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      bottom: 30px;
      right: 40px;
      color: #409eff;
      font-size: 20px;
      cursor: pointer;
      z-index: 999;
      /* box-shadow: 0 0 6px rgb(0 0 0 / 12%); */
    }
    .toTop:hover {
      background-color: rgba(255, 255, 255, 0.85);
      box-shadow: 0 0 6px rgb(0 0 0 / 12%);
    }
    .icon-zhiding{
        font-size: 30px;
        opacity: 0.95;
    }
  </style>
  
  