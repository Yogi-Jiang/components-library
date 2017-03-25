"use strict"
const path = require('path')

let config = {
	entry: "./vue-ueditor/index.js",
	output: {
		path: path.join(__dirname, './lib'),
		filename: 'vueditor.js'
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader'
			},
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: 'file-loader'
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	}
}

module.exports = config
