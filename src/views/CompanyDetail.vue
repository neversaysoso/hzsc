<template>
  <div class="company-detail-page full-page">
    <div class="container">
      <div class="detail-wrap">
        <div class="detail-img">
          <div class="placeholder-img">公司形象图</div>
        </div>

        <div class="detail-info">
          <h1 class="title">公司简介</h1>
          <div class="content">
            <p>
              杭州上池科技有限公司，位于杭州市富阳区，公司从事先进陶瓷及相关元气件的开发、生产和销售，并提供相应的技术咨询服务。
            </p>
            <p>
              公司的先进陶瓷产品包含压电陶瓷片及粉体、压电陶瓷换能片、超声波传感器用压电陶瓷片、压电陶瓷双晶片、高温压电陶瓷片、压电陶瓷执行器等，广泛应用于医用超声换能器、电子显微成像、工业传感器、喷墨打印头、VR触觉反馈装置、半导体光学制造、声纳系统等高精尖设备的信号采集、纳米级定位及驱动等关键零部件。
            </p>
            <p>
              公司秉承技术创新与可靠品质的经营理念，持续为客户提供高性能、稳定的先进陶瓷解决方案。
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
  margin-bottom: 14px;
}

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
