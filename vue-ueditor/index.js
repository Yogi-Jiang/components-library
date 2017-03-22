import C from './Component.vue'

C.install = function (Vue, options) {
	Vue.component(C.name, C)
}

export default C