import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const siteName = '杭州上池科技有限公司'

function setHeadMeta({ title, description, canonical, ogTitle, ogDescription, ogUrl }) {
	if (title) document.title = title

	const ensureMeta = (selector, attributes) => {
		let element = document.head.querySelector(selector)
		if (!element) {
			element = document.createElement('meta')
			Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
			document.head.appendChild(element)
			return element
		}

		Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value))
		return element
	}

	if (description) {
		ensureMeta('meta[name="description"]', { name: 'description', content: description })
	}

	if (canonical) {
		let link = document.head.querySelector('link[rel="canonical"]')
		if (!link) {
			link = document.createElement('link')
			link.setAttribute('rel', 'canonical')
			document.head.appendChild(link)
		}
		link.setAttribute('href', canonical)
	}

	if (ogTitle) {
		ensureMeta('meta[property="og:title"]', { property: 'og:title', content: ogTitle })
	}

	if (ogDescription) {
		ensureMeta('meta[property="og:description"]', {
			property: 'og:description',
			content: ogDescription,
		})
	}

	if (ogUrl) {
		ensureMeta('meta[property="og:url"]', { property: 'og:url', content: ogUrl })
	}
}

router.afterEach((to) => {
	const routeMeta = {
		'/': {
			title: `${siteName} - 压电陶瓷材料与执行器厂家`,
			description:
				'杭州上池科技有限公司专注压电陶瓷材料、压电陶瓷片、压电执行器与高温压电陶瓷解决方案，服务半导体、医疗、工业传感和航空航天领域。',
			canonical: 'https://hzsc.net.cn/',
		},
		'/about': {
			title: `${siteName} - 公司简介`,
			description:
				'了解杭州上池科技有限公司的公司简介、先进陶瓷研发能力、质量管控体系与应用场景。',
			canonical: 'https://hzsc.net.cn/about',
		},
		'/application': {
			title: `${siteName} - 行业应用`,
			description:
				'了解杭州上池科技有限公司在压电点胶阀、压电位移平台、压电泵、超声焊接等行业应用中的方案能力。',
			canonical: 'https://hzsc.net.cn/',
		},
	}

	if (to.name === 'ProductDetail') {
		const productTitles = {
			1: '压电陶瓷粉体',
			2: '压电陶瓷片',
			3: '超高温压电陶瓷片',
			4: '压电陶瓷换能片',
			5: '堆叠型压电陶瓷',
			6: '堆栈式压电陶瓷执行器',
		}
		const productName = productTitles[to.params.id] || '压电陶瓷产品'
		setHeadMeta({
			title: `${productName} - ${siteName}`,
			description: `${siteName}压电陶瓷产品详情：${productName}，适用于精密驱动、传感检测、超声及高端工业场景。`,
			canonical: `https://hzsc.net.cn/product/${to.params.id}`,
			ogTitle: `${productName} - ${siteName}`,
			ogDescription: `${siteName}压电陶瓷产品详情：${productName}，适用于精密驱动、传感检测、超声及高端工业场景。`,
			ogUrl: `https://hzsc.net.cn/product/${to.params.id}`,
		})
		return
	}

	if (to.name === 'TechDetail') {
		const techTitles = {
			1: '高压电系数粉体配方',
			2: '高可靠性质量管控',
			3: '高一致性控制',
		}
		const techName = techTitles[to.params.id] || '核心技术'
		setHeadMeta({
			title: `${techName} - ${siteName}`,
			description: `${siteName}核心技术介绍：${techName}，聚焦来料检验、工段质量管控、出场老化验证与严格标准。`,
			canonical: `https://hzsc.net.cn/tech/${to.params.id}`,
			ogTitle: `${techName} - ${siteName}`,
			ogDescription: `${siteName}核心技术介绍：${techName}，聚焦来料检验、工段质量管控、出场老化验证与严格标准。`,
			ogUrl: `https://hzsc.net.cn/tech/${to.params.id}`,
		})
		return
	}

	if (to.name === 'IndustryDetail') {
		const applicationTitles = {
			1: '压电点胶阀',
			2: '压电位移平台',
			3: '压电泵',
			4: '锡滴发生器',
			5: '压电风扇',
			6: '光线准直器',
			7: '压电变形镜',
			8: '压电快反镜',
			9: '压电扫描',
			10: '超声焊接',
			11: '超声清洗',
		}
		const applicationName = applicationTitles[to.params.id] || '行业应用'
		setHeadMeta({
			title: `${applicationName} - ${siteName}`,
			description: `${siteName}行业应用介绍：${applicationName}，适用于精密控制、检测、焊接与清洗等场景。`,
			canonical: `https://hzsc.net.cn/application/${to.params.id}`,
			ogTitle: `${applicationName} - ${siteName}`,
			ogDescription: `${siteName}行业应用介绍：${applicationName}，适用于精密控制、检测、焊接与清洗等场景。`,
			ogUrl: `https://hzsc.net.cn/application/${to.params.id}`,
		})
		return
	}

	setHeadMeta(routeMeta[to.path] || routeMeta['/'])
})

createApp(App).use(router).mount('#app')