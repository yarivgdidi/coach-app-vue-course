<template>
  <section>
    <base-card>
      <h2>Register as a coach</h2>
      <coach-form @saveData="saveData"></coach-form>
    </base-card>
  </section>
</template>

<script>
import CoachForm from "@/pages/coaches/CoachForm";
export default {
  name: "CoachRegistration",
  components: {
    CoachForm
  },
  methods: {
    saveData(data) {
      this.$store.dispatch('coaches/registerCoach', data);
      this.$router.replace('/coaches')
    }

  },

}
</script>

<style scoped lang="css">

</style>
