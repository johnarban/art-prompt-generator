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

<script lang="ts">
  import { defineComponent } from 'vue'
  import HelloWorld from '@/components/HelloWorld.vue'
  
  // color scheme: 
  // subject matteer
  // media : watercolor, pastels, oil paint, gouache, alcohol markers, pencil, digital
  // 
  export default defineComponent({
    name: 'Art Prompt Generator',

    data() {
      return {
        medium: ['watercolor', 'pastels', 'oil paint', 'gouache', 'alcohol markers', 'pencil', 'digital'],
        subject: ['landscape', 'portrait', 'still life', 'abstract', 'animals', 'people', 'architecture', 'botanical'],
        colorScheme: ['red', 'green', 'blue', 'yellow', 'black & white', 'purple', 'orange', 'pink'],
        randomMedium: '',
        randomSubject: '',
        randomColorScheme: ''
      }
    },
    
    methods: {
      
      pickRandom(array: string[]) {
        return array[Math.floor(Math.random() * array.length)]
      },
      
      generatePrompt(): void {
        console.log('generate prompt');
        this.randomMedium = this.pickRandom(this.medium);
        this.randomSubject = this.pickRandom(this.subject);
        this.randomColorScheme = this.pickRandom(this.colorScheme);
      }
    }
  
});
  
</script>
