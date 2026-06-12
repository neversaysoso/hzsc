<template>
  <section class="banner">
    <div class="container">
      <h1>多层压电陶瓷专业制造商</h1>
      <p>国内多层共烧压电陶瓷的开创者和领跑者，致力于实现压电执行器全自主生产与国产替代</p>
    </div>
  </section>

  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">公司简介</h2>
      <div class="about-content">
        <div class="about-text">
          <p>
            杭州上池科技有限公司，位于杭州市富阳区，公司从事先进陶瓷及相关元器件的开发、生产和销售，并提供相应的技术咨询服务。
          </p>
          <br />
          <p>
            公司的先进陶瓷产品包含压电陶瓷片及粉体、压电陶瓷换能片、超声波传感器用压电陶瓷片、压电陶瓷双晶片、高温压电陶瓷片、压电陶瓷执行器等，广泛应用于医用超声换能器、电子显微成像、工业传感器、喷墨打印头、VR触觉反馈装置、半导体光学制造、声纳系统等高精尖设备。
          </p>
          <br />
          <p>
            公司产品服务于信号采集、纳米级定位及驱动等关键零部件需求，致力于为客户提供高可靠性、高性能的先进陶瓷解决方案。
          </p>
        </div>
        <div class="about-features">
          <div class="feature-item">
            <h3>技术领先</h3>
            <p>国内第一条全自动多层共烧压电陶瓷生产线</p>
          </div>
          <div class="feature-item">
            <h3>自主产权</h3>
            <p>全生态自主知识产权与研发生产能力</p>
          </div>
          <div class="feature-item">
            <h3>高端应用</h3>
            <p>服务半导体、航空航天等高精尖领域</p>
          </div>
          <div class="feature-item">
            <h3>国产替代</h3>
            <p>打破国外垄断，实现核心部件自主可控</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- 核心技术 -->
  <section id="tech" class="technology">
    <div class="container">
      <h2 class="section-title">三大核心技术</h2>
      <div class="tech-grid">
        <RouterLink class="tech-card" :to="`/tech/1`">
          <h3>高压电系数粉体配方</h3>
          <p>自主研发高性能压电陶瓷粉体材料，实现高电性能与稳定性</p>
        </RouterLink>
        <RouterLink class="tech-card" :to="`/tech/2`">
          <h3>多层共烧工艺</h3>
          <p>先进低温共烧技术，确保产品一致性与可靠性</p>
        </RouterLink>
        <RouterLink class="tech-card" :to="`/tech/3`">
          <h3>高一致性控制</h3>
          <p>精密制造工艺，保证产品性能高度一致</p>
        </RouterLink>
      </div>
    </div>
  </section>

  <section id="products" class="products">
    <div class="container">
      <h2 class="section-title">核心产品</h2>
      <div class="product-grid">
        <RouterLink
          class="product-card"
          v-for="item in products"
          :key="item.id"
          :to="`/product/${item.id}`"
        >
          <div class="product-img">
            <img :src="item.img" :alt="item.name" />
          </div>
          <div class="product-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <section class="stats">
    <div class="container stats-grid">
      <div class="stat-item">
        <h2>100+</h2>
        <p>技术人员占比</p>
      </div>
      <div class="stat-item">
        <h2>960+</h2>
        <p>产品质量认证</p>
      </div>
      <div class="stat-item">
        <h2>1200+</h2>
        <p>服务客户</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const products = ref([
  {
    id: 1,
    name: '压电陶瓷粉体',
    desc: '作为核心基础材料，其性能决定最终压电器件的压电特性、机械强度与温度稳定性。',
    img: '/assets/products/product1.jpeg',
  },
  {
    id: 2,
    name: '压电陶瓷片',
    desc: '高灵敏度、低损耗的压电陶瓷片可单层、多层或叠堆使用，广泛应用于超声成像和精密传感。',
    img: '/assets/products/product2.jpeg',
  },
  {
    id: 3,
    name: '超高温压电陶瓷片',
    desc: '可在150℃-750℃甚至更高温度下稳定工作，适合航空航天、石化和高温测量场景。',
    img: '/assets/products/product3.png',
  },
  {
    id: 4,
    name: '压电陶瓷换能片',
    desc: '高效电能与机械能转换器件，响应快、体积小，适用于超声焊接、雾化和传感应用。',
    img: '/assets/products/product4.png',
  },
  {
    id: 5,
    name: '堆叠型与共烧型压电陶瓷',
    desc: '堆叠型适合大行程高精度驱动，共烧型适合高频小型化，满足半导体、消费电子等多种场景。',
    img: '/assets/products/product5.jpeg',
  },
  {
    id: 6,
    name: '弹簧封装型压电执行器',
    desc: '预载弹簧封装提升稳定性和寿命，提供大位移、低发热的高精度驱动能力。',
    img: '/assets/products/product6.png',
  },
])
</script>

<style>
.banner {
  height: 500px;
  background: linear-gradient(135deg, #1e3a8a, #3b82f6);
  color: white;
  display: flex;
  align-items: center;
  text-align: center;
}
.banner h1 {
  font-size: 42px;
  margin-bottom: 20px;
}
.banner p {
  font-size: 18px;
  max-width: 800px;
  margin: 0 auto 30px;
}
.about {
  padding: 80px 0;
  background: #f9fafb;
}
.section-title {
  text-align: center;
  margin-bottom: 50px;
  color: #1a365d;
  font-size: 32px;
}
.about-content {
  display: flex;
  gap: 40px;
  align-items: center;
}
.about-text {
  flex: 1;
  font-size: 16px;
  line-height: 1.8;
}
.about-features {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
.feature-item {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
}
.feature-item h3 {
  color: #2563eb;
  margin-bottom: 10px;
}
.technology {
  padding: 80px 0;
}
.tech-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}
.tech-card {
  width: 300px;
  padding: 30px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-align: center;
}
.tech-card h3 {
  color: #1a365d;
  margin-bottom: 15px;
}
.products {
  padding: 80px 0;
  background: #f9fafb;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
.product-card {
  display: block;
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s;
}
.product-card:hover {
  transform: translateY(-5px);
}
.product-img {
  height: 180px;
  overflow: hidden;
  background: #f3f4f6;
}
.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.product-info {
  padding: 20px;
}
.product-info h3 {
  color: #1a365d;
  margin-bottom: 10px;
  font-size: 18px;
}
.stats {
  padding: 60px 0;
  background: #1e3a8a;
  color: #fff;
  text-align: center;
}
.stats-grid {
  display: flex;
  justify-content: space-around;
}
.stat-item h2 {
  font-size: 36px;
  margin-bottom: 10px;
}
.contact {
  padding: 80px 0;
  background: #f9fafb;
}
.contact-info {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 30px;
}
.contact-item {
  text-align: center;
}
.contact-item h3 {
  color: #1a365d;
  margin-bottom: 15px;
}
footer {
  background: #1a365d;
  color: #fff;
  text-align: center;
  padding: 30px 0;
}
@media (max-width: 1200px) {
  .container {
    width: 95%;
  }
}
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
  }
  .stats-grid {
    flex-direction: column;
    gap: 30px;
  }
}
.tech-card {
  display: block;
  width: 300px;
  padding: 30px;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s;
  color: inherit;
}
.tech-card:hover {
  transform: translateY(-5px);
}
</style>