<template>
	<div ref='editor'></div>
</template>

<script>
	import './plugins/ueditor.config.js'
	import './plugins/ueditor.all.js'
	import './plugins/zh-cn/zh-cn.js'
	import './plugins/addInsertPanoDialog.js'
	import './plugins/addInsertPoiButton.js'
	import './plugins/autoupload.js'

	export default {
		name: 'vue-ueditor',
		props: ['UEConfig', 'businessConfig', 'composition'],
		methods: {
			initEditor () {
				const self = this
				this.$nextTick(function () {
					let id = new Date().getTime().toString()
					self.$refs.editor.id = id
					const editor = UE.getEditor(id, self.UEConfig)

					editor.ready(function () {
						editor.addListener('contentChange', function () {
							self.$emit('input', editor.getContent())
						})

						self.$emit('ready', editor)
						self.hideCustomIcons()
					})
				})
			},
			hideCustomIcons () {
				// if (!this.businessConfig || !this.businessConfig.hideIcons) return
				// const hideIcons = this.businessConfig.hideIcons
				// hideIcons.forEach((icon) => {
				// 	const elem = document.getElementsByClassName('edui-for-' + icon)[0]
				// 	console.log('elem', elem)
				// 	elem.style.display = "none !important"
				// })
			}
		},
		mounted: function () {
			this.initEditor()
		}
	}
</script>