<template>
  <section>
    FILTER
  </section>
  <section>
    <div class="controls">
      <button>Refresh</button>
      <router-link to="/register">Register a Coach</router-link>
    </div>
    <div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">
         <coach-item
             :id="coach.id"
             :first-name="coach.firstName"
             :last-name="coach.lastName"
             :rate="coach.hourlyRate"
             :areas="coach.areas"
         ></coach-item>
        </li>
      </ul>
      <h3 v-else>No Coaches found</h3>
    </div>

  </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem";

export default {
  name: "CoachList",
  components: {
    CoachItem,
  },
  computed: {
    filteredCoaches() {
      return this.$store.getters['coaches/coaches'];
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    }
  }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
