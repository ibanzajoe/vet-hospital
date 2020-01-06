import Vue from 'vue'
import filestack from 'filestack-js';

export default (ctx, inject) => {
  const client = filestack.init('AnjLwWqfkR1erQfW1POTyz');

  ctx.$filepicker = client
  inject('filepicker', client)
}