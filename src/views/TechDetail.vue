<template>
  <div class="tech-detail-page full-page">
    <div class="container">
      <div class="detail-wrap">
        <div class="detail-img">
          <img class="tech-image" :src="techData.img" :alt="techData.name" loading="lazy" />
        </div>

        <div class="detail-info">
          <h1 class="title">{{ techData.name }}</h1>
          <div class="content" v-html="techData.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { useHead } from '@vueuse/head'

const route = useRoute()
const techList = {
  1: {
    name: '高压电系数粉体配方',
    img: '/assets/tech/1.png',
    content:
      '<p>自研专属粉体配比方案，压电系数表现优异</p><p>耐温区间宽泛，高低温环境性能衰减低</p><p>原材料纯度把控严格，从源头保障器件品质</p>',
  },
  2: {
    name: '高可靠性质量管控',
    img: '/assets/tech/2.png',
    content:
      '<p>来料检验严格，关键原材料逐批审核把关</p><p>工段质量管控全程覆盖，实时监测关键过程参数</p><p>出场老化验证完整，确保长期运行稳定可靠</p><p>执行高于常规行业要求的内部标准，保障批次一致性</p>',
  },
  3: {
    name: '高一致性控制',
    img: '/assets/tech/3.png',
    content:
      '<p>全流程精密参数管控，批量产品误差极小</p><p>自动化检测筛选，剔除性能偏差工件</p><p>标准化生产体系，批次之间品质无明显差异</p>',
  },
}

const techData = ref({})
watch(
  () => route.params.id,
  (id) => {
    techData.value = techList[id]
  },
  { immediate: true }
)

const pageTitle = computed(() => `${techData.value.name} - 杭州上池科技有限公司`)
const pageDesc = computed(() => `${techData.value.name} - 杭州上池科技有限公司核心技术介绍，聚焦来料检验、工段质量管控、出场老化验证与严格标准。`)
const canonicalUrl = computed(() => `https://hzsc.net.cn/tech/${route.params.id}`)

useHead({
	title: pageTitle,
	meta: [
		{ name: 'description', content: pageDesc },
		{ name: 'robots', content: 'index, follow' },
	],
	link: [{ rel: 'canonical', href: canonicalUrl }],
})
</script>

<style scoped>
.full-page {
  min-height: calc(100vh - 497px);
  display: flex;
  align-items: center;
  padding: 60px 20px;
}

.detail-wrap {
  display: flex;
  align-items: center;
  gap: 80px;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

.detail-img {
  width: 380px;
  flex-shrink: 0;
}

.tech-image {
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.detail-info {
  flex: 1;
}

.title {
  font-size: 32px;
  color: #1a365d;
  margin-bottom: 24px;
  font-weight: 600;
}

.content {
  font-size: 17px;
  line-height: 2;
  color: #444;
}

.content p {
  margin-bottom: 12px;
}

/* ====================== 移动端适配 ====================== */
@media (max-width: 768px) {
  .detail-wrap {
    flex-direction: column;
    gap: 40px;
    padding: 0 10px;
  }

  .detail-img {
    width: 100%;
    max-width: 380px;
  }

  .detail-info {
    text-align: center;
  }

  .title {
    font-size: 26px;
  }
}
</style>