<template>
  <div class="DayjsSample">
    {{ time }}
    {{ time }}
  </div>
</template>

<script>
import dayjs from 'dayjs' // ES 2015

export default {
  name: "DayjsSample",
  data() {
    return {
      time: dayjs().format(),
    };
  },
}

</script>