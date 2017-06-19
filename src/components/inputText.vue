<template>
  <div class="tipsModal">
    {{ showMsg }}
  </div>
</template>
<script>
export default {
  name: 'inputText',
  props: {
    showMsg: {
      type: [String]
    }
  },
  data () {
    return {}
  }
}
</script>
<style lang="scss" scope>
  .tipsModal {
    text-align: center;
    font-size: 1.6rem;
    color: #fe5e5e;
    width: 80%;
    border-radius: 5px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.5rem 0;
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -30%);
  }
</style>
