<template>
  <button :type="type" :name="name" v-on="$listeners">{{ctaText}}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    ctaText: String,
    name: String,
    type: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
