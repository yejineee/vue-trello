<template>
  <header id="header">
    {{ title }}
  </header>
</template>
<script>
import { USER_STORE_NAME } from 'src/stores/user/constants';
import { mapState } from 'vuex';

export default {
  computed: {
    title() {
      return this.name ? `${this.name}'s Trello` : '';
    },
    ...mapState(USER_STORE_NAME, ['name'])
  }
};
</script>
<style lang="scss">
@import 'src/style/mixin.scss';

#header {
  @include flex-center;
  color: #170f14;
  font: {
    size: 1.3em;
    weight: 800;
  }
  background: #cdb1c1;
  height: 3rem;
}
</style>
