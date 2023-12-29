<template>
  <v-app>
    <v-main>
      
      <h1>
        Art Prompt Generator
      </h1>
      
      <!-- button to generate -->
      <v-btn @click="generatePrompt()">
        Generate
      </v-btn>
      

      <h2>
      {{ randomMedium }} | {{ randomSubject }} | {{ randomColorScheme }}
      </h2>
      
      
    </v-main>
  </v-app>
</template>



<script setup lang="ts">
  import { ref } from 'vue'



  const medium = ref(['watercolor', 'pastels', 'oil paint', 'gouache', 'alcohol markers', 'pencil', 'digital'])
  const subject = ref(['landscape', 'portrait', 'still life', 'abstract', 'animals', 'people', 'architecture', 'botanical'])
  const colorScheme = ref(['red', 'green', 'blue', 'yellow', 'black & white', 'purple', 'orange', 'pink'])
  const randomMedium = ref('')
  const randomSubject = ref('')
  const randomColorScheme = ref('')

  const pickRandom = (array: string[]) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const generatePrompt = () => {
    console.log('generate prompt');
    randomMedium.value = pickRandom(medium.value);
    randomSubject.value = pickRandom(subject.value);
    randomColorScheme.value = pickRandom(colorScheme.value);
  }

      


</script>

<style lang="less">

:root {
  // set a default font stack
  --font-stack: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-size: 1rem;
  --font-weight: 400;
  --line-height: 1.5;
  font-family: var(--font-stack);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  line-height: var(--line-height);
}

</style>

  