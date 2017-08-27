<template>
  <div>
    <ul>
      <li v-for="q in quotes">
        {{ q.content + ' -- ' + q.person }}
        <a href="#" v-if="!q.is_favorite" @click="markAsFavorite(q)">Add to favorite</a>
        <a href="#" v-else>Remove from favorite</a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: mapGetters({
    quotes: 'allQuotes',
  }),
  methods: mapActions([
    'markAsFavorite',
  ]),
  created() {
    this.$store.dispatch('getAllQuotes');
  },
};
</script>
