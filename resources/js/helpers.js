import store from './store/index'
import {debounce} from "lodash";
import {events} from './bus'
import axios from 'axios'

const Helpers = {
	install(Vue) {

		Vue.prototype.$goToView = function(view) {
			events.$emit('show:content')

			this.$store.commit('SET_CURRENT_VIEW', view)
		}

		Vue.prototype.$updateText = debounce(function (route, name, value) {

			axios.put(this.$store.getters.api + route, {name, value}, {
				headers: {
					'Authorization': 'Bearer ' + this.$store.getters.token
				}
			})
				.then(response => {
					console.log('done!');
				})
				.catch(error => {
					console.log('shit!');
				})
		}, 300)

		Vue.prototype.$updateImage = function (route, name, image) {

			// Create form
			let formData = new FormData()

			// Add image to form
			formData.append(name, image)
			formData.append('_method', 'PUT')

			axios.post(this.$store.getters.api + route, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
					'Authorization': 'Bearer ' + this.$store.getters.token,
				}
			})
				.then(response => {
					console.log('done!');
				})
				.catch(error => {
					console.log('shit!');
				})
		}

		Vue.prototype.$openImageOnNewTab = function(source) {
			let win = window.open(source, '_blank')

			win.focus()
		}

		Vue.prototype.$createFolder = function(folderName) {
			this.$store.dispatch('createFolder', folderName)
		}

		Vue.prototype.$uploadFiles = async function(files) {
			// Prevent submit empty files
			if (files && files.length == 0) return

			let fileCount = files.length
			let fileCountSucceed = 1

			store.commit('UPDATE_FILE_COUNT_PROGRESS', {
				current: fileCountSucceed,
				total: fileCount
			})

			// Get parent id
			const rootFolder = this.$store.getters.currentFolder
				? this.$store.getters.currentFolder.unique_id
				: 0

			for (var i = files.length - 1; i >= 0; i--) {
				let formData = new FormData()

				// Append data
				formData.append('file', files[i])

				// Append form data
				formData.append('parent_id', rootFolder)

				// Upload data
				await store.dispatch('uploadFiles', formData).then(() => {
					// Progress file log
					store.commit('UPDATE_FILE_COUNT_PROGRESS', {
						current: fileCountSucceed,
						total: fileCount
					})

					// Uploading finished
					if (fileCount === fileCountSucceed) {
						store.commit('UPDATE_FILE_COUNT_PROGRESS', undefined)
					} else {
						// Add uploaded file
						fileCountSucceed++
					}
				})
			}
		}

		Vue.prototype.$downloadFile = function(url, filename) {
			var anchor = document.createElement('a')

			anchor.href = url

			anchor.download = filename

			document.body.appendChild(anchor)

			anchor.click()
		}

		Vue.prototype.$isTrashLocation = function() {

			return store.getters.currentFolder && store.getters.currentFolder.location === 'trash' || store.getters.currentFolder && store.getters.currentFolder.location === 'trash-root' ? true : false
		}

		Vue.prototype.$isMobile = function() {
			const toMatch = [
				/Android/i,
				/webOS/i,
				/iPhone/i,
				/iPad/i,
				/iPod/i,
				/BlackBerry/i,
				/Windows Phone/i
			]

			return toMatch.some(toMatchItem => {
				return navigator.userAgent.match(toMatchItem)
			})
		}

		Vue.prototype.$isMinimalScale = function() {
			let sizeType = store.getters.filesViewWidth

			return sizeType === 'minimal-scale'
		}

		Vue.prototype.$isCompactScale = function() {
			let sizeType = store.getters.filesViewWidth

			return sizeType === 'compact-scale'
		}

		Vue.prototype.$isFullScale = function() {
			let sizeType = store.getters.filesViewWidth

			return sizeType === 'full-scale'
		}

		Vue.prototype.$isSomethingWrong = function() {

			events.$emit('alert:open', {
				title: 'Whooops, something went wrong :(',
				message:
					"Something went wrong and we can't continue. Please contact us."
			})
		}
	}
}

export default Helpers
