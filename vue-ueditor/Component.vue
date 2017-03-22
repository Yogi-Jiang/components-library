<template>
	<div ref='editor'></div>
</template>

<script>
	import './plugins/addInsertPanoDialog.js'
	import './plugins/addInsertPoiButton.js'
	import './plugins/plugins/autoupload.js'

	export default {
		name: 'vue-ueditor',
		props: ['UEConfig', 'businessConfig', 'getEditor'],
		methods: {
			initEditor () {
				const self = this
				this.$nextTick(function () {
				let id = new Date().getTime().toString()
				self.$refs.editor.id = id
				const editor = UE.getEditor(id, self.UEConfig)
				self.getUE(editor)

				editor.ready(function () {
					editor.setContent(self.composition)
					editor.addListener('contentChange', function () {
						self.$emit('input', editor.getContent())
					})

					self.$emit('ready', editor)
				})
			})
			}
		},
		mouted: function () {
			this.initEditor()
		}
	}
</script>