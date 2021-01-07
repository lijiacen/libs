<template>
  <div class="body">
    <div class="test">{{message}}</div>
  </div>
</template>

<script>
export default {
  name: 'TestComponent',
  setup() {
    const message = "hello world";
    return {
      message
    };
  }

}
</script>

<style lang="scss" scoped>
.body {
  .test {
    color: red;
  }
}
</style>