<template>
  <header>
    <div class="container header-content">
      <RouterLink to="/" class="logo">AMK 杭州上池科技有限公司</RouterLink>
      <nav class="nav-menu">
        <ul>
          <li :class="{ active: isAbout }"><RouterLink to="/about">公司简介</RouterLink></li>

          <li class="dropdown" :class="{ active: isTech }">
            <span class="dropbtn">核心技术 ▾</span>
            <div class="dropdown-content">
              <RouterLink to="/tech/1">高压电系数粉体配方</RouterLink>
              <RouterLink to="/tech/2">多层共烧工艺</RouterLink>
              <RouterLink to="/tech/3">高一致性控制</RouterLink>
            </div>
          </li>

          <li class="dropdown" :class="{ active: isProduct }">
            <span class="dropbtn">核心产品 ▾</span>
            <div class="dropdown-content">
              <RouterLink to="/product/1">压电陶瓷粉体</RouterLink>
              <RouterLink to="/product/2">压电陶瓷片</RouterLink>
              <RouterLink to="/product/3">超高温压电陶瓷片</RouterLink>
              <RouterLink to="/product/4">压电陶瓷换能片</RouterLink>
              <RouterLink to="/product/5">堆叠型与共烧型压电陶瓷</RouterLink>
              <RouterLink to="/product/6">堆栈式压电陶瓷执行器</RouterLink>
              <RouterLink to="/product/7">弹簧封装型压电执行器</RouterLink>
              <RouterLink to="/product/8">全金属密封型压电执行器</RouterLink>
              <RouterLink to="/product/9">波纹管密封型压电执行器</RouterLink>
            </div>
          </li>

          <li class="dropdown">
            <span class="dropbtn">联系我们 ▾</span>
            <div class="dropdown-content contact-dropdown">
              <div class="contact-item">
                <span>名称</span>
                <p>杭州上池科技有限公司</p>
              </div>
              <div class="contact-item">
                <span>地址</span>
                <p>浙江省杭州市富阳区春江街道富春湾新城小微企业创新园2号</p>
              </div>
              <div class="contact-item">
                <span>电话</span>
                <p>周经理：13804040626</p>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isAbout = computed(() => route.path === '/about')
const isTech = computed(() => route.path.startsWith('/tech'))
const isProduct = computed(() => route.path.startsWith('/product'))
</script>

<style scoped>
header {
  background: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}
.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
}
.logo {
  font-size: 24px;
  font-weight: bold;
  color: #1a365d;
}

/* 电脑端正常导航 */
nav ul {
  display: flex;
  position: relative;
  top: 4px;
}
nav :deep(a) {
  color: #333;
  padding: 0 20px;
  font-size: 16px;
  transition: all 0.3s;
  line-height: 80px;
  display: inline-block;
  border-radius: 4px;
}
/* active link style (vue-router adds .router-link-active) */
nav :deep(.router-link-active) {
  color: #2563eb;
  background-color: #f0f7ff;
  font-weight: 600;
}
nav :deep(a):hover {
  color: #2563eb;
  background-color: #f0f7ff;
}
.dropdown {
  position: relative;
  padding-bottom: 10px;
  cursor: pointer;
}
.dropbtn {
  padding: 0 20px;
  font-size: 16px;
  color: #333;
  line-height: 80px;
  display: inline-block;
  border-radius: 4px;
  transition: all 0.3s;
}
.dropdown:hover .dropbtn {
  color: #2563eb;
  background-color: #f0f7ff;
}
.dropdown.active .dropbtn {
  color: #2563eb;
  background-color: #f0f7ff;
  font-weight: 600;
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  background: #fff;
  min-width: 220px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  z-index: 200;
}
.dropdown-content :deep(a) {
  padding: 12px 18px;
  display: block;
  text-align: left;
  line-height: normal;
}
.dropdown:hover .dropdown-content {
  display: block;
}

/* 联系我们下拉样式 */
.contact-dropdown {
  padding: 16px 20px;
  min-width: 300px;
}
.contact-item {
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
}
.contact-item:last-child {
  border-bottom: none;
}
.contact-item span {
  font-size: 14px;
  color: #2563eb;
  font-weight: 500;
  display: block;
  margin-bottom: 4px;
}
.contact-item p {
  font-size: 14px;
  color: #333;
  line-height: 1.5;
  margin: 0;
}

/* ====================== 移动端适配（手机端） ====================== */
@media (max-width: 768px) {
  /* 手机端：隐藏全部导航 */
  .nav-menu {
    display: none !important;
  }

  /* 手机端：LOGO 居中显示 */
  .header-content {
    justify-content: center;
    text-align: center;
  }

  .logo {
    font-size: 18px; /* 手机端缩小一点更美观 */
  }
}
</style>