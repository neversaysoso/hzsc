import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './router/index.js'

const siteName = '杭州上池科技有限公司'

const productTitles = {
	1: '压电陶瓷粉体',
	2: '压电陶瓷片',
	3: '超高温压电陶瓷片',
	4: '压电陶瓷换能片',
	5: '堆叠型压电陶瓷',
	6: '堆栈式压电陶瓷执行器',
	7: '弹簧封装型压电执行器',
	8: '全金属密封型压电执行器',
	9: '波纹管密封型压电执行器',
}

const techTitles = {
	1: '高压电系数粉体配方',
	2: '高可靠性质量管控',
	3: '高一致性控制',
}

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

function getPageMeta(to) {
	let pageTitle = `${siteName} - 压电陶瓷材料与执行器厂家`
	let pageDesc =
		'杭州上池科技有限公司专注压电陶瓷材料、压电陶瓷片、压电执行器与高温压电陶瓷解决方案，服务半导体、医疗、工业传感和航空航天领域。'
	let canonical = 'https://hzsc.net.cn/'

	if (to.path === '/about') {
		pageTitle = `${siteName} - 公司简介`
		pageDesc =
			'了解杭州上池科技有限公司的公司简介、先进陶瓷研发能力、质量管控体系与应用场景。'
		canonical = 'https://hzsc.net.cn/about'
	} else if (to.name === 'ProductDetail') {
		const productName = productTitles[to.params.id] || '压电陶瓷产品'
		pageTitle = `${productName} - ${siteName}`
		pageDesc = `${siteName}压电陶瓷产品详情：${productName}，适用于精密驱动、传感检测、超声及高端工业场景。`
		canonical = `https://hzsc.net.cn/product/${to.params.id}`
	} else if (to.name === 'TechDetail') {
		const techName = techTitles[to.params.id] || '核心技术'
		pageTitle = `${techName} - ${siteName}`
		pageDesc = `${siteName}核心技术介绍：${techName}，聚焦来料检验、工段质量管控、出场老化验证与严格标准。`
		canonical = `https://hzsc.net.cn/tech/${to.params.id}`
	} else if (to.name === 'IndustryDetail') {
		const appName = applicationTitles[to.params.id] || '行业应用'
		pageTitle = `${appName} - ${siteName}`
		pageDesc = `${siteName}行业应用介绍：${appName}，适用于精密控制、检测、焊接与清洗等场景。`
		canonical = `https://hzsc.net.cn/application/${to.params.id}`
	}

	return { pageTitle, pageDesc, canonical }
}

export const createApp = ViteSSG(App, { routes }, ({ router }) => {
	router.afterEach((to) => {
		const { pageTitle, pageDesc, canonical } = getPageMeta(to)

		if (typeof window !== 'undefined') {
			document.title = pageTitle

			let descMeta = document.querySelector('meta[name="description"]')
			if (!descMeta) {
				descMeta = document.createElement('meta')
				descMeta.setAttribute('name', 'description')
				document.head.appendChild(descMeta)
			}
			descMeta.setAttribute('content', pageDesc)

			let canonicalLink = document.querySelector('link[rel="canonical"]')
			if (!canonicalLink) {
				canonicalLink = document.createElement('link')
				canonicalLink.setAttribute('rel', 'canonical')
				document.head.appendChild(canonicalLink)
			}
			canonicalLink.setAttribute('href', canonical)
		}
	})
})