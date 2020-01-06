<template>
  <div @click="handle_click" class="file-upload">
    <slot>Upload</slot>
  </div>
</template>
<script>
  export default {
    props: {
      single_select: {
        type: Boolean,
        default: false
      },
      max_select_size: {
        type: Number,
        default: 50
      }
    },
    data () {
      return {
        maxFiles: this.single_select ? 1 : this.max_select_size
      }
    },
    methods: {
      handle_click (){
        this.$filepicker
          .pick({
            storeTo: {
              location: 's3'
            },
            maxFiles: this.maxFiles,
            fromSources: ['local_file_system', 'googledrive', 'dropbox', 'gmail', 'onedrive', 'clouddrive']
          })
          .then( res => {
            this.$emit('files', res.filesUploaded)
          })

      }
    }
  }
</script>
