<template>
  <div class="tech-detail-page full-page">
    <div class="container">
      <div class="detail-wrap">
        <div class="detail-img">
          <div class="placeholder-img">技术图片</div>
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
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const techList = {
  1: {
    name: '高压电系数粉体配方',
    content:
      '<p>自研专属粉体配比方案，压电系数表现优异</p><p>耐温区间宽泛，高低温环境性能衰减低</p><p>原材料纯度把控严格，从源头保障器件品质</p>',
  },
  2: {
    name: '多层共烧工艺',
    content:
      '<p>低温多层堆叠烧结技术，减少内部应力损伤</p><p>层间贴合紧密，导电与形变性能均衡稳定</p><p>规模化量产工艺成熟，良品率稳居高位</p>',
  },
  3: {
    name: '高一致性控制',
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

.placeholder-img {
  width: 100%;
  height: 320px;
  background: #f3f4f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #9ca3af;
  font-size: 16px;
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