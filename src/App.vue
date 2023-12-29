<template>
  <v-app theme="dark">
    <v-main>
      
      
      <!-- create chips to preview theme colors -->
      <!-- <v-chip v-for="color in themeColors" :key="color" :color="color">
        {{ color }}
      </v-chip> -->
      
      <v-container fluid>
        
        <v-row class="ga-8" align="center" justify="center">
        <h1>
          Art Prompt Generator
        </h1>
        <v-btn prepend-icon="mdi-refresh" @click="generatePrompt()">
        Re-Generate
      </v-btn>
      </v-row>
      
        <v-row>
          <v-col v-for="([key, value], _) in randomPrompt" :key="key">
            <v-card class="prompt__item">
                <v-card-title>  <span class="prompt__key">{{ key }} </span> </v-card-title>
                <v-card-text> 
                  <p class="prompt__value">{{ value }} </p>
                  <details>
                    <summary> All {{ key }} options </summary>
                    <ul>
                      <li v-for="option in promptOptions.get(key)" :key="option">
                        {{ option }}
                      </li>
                    </ul>
                  </details>
                </v-card-text>
                
            </v-card>
          </v-col>
        </v-row>
      
      </v-container>
          
      
      
    </v-main>
  </v-app>
</template>



<script setup lang="ts">
  import { on } from 'events';
import { ref, onMounted } from 'vue'

  onMounted(() => {
    generatePrompt()
  })

  const medium = ['watercolor', 'pastels', 'oil paint', 'gouache', 'alcohol markers', 'pencil', 'digital']
  const subject = ['landscape', 'portrait', 'still life', 'abstract', 'animals', 'people', 'architecture', 'botanical']
  const colorScheme = ['red', 'green', 'blue', 'yellow', 'black & white', 'purple', 'orange', 'pink']
  
  // vueitfiy theeme colors
  const themeColors = [
    'primary',
    'secondary',
    'accent',
    'info',
    'success',
    'warning',
    'error'
  ]
  
  const promptOptions = ref(new Map([
    ['medium', medium],
    ['subject', subject],
    ['color scheme', colorScheme]
  ]))
  
  // create a random prompt with keys from promptOptions all initialized to ''
  const randomPrompt = ref(new Map(
    [...promptOptions.value.keys()].map(key => [key, ''])
    ))

  

  const pickRandom = (array: string[]) => {
    // pick a random item from an array
    return array[Math.floor(Math.random() * array.length)]
  }

  const generatePrompt = () => {
    console.log('generate prompt');
    
    randomPrompt.value.forEach((_, key) => {
      randomPrompt.value.set(key, pickRandom(promptOptions.value.get(key) ?? []))
    })
    
    
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

* {
  box-sizing: border-box;
}


details {
  margin-top: 2rem;
  font-size: calc(var(--font-size) * 0.8);
  color: rgb(var(--v-theme-on-surface-bright));
  summary {
    cursor: pointer;
  }
  
  ul {
    list-style: none;
    padding-left: 0.75rem;
  }
}

.prompt__key {
  font-size: calc(var(--font-size) * 1.2);
  font-weight: 600;
  text-transform: capitalize;
  color: #ccc;
}

.prompt__value {
  font-size: calc(var(--font-size) * 2);
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1.2;
  color: white;
}

</style>

  