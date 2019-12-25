<template>
  <div class="service-card" :class="{'is-reverse': direction == 'right'}"  >
    <div class="service-image">
      <img :src="serviceImage" alt="cat-icon" />
    </div>
    <div class="service-content" :class="{'pl-5': direction == 'left', 'pr-5': direction == 'right'}">
      <p class="service-title">{{serviceTitle}}</p>
      <p>{{serviceContent}}</p>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    serviceImage: {
      type: String,
      default: '../images/Cat-icon.png'
    },
    serviceTitle: {
      type: String,
      default: 'Default Services'
    },
    serviceContent: {
      type: String,
      default: 'We offer default pet services for all customers'
    },
    direction: {
      type: String,
      default: 'left'
    }
  }
}
</script>
<style scoped>
.service-card {
  display: flex;
  align-content: center;
  padding: 0.5rem;
  height: 120px;
}
.service-card.is-reverse {
  flex-direction: row-reverse;
}
.service-card.is-reverse .service-content {
  text-align: right;
}
.service-image {
  flex: 0 0 50px;
}
.service-image img {
  width: 50px;
  border-radius: 1000px;
  border: 1px solid #e9e8eb;
  background-color: #e9e8eb;
}
.service-content p {
  margin: 0;
}
p.service-title {
  margin-bottom: 0.25rem;
  font-weight: 700;
  font-size: 18px;
}
</style>