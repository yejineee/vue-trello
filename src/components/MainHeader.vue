<template>
  <header id="header">
    {{ headerTitle }}
  </header>
</template>
<script>
import { USER_STORE_NAME } from 'src/stores/user/constants';
import { COLUMN_STORE_NAME } from 'src/stores/column/constants';
import { mapState } from 'vuex';

export default {
  computed: {
    headerTitle() {
      return this.name && this.title ? `${this.name}'s ${this.title}` : '';
    },
    ...mapState(COLUMN_STORE_NAME, ['title']),
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
