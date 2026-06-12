<template>
  <!-- 联系我们 -->
  <section id="contact" class="contact">
    <div class="container">
      <h2 class="section-title">联系我们</h2>
      <div class="contact-info">
        <div class="contact-item">
          <h3>名称</h3>
          <p>杭州上池科技有限公司</p>
        </div>
        <div class="contact-item">
          <h3>地址</h3>
          <p>浙江省杭州市富阳区春江街道<br />富春湾新城小微企业创新园2号</p>
        </div>
        <div class="contact-item">
          <h3>电话</h3>
          <p>周经理：13804040626</p>
        </div>
        <div class="contact-item">
          <h3>邮箱</h3>
          <p>hzsc001@mail.com</p>
        </div>
      </div>
    </div>
  </section>

  <!-- 底部版权 -->
  <footer>
    <div class="container">
      <p>© 2026 杭州上池科技有限公司 版权所有</p>
    </div>
  </footer>
</template>

<style scoped>
.contact {
  padding: 80px 0;
  background: #f9fafb;
}
.section-title {
  text-align: center;
  margin-bottom: 50px;
  color: #1a365d;
  font-size: 32px;
}
.contact-info {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 30px;
  align-items: stretch;
}
.contact-item {
  text-align: center;
  min-width: 0;
}
.contact-item h3 {
  color: #1a365d;
  margin-bottom: 15px;
}
.contact-item p {
  color: #475569;
  line-height: 1.8;
  word-break: break-word;
}
footer {
  background: #1a365d;
  color: white;
  text-align: center;
  padding: 30px 0;
}
</style>