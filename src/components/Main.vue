<template>
  <div>
    <main-header></main-header>
    <board></board>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
import { FETCH_USER, USER_STORE_NAME } from 'src/stores/user/constants';
import Board from './Board.vue';
import MainHeader from './MainHeader.vue';

export default {
  components: {
    MainHeader,
    Board
  },
  created() {
    this.fetchUser();
  },
  methods: {
    ...mapActions(USER_STORE_NAME, { fetchUser: FETCH_USER })
  }
};
</script>
