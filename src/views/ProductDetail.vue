<template>
  <div class="product-detail-page full-page">
    <div class="product-bg"></div>
    <div class="container">
      <div class="detail-wrap">
        <div class="detail-info">
          <h1 class="title">{{ productData.name }}</h1>
          <div class="detail-sections">
            <template v-for="(section, index) in productData.sections" :key="index">
              <div v-if="section.type === 'image'" class="section-image">
                <img
                  :src="section.src"
                  :alt="productData.name"
                  :style="{ width: section.width || '100%' }"
                />
              </div>
              <div v-else-if="section.type === 'gallery'" class="section-gallery">
                <img
                  v-for="(src, imgIndex) in section.images"
                  :key="imgIndex"
                  :src="src"
                  :alt="`${productData.name} 图 ${imgIndex + 1}`"
                />
              </div>
              <div
                v-else-if="section.type === 'pair'"
                :class="['section-pair', section.equal ? 'pair-equal' : '']"
                :style="{ gridTemplateColumns: section.widths?.join(' ') || '1fr 1fr' }"
              >
                <img
                  v-for="(src, imgIndex) in section.images"
                  :key="imgIndex"
                  :src="src"
                  :alt="`${productData.name} 图 ${imgIndex + 1}`"
                />
              </div>
              <div
                v-else-if="section.type === 'text'"
                class="section-text"
                v-html="section.html"
              ></div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const productList = {
  1: {
    name: '压电陶瓷粉体',
    sections: [
      {
        type: 'image',
        src: '/assets/products/image1.jpeg',
        width: '400px',
      },
      {
        type: 'text',
        html: '<p>1.1 压电陶瓷粉体是制备各类压电陶瓷器件的核心基础材料，其性能直接决定了最终压电陶瓷制品的压电特性、机械强度、温度稳定性等关键指标，是压电陶瓷产业链的上游核心环节。</p><p>其关键性能指标如下：<br/>1）压电性能：以压电常数（d₃₃、d₃₁等）衡量，数值越高，材料在电场作用下的形变能力越强，能输出更大的位移或驱动力；<br/>2）介电性能：介电常数和介电损耗直接影响器件的工作电压与能量损耗，低介电损耗可提升器件的响应效率；<br/>3）机械性能：包括抗弯强度、断裂韧性等，决定了压电陶瓷器件的耐用性与抗冲击能力；<br/>4）温度稳定性：Curie温度（居里温度）是核心指标，高于该温度材料会失去压电特性，同时材料在工作温度范围内的性能波动越小，稳定性越好。</p>',
      },
      {
        type: 'text',
        html: '<p>作为基础原料，用于制备推栈式、堆叠型、共烧型等各类压电陶瓷器件，进而应用于消费电子（手机振动马达、镜头对焦模块）、工业精密设备（压电陶瓷执行器、传感器）、医疗设备（超声探头、手术刀驱动部件）、通信器件（声表面波滤波器）等领域；</p><p>高性能粉体还可用于制备压电薄膜、压电纤维等新型压电功能材料，拓展在柔性电子、微纳器件等前沿领域的应用。</p><p>我公司可根据客户产品需求和实际工况差异，定制专属的高低温粉体材料。</p><p>压电陶瓷粉体物理性能参数表：</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image2.png',
      },
    ],
  },
  2: {
    name: '压电陶瓷片',
    sections: [
      {
        type: 'gallery',
        images: [
          '/assets/products/image3.jpeg',
          '/assets/products/image4.jpeg',
          '/assets/products/image5.png',
          '/assets/products/image6.png',
        ],
      },
      {
        type: 'text',
        html: '<p>压电陶瓷片是单片产品，可单层、多层或叠堆使用，具有能量转换率高、损耗低，灵敏度高、响应快速、一致性好等特点。</p><p>根据客户应用需求，我公司研发及生产圆形、方形、圆环、圆管等多种形状、规格和电极材料的压电陶瓷，主要应用于医学超声成像、工业无损检测、超声焊接、清洗、切割及雾化、抛光、流量检测、液位控制、距离传感、声呐与水下探测等领域。</p>',
      },
      {
        type: 'text',
        html: '<p>压电陶瓷片的规格范围：<br/>圆型：直径1～150mm，厚度0.2～20mm<br/>方型：长宽1～150mm，厚度0.2～20mm<br/>圆环：外径1～100mm，内径0.5～90mm，厚度0.2～20mm<br/>圆管：外径1～100mm，内径0.5～90mm，长度1～100mm</p><p>陶瓷金属化（电极）材料：银、镍、钛、金等多种选择。<br/>电极形式：双面平行、单面翻边、复杂图形等多种选择。</p><p>压电陶瓷主要材料物理性能参数表：</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image7.png',
      },
    ],
  },
  3: {
    name: '超高温压电陶瓷片',
    sections: [
      {
        type: 'image',
        src: '/assets/products/product3.png',
        width: '400px',
      },
      {
        type: 'text',
        html: '<p>超高温压电陶瓷片是能在高温环境下稳定工作的压电陶瓷换能器件，它在常规压电陶瓷的基础上，通过特殊的材料配方和工艺处理，拓宽了工作温度范围，一般可在150℃-750℃甚至更高温度下正常运行，解决了普通压电陶瓷在高温场景下性能衰减、失效的问题。</p><p>1、核心特性<br/>高温稳定性：在高温环境下，仍能保持稳定的压电性能，电容、谐振频率等参数变化率极低，保障能量转换效率。<br/>抗干扰性强：高温环境下抗电磁干扰、热噪声的能力优于普通压电陶瓷，数据采集更精准。<br/>机械强度高：高温工况下不易出现开裂、变形等机械损伤，使用寿命更长。</p><p>2、产品应用<br/>航空航天领域：用于发动机舱内的振动监测传感器、高温环境下的声学探测设备，实时监测发动机运行状态。<br/>石油化工行业：在炼油炉、反应釜等高温设备中，作为压力传感器、超声检测探头，监测设备内部压力、壁厚腐蚀情况。<br/>汽车工业：适配新能源汽车的电池热管理系统，监测电池包高温状态下的振动与温度变化，保障电池安全。<br/>军工装备：应用于导弹、坦克等装备的高温环境感知系统，实现复杂工况下的信号采集与传输。</p>',
      },
    ],
  },
  4: {
    name: '压电陶瓷换能片',
    sections: [
      {
        type: 'text',
        html: '<p>压电陶瓷换能片是一种利用压电效应实现电能与机械能相互转换的器件。</p><p>1.1核心特点</p><p>1）响应速度快，能快速完成能量转换；</p><p>2）能量转换效率较高，损耗相对较小；</p><p>3）体积小巧、重量轻，便于集成到各类设备中；</p><p>4）工作稳定性强，可在多种环境下持续工作。</p>',
      },
      {
        type: 'text',
        html: '<p>1.2产品应用</p><p>1）传感器领域：制作压力传感器、加速度传感器，用于工业监测、汽车安全系统等场景；</p><p>2）超声设备：作为超声波发生器或接收器，应用在超声清洗、超声医疗诊断设备中；</p><p>3）电子设备：在蜂鸣器、助听器里，实现声音的产生或接收；</p><p>4）精密驱动：在精密定位、微位移装置中，提供精准的驱动动力。</p>',
      },
      {
        type: 'pair',
        images: ['/assets/products/image9.png', '/assets/products/image10.png'],
        widths: ['30%', '70%'],
      },
      {
        type: 'text',
        html: '<p>2、超声波焊接用压电换能片是将电能转换为高频机械振动的核心部件，广泛应用于塑料、金属等材料的焊接。其关键材料为压电陶瓷（如PZT），在高频电场作用下产生机械振动，通过焊头传递到工件接触面，利用摩擦生热实现熔合。常用PZT锆钛酸铅压电陶瓷，具有高机电耦合系数和稳定性。</p>',
      },
      {
        type: 'pair',
        images: ['/assets/products/image11.png', '/assets/products/image12.png'],
        widths: ['30%', '70%'],
      },
      {
        type: 'text',
        html: '<p>3、压电陶瓷雾化换能片是实现雾化功能的核心部件，利用压电陶瓷的逆压电效应，当施加交变电压时，换能片会产生高频振动，进而将液体震碎成微米级的雾状颗粒。</p>',
      },
      {
        type: 'text',
        html: '<p>4、超声波传感器压电陶瓷片是超声波传感器的核心换能部件，利用压电效应实现电能与机械能的相互转换：</p><p>发射端：外加交变电压时，压电陶瓷片会产生高频机械振动，进而辐射出超声波；</p><p>接收端：当超声波作用于压电陶瓷片时，会使其产生机械形变，从而转换为电信号，实现超声波的接收与检测。</p>',
      },
      {
        type: 'pair',
        images: ['/assets/products/image13.png', '/assets/products/image14.png'],
        widths: ['30%', '70%'],
      },
      {
        type: 'text',
        html: '<p>产品应用</p><p>工业检测：用于超声波测距、液位检测、材料缺陷探伤等，比如在自动化生产线中检测物体距离、在储罐中监测液位高度；</p><p>医疗领域：是超声诊断设备（如B超）的核心部件，通过发射和接收超声波，生成人体内部组织的图像；</p><p>消费电子：在扫地机器人中用于避障测距，在智能音箱中可实现声纹识别、手势感应等功能；</p><p>汽车电子：应用于倒车雷达、自适应巡航系统，通过超声波感知车辆周边障碍物距离。</p>',
      },
    ],
  },
  5: {
    name: '堆叠型与共烧型压电陶瓷',
    sections: [
      {
        type: 'pair',
        images: ['/assets/products/image15.jpeg', '/assets/products/image16.png'],
        widths: ['1fr', '1fr'],
        equal: true,
      },
      {
        type: 'text',
        html: '<p>1、堆叠型压电陶瓷：由多层压电陶瓷薄片与电极通过叠压、烧结工艺制成，各层间依靠外部电极连接，属于“分层烧结后堆叠”的结构，层间结合力主要依赖烧结工艺和电极粘结。</p><p>共烧型压电陶瓷：采用“多层共烧”工艺，将压电陶瓷浆料与电极浆料同步印刷、叠合后一次性高温烧结，电极与陶瓷层实现一体化结合，层间结合强度更高。</p>',
      },
      {
        type: 'text',
        html: '<p>2、产品应用</p><p>堆叠型压电陶瓷：侧重大行程、高精度驱动场景，比如半导体晶圆搬运平台、航空航天精密定位机构、医疗超声手术刀驱动部件等。</p><p>共烧型压电陶瓷：更适合高频、小型化场景，比如手机振动马达、声表面波滤波器、高频压电喷墨打印头等消费电子和通信器件。</p>',
      },
      {
        type: 'text',
        html: '<p>3、性能参数</p><p>共烧型压电陶瓷执行器性能参数如下：</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image17.png',
      },
      {
        type: 'text',
        html: '<p>堆叠型压电陶瓷执行器有方形、圆形、环形，其规格及性能参数如下：</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image18.png',
      },
      {
        type: 'image',
        src: '/assets/products/image19.png',
      },
      {
        type: 'image',
        src: '/assets/products/image20.png',
      },
      {
        type: 'text',
        html: '<p>其余规格均可定制。</p>',
      },
    ],
  },
  6: {
    name: '堆栈式压电陶瓷执行器',
    sections: [
      {
        type: 'text',
        html: '<p>以胶粘剂作为层间连接介质，替代传统堆叠结构中依赖烧结或机械固定的方式，通过多层压电陶瓷薄片与电极的胶粘组合，实现精密驱动功能。</p><p>1、核心特性</p><p>结构优势：无需高温烧结工艺，可兼容不同热膨胀系数的压电陶瓷与电极材料，避免高温烧结导致的材料性能损耗，还能灵活调整层间间距，适配定制化结构需求。</p><p>性能表现：</p><p>● 位移与精度：可实现数十微米级的输出位移，定位精度可达亚纳米级，满足精密驱动的精度要求；</p><p>● 驱动力：输出驱动力略低于烧结型堆栈式执行器，但足以覆盖多数精密场景的负载需求；</p><p>● 温度适应性：常规胶粘剂工作温度范围为-40℃~150℃，部分耐高温胶粘剂可支持200℃以上场景，但长期高温环境下胶粘剂易出现老化，需定期维护；</p><p>● 响应速度：响应时间可达毫秒级，能快速完成精密定位动作。</p><p>● 成本与工艺：生产工艺相对简单，无需复杂的烧结设备，批量生产成本更低，定制化周期更短。</p>',
      },
      {
        type: 'text',
        html: '<p>2、产品应用</p><p>消费电子：手机光学镜头的自动对焦模块、微型投影仪的光路调节机构；</p><p>精密仪器：便携式原子力显微镜的扫描驱动、精密测量仪器的位移补偿系统；</p><p>医疗设备：小型精密注射泵的活塞控制、牙科治疗设备的精密调节部件；</p><p>工业自动化：小型精密装配机器人的末端执行器、3D打印设备的微小位移补偿机构。</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image21.png',
      },
      {
        type: 'text',
        html: '<p>其余规格均可定制。</p>',
      },
    ],
  },
  7: {
    name: '弹簧封装型压电执行器',
    sections: [
      {
        type: 'text',
        html: '<p>弹簧封装型压电执行器是一种由堆栈型叠层压电陶瓷与预载弹簧集成封装的高精度驱动装置，具备位移大、发热低、寿命超10⁹次循环的特点，适用于高负载、高频响的精密控制场景。</p><p>该执行器通过预载弹簧对压电陶瓷施加恒定压力，有效防止其在动态运行中因拉伸应力而断裂，同时提升谐振频率与动态稳定性。其堆栈陶瓷最大尺寸可达10×10×100 mm³，由多个小叠层单元胶连堆栈而成，支持微米级位移输出。</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image22.png',
        width: '400px',
      },
      {
        type: 'text',
        html: '<p>产品应用</p><p>内燃机喷油嘴阀门控制：实现燃油喷射的高精度时序与流量调节。</p><p>工业母机快刀伺服系统：用于非球面光学元件的超精密车削补偿。</p><p>半导体设备驱动单元：在光刻、对准等工艺中提供纳米级定位。</p><p>航空航天作动器：在真空或强磁场环境下稳定运行，无电磁干扰。</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image23.png',
      },
      {
        type: 'text',
        html: '<p>其余规格均可定制。</p>',
      },
    ],
  },
  8: {
    name: '全金属密封型压电执行器',
    sections: [
      {
        type: 'image',
        src: '/assets/products/image24.png',
        width: '400px',
      },
      {
        type: 'text',
        html: '<p>全金属密封型压电执行器是一种采用全金属外壳封装的高可靠性压电驱动装置，具备优异的环境隔离性与机械稳定性，适用于高真空、高湿度、强腐蚀等严苛工况。该执行器通过全金属密封结构实现与外部大气环境的完全绝缘，显著降低湿气、粉尘和化学介质对内部压电陶瓷的侵蚀，从而提升使用寿命和运行稳定性。其典型工作温度范围为-25℃至+85℃，可定制扩展至-40℃至+150℃，驱动电压通常为0~150V，支持闭环控制以实现更高定位精度。</p>',
      },
      {
        type: 'text',
        html: '<p>1、核心性能参数</p><p>最大出力：3600N（部分型号可达7200N）</p><p>位移行程：可达100μm（部分型号为55μm）</p><p>响应时间：微秒级（＜10μs）</p><p>重复定位精度：优于0.01%满量程</p><p>平均失效前时间：36000小时（85℃/100V条件下）</p>',
      },
      {
        type: 'text',
        html: '<p>2、产品应用</p><p>半导体制造设备：用于MFC质量流量控制器的阀门驱动，实现气体流量的高精度动态调节。</p><p>光通信系统：在光纤对准与光路调焦中提供纳米级位移控制。</p><p>航天与粒子加速器：在高真空或强磁场环境下稳定运行，避免传统电磁执行器的干扰问题。</p><p>医疗仪器：应用于高精度成像设备（如OCT、共聚焦显微镜）的扫描平台。</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image25.png',
      },
      {
        type: 'text',
        html: '<p>其余规格均可定制。</p>',
      },
    ],
  },
  9: {
    name: '波纹管密封型压电执行器',
    sections: [
      {
        type: 'image',
        src: '/assets/products/image26.jpeg',
        width: '400px',
      },
      {
        type: 'text',
        html: '<p>波纹管密封型压电陶瓷执行器是一种高精度、高可靠性的纳米级驱动与定位装置，由共烧型压电陶瓷与波纹管封装膜片集成构成，具备位移大、响应快、推力强、发热低、密封绝缘性好和循环寿命高等特点。</p><p>1、特点</p><p>该执行器工作温度范围为-30°C至150°C，最大输出推力可达3600N，适用于对环境洁净度和稳定性要求极高的场景。其核心优势在于通过波纹管实现完全密封，有效防止介质泄漏，同时保持优异的电绝缘性能，适合在真空、潮湿或腐蚀性环境中长期运行。</p>',
      },
      {
        type: 'text',
        html: '<p>2、主要应用领域</p><p>集成电路制造：用于晶圆对准、光刻机纳米调焦等超高精度工艺。</p><p>精密加工：实现微米级切削与表面处理的主动补偿控制。</p><p>细胞医学：应用于细胞操作、显微注射、生物传感等生命科学仪器。</p><p>高精度成像：作为扫描探针显微镜（SPM）、光学干涉仪中的定位单元。</p><p>减震与主动控制：用于航天器精密载荷平台的振动抑制系统。</p>',
      },
      {
        type: 'image',
        src: '/assets/products/image27.png',
      },
      {
        type: 'text',
        html: '<p>其余规格均可定制。</p>',
      },
    ],
  },
}

const productData = ref({})
watch(
  () => route.params.id,
  (id) => {
    productData.value = productList[id] || {
      name: '产品详情',
      sections: [
        {
          type: 'text',
          html: '<p>暂无该产品信息。</p>',
        },
      ],
    }
    // set page title for SEO
    try {
      document.title = `${productData.value.name} - 杭州上池科技有限公司`
    } catch (e) {
      // ignore in non-browser env
    }
  },
  { immediate: true }
)
</script>

<style scoped>
.full-page {
  min-height: calc(100vh - 497px);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 0 30px;
}

.detail-wrap {
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
}

.detail-info {
  width: 100%;
}

.title {
  font-size: 32px;
  color: #1a365d;
  margin-bottom: 24px;
  font-weight: 600;
}

.detail-sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-image img,
.section-gallery img {
  width: 100%;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-gallery {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.product-bg {
  width: 100%;
  min-height: 260px;
  background: url('/assets/products/productBg.jpg') center top / cover no-repeat;
  margin-bottom: 40px;
}

.section-pair {
  display: grid;
  grid-auto-flow: column;
  column-gap: 15px;
  row-gap: 0;
  align-items: start;
}

.section-pair img {
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: unset;
  display: block;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
}

.section-pair.pair-equal img {
  height: 320px;
  object-fit: cover;
}

@media (max-width: 768px) {
  .section-pair.pair-equal img {
    height: auto;
  }
}

.section-text {
  font-size: 17px;
  line-height: 2;
  color: #444;
}

.section-text p {
  margin-bottom: 16px;
}

@media (max-width: 1024px) {
  .full-page {
    padding: 40px 20px;
  }

  .section-gallery {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .full-page {
    padding: 30px 16px;
  }

  .product-bg {
    display: none;
  }

  .title {
    font-size: 28px;
  }

  .section-gallery {
    grid-template-columns: 1fr;
  }
}
</style>