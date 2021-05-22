<template>
  <section>
    <coach-filter @changeFilter="setFilters"></coach-filter>
  </section>
  <section>
    <base-card>
      <div>
        <div class="controls">
        <base-button mode="outline">Refresh</base-button>
        <base-button v-if="!isCoach" link to="/register">Register a Coach</base-button>
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
      </div>
    </base-card>
  </section>
</template>

<script>
import CoachItem from "@/components/coaches/CoachItem";
import CoachFilter from "@/components/coaches/CoachFilter";

export default {
  name: "CoachList",
  components: {
    CoachItem,
    CoachFilter
  },
  data (){
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      }
    }
  },
  computed: {
    filteredCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter(coach => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      })
    },
    hasCoaches() {
      return this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach']
    }
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    }

  },

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
