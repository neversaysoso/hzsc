<template>
  <section class="banner">
    <div class="container">
      <h1>多层压电陶瓷专业制造商</h1>
      <p>专注高可靠性压电陶瓷制造，覆盖来料检验、工段质量管控、出场老化验证与严格标准体系</p>
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
            公司的先进陶瓷产品包含压电陶瓷片及粉体、压电陶瓷换能片、超声波传感器用压电陶瓷片、高温压电陶瓷片、压电陶瓷执行器等，广泛应用于医用超声换能器、电子显微成像、工业传感器、喷墨打印头、VR触觉反馈装置、半导体光学制造、声纳系统等高精尖设备。
          </p>
          <br />
          <p>
            公司产品服务于信号采集、纳米级定位及驱动等关键零部件需求，致力于为客户提供高可靠性、高性能的先进陶瓷解决方案。
          </p>
        </div>
        <div class="about-features">
          <div class="feature-item">
            <h3>高可靠性</h3>
            <p>从来料检验到出场老化验证，全流程质量闭环</p>
          </div>
          <div class="feature-item">
            <h3>工段管控</h3>
            <p>关键工段严格管控，确保批次稳定与一致性</p>
          </div>
          <div class="feature-item">
            <h3>标准严格</h3>
            <p>执行严于行业常规的内部质量标准与验证流程</p>
          </div>
          <div class="feature-item">
            <h3>高端应用</h3>
            <p>服务半导体、医疗、航空航天等高精尖领域</p>
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
          <h3>高可靠性质量管控</h3>
          <p>覆盖来料检验、工段质量管控、出场老化验证与严格标准</p>
        </RouterLink>
        <RouterLink class="tech-card" :to="`/tech/3`">
          <h3>高一致性控制</h3>
          <p>精密制造与过程验证并行，保证产品性能高度一致</p>
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
            <img :src="item.img" :alt="item.name" loading="lazy" />
          </div>
          <div class="product-info">
            <h3>{{ item.name }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>

  <section id="applications" class="applications">
    <div class="container">
      <h2 class="section-title">行业应用</h2>
      <div class="application-grid">
        <RouterLink
          v-for="item in applications"
          :key="item.id"
          class="application-card"
          :to="`/application/${item.id}`"
        >
          <div class="application-img">
            <img :src="item.img" :alt="item.name" loading="lazy" />
          </div>
          <div class="application-info">
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
import { useHead } from '@vueuse/head'

useHead({
	title: '杭州上池科技有限公司 - 压电陶瓷材料与执行器厂家',
	meta: [
		{
			name: 'description',
			content:
				'杭州上池科技有限公司专注压电陶瓷材料、压电陶瓷片、压电执行器与高温压电陶瓷解决方案，服务半导体、医疗、工业传感和航空航天领域。',
		},
		{ name: 'robots', content: 'index, follow' },
	],
	link: [{ rel: 'canonical', href: 'https://hzsc.net.cn/' }],
})

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
    id: 6,
    name: '弹簧封装型压电执行器',
    desc: '预载弹簧封装提升稳定性和寿命，提供大位移、低发热的高精度驱动能力。',
    img: '/assets/products/product6.png',
  },
  {
    id: 8,
    name: '全金属密封型压电执行器',
    desc: '全金属外壳封装，适用于高真空、高湿度与强腐蚀等严苛工况。',
    img: '/assets/products/image24.png',
  },
])

const applications = ref([
  {
    id: 1,
    name: '压电点胶阀',
    img: '/assets/Industry/1.png',
    desc: '用于电子封装和精密涂覆，精准控制胶量启停，提升出胶稳定性与制程一致性。',
  },
  {
    id: 2,
    name: '压电位移平台',
    img: '/assets/Industry/2.png',
    desc: '适用于光学对准和精密测量，提供纳米级微调能力，满足高精度定位需求。',
  },
  {
    id: 3,
    name: '压电泵',
    img: '/assets/Industry/3.png',
    desc: '用于微流控和精密供液，支持小流量、定量输送，兼顾体积小和能耗低。',
  },
  {
    id: 4,
    name: '锡滴发生器',
    img: '/assets/Industry/4.png',
    desc: '用于微焊接和喷锡工艺，稳定生成均匀锡滴，提升焊点一致性。',
  },
  {
    id: 5,
    name: '压电风扇',
    img: '/assets/Industry/5.png',
    desc: '适合便携设备和散热模组，以低噪声、小体积方式提供持续气流。',
  },
  {
    id: 6,
    name: '光线准直器',
    img: '/assets/Industry/6.png',
    desc: '用于激光和光束准直校正，提升光路效率、稳定性与输出品质。',
  },
  // {
  //   id: 7,
  //   name: '压电变形镜',
  //   img: '/assets/Industry/7.png',
  //   desc: '用于波前校正和镜面微调，广泛服务自适应光学与高端成像系统。',
  // },
  // {
  //   id: 8,
  //   name: '压电快反镜',
  //   img: '/assets/Industry/8.png',
  //   desc: '适用于激光通信和稳定跟踪，实现高带宽、快速角度修正。',
  // },
  // {
  //   id: 9,
  //   name: '压电扫描',
  //   img: '/assets/Industry/9.png',
  //   desc: '适合显微成像和探针检测，实现高精度、小行程的精细扫描。',
  // },
  // {
  //   id: 10,
  //   name: '超声焊接',
  //   img: '/assets/Industry/10.png',
  //   desc: '用于塑料和金属薄片连接，焊接快、热影响小、连接牢固。',
  // },
  // {
  //   id: 11,
  //   name: '超声清洗',
  //   img: '/assets/Industry/11.png',
  //   desc: '用于精密零件和光学元件清洗，高效去除细缝、孔洞中的污染物。',
  // },
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
.applications {
  padding: 80px 0;
  background: #fff;
}
.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
.application-grid {
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
.application-card {
  display: block;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.08);
  border: 1px solid #e5e7eb;
  transition: transform 0.3s;
  overflow: hidden;
}
.application-card:hover {
  transform: translateY(-5px);
}
.application-card:visited {
  color: inherit;
}
.application-img {
  height: 180px;
  overflow: hidden;
  background: #f3f4f6;
}
.application-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.application-info {
  padding: 20px;
}
.application-card h3 {
  color: #1a365d;
  margin-bottom: 12px;
  font-size: 18px;
}
.application-card p {
  color: #475569;
  line-height: 1.8;
  font-size: 15px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
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