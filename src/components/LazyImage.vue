<template>
  <div class="lazy-image-wrapper" ref="wrapperRef">
    <div
      class="lazy-image-placeholder"
      :style="{ backgroundColor: placeholderColor }"
    ></div>
    <img
      v-show="isLoaded"
      :src="src"
      :alt="alt"
      :class="{ 'lazy-image-loading': isLoading, 'lazy-image-loaded': isLoaded, 'lazy-image-error': hasError }"
      @load="handleLoad"
      @error="handleError"
    />
    <div v-if="isLoading && !isLoaded" class="lazy-image-spinner">
      <svg viewBox="0 0 36 36" class="spinner-svg">
        <circle
          cx="18"
          cy="18"
          r="16"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          class="spinner-circle"
        ></circle>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  placeholderColor: {
    type: String,
    default: '#f5f5f5',
  },
  rootMargin: {
    type: String,
    default: '100px',
  },
})

const wrapperRef = ref(null)
const isLoaded = ref(false)
const isLoading = ref(false)
const hasError = ref(false)
let observer = null

const handleLoad = () => {
  isLoading.value = false
  isLoaded.value = true
}

const handleError = () => {
  isLoading.value = false
  hasError.value = true
}

const loadImage = () => {
  if (isLoaded.value || isLoading.value || hasError.value) return
  isLoading.value = true
}

onMounted(() => {
  if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            loadImage()
            observer?.unobserve(entry.target)
          }
        })
      },
      { rootMargin: props.rootMargin }
    )
    if (wrapperRef.value) {
      observer.observe(wrapperRef.value)
    }
  } else {
    loadImage()
  }
})

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
    observer = null
  }
})
</script>

<style scoped>
.lazy-image-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: #f5f5f5;
}

.lazy-image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: opacity 0.3s ease;
}

.lazy-image-loading + .lazy-image-placeholder {
  opacity: 1;
}

.lazy-image-loaded + .lazy-image-placeholder {
  opacity: 0;
}

.lazy-image-wrapper img {
  display: block;
  width: 100%;
  height: auto;
  opacity: 0;
  transform: scale(1.05);
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.lazy-image-loaded {
  opacity: 1;
  transform: scale(1);
}

.lazy-image-error {
  opacity: 0;
}

.lazy-image-spinner {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  color: #999;
}

.spinner-svg {
  width: 100%;
  height: 100%;
  animation: spin 1s linear infinite;
}

.spinner-circle {
  stroke-dasharray: 100;
  stroke-dashoffset: 30;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0%,
  100% {
    stroke-dashoffset: 30;
  }
  50% {
    stroke-dashoffset: 100;
  }
}
</style>