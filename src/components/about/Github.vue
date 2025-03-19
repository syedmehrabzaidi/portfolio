<template>
  <Row style="justify-content: center; padding-bottom: 10px">
    <h1 class="project-heading">Days I <strong class="blue">Code</strong></h1>
    <template v-if="calendarData && calendarData.length > 0">
      <CalendarHeatmap
        :values="calendarData"
        :end-date="new Date()"
        :range="365"
        :max="10"
        :range-color="['#e3f2fd', '#90caf9', '#007bff', '#01579b', '#003366']"
        :round="1"
      />
    </template>
    <div v-else class="loading">Loading GitHub Contributions...</div>
  </Row>
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue'
import { CalendarHeatmap } from 'vue3-calendar-heatmap'
import Row from '../bootstrap/Row.vue'

export default defineComponent({
  name: 'GitHub',
  components: {
    CalendarHeatmap,
    Row
  },
  setup() {
    const calendarData = ref([])

    const fetchContributions = async () => {
      try {
        const response = await fetch(
          'https://github-contributions-api.jogruber.de/v4/muneer-ahmed-khan?y=last'
        )
        const data = await response.json()

        // Transform the API data to match the heatmap's format
        if (data.contributions && Array.isArray(data.contributions)) {
          const transformedData = data.contributions.map((entry) => ({
            date: entry.date, // Date in ISO format
            count: entry.count // Contribution count
          }))
          calendarData.value = transformedData
        } else {
          console.error('Invalid contributions data', data)
        }
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error)
      }
    }

    onMounted(() => {
      fetchContributions()
    })

    return {
      calendarData
    }
  }
})
</script>
