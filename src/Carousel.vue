<template>
  <div class="carousel">
    <!-- 轮播图片容器 -->
    <div class="carousel-inner">
      <div
        v-for="(imgItem, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === currentIndex }]"
      >
        <img :src="imgItem" class="img-fluid" :alt="`Image ${index + 1}`" />
      </div>
    </div>
    <!-- 底部指示点 -->
    <div class="indicators" v-if="images && images.length > 1">
      <button
        v-for="(imgItem, index) in images"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="currentIndex = index"
      ></button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, toRefs } from "vue";

// 接收父组件传递的 props
const props = defineProps({
  images: {
    type: Array,
    required: true,
  },
});

const { images } = toRefs(props);
// 当前显示的图片索引
const currentIndex = ref(0);

// 计算图片总数
const totalSlides = computed(() => images.value.length);

let intervalId = null;

// 切换到下一张图片
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
};

// 切换到上一张图片
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
};

// 自动轮播
const startAutoSlide = () => {
  intervalId = setInterval(nextSlide, 3000); // 每 3 秒切换
};

// 停止自动轮播
const stopAutoSlide = () => {
  clearInterval(intervalId);
  intervalId = null;
};

// 生命周期管理
onMounted(() => {
  startAutoSlide();
});

onUnmounted(() => {
  stopAutoSlide();
});
</script>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.carousel-inner {
  display: flex;
  position: relative;
}

.carousel-item {
  min-width: 100%;
  transition:
    opacity 0.5s ease-in-out,
    transform 0.5s ease-in-out;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
}

.carousel-item.active {
  opacity: 1;
  position: relative;
}

img {
  width: 100%;
  height: auto;
  display: block;
}

/* 指示点样式 */
.indicators {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.indicators button {
  width: 8px; /* 确保宽度为 8px */
  height: 8px; /* 确保高度为 8px */
  border: none; /* 移除默认边框 */
  border-radius: 50%; /* 强制变成正圆 */
  background: lightcyan;
  padding: 0; /* 确保没有额外填充 */
  margin: 0; /* 确保没有额外外边距 */
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.indicators button.active {
  background: #fff; /* 激活状态的颜色 */
  transform: scale(1.3); /* 激活状态稍微放大 */
}
</style>
