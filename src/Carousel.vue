<template>
  <div class="carousel">
    <!-- 轮播图片容器 -->
    <div class="carousel-inner">
      <div
        v-for="(imgItem, index) in images"
        :key="index"
        :class="['carousel-item', { active: index === currentIndex }]"
      >
        <img
          :src="imgItem"
          class="img-fluid"
          :alt="`Image ${index + 1}`"
          @click="openPreview(imgItem)"
        />
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

    <!-- 预览图片窗口 -->
    <div class="preview-overlay" v-show="isPreviewOpen" @click="closePreview">
      <img :src="previewImage" class="preview-image" alt="Preview" />
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

// 预览图片逻辑
const isPreviewOpen = ref(false);
const previewImage = ref(null);

// 打开预览窗口
const openPreview = (image) => {
  stopAutoSlide(); // 暂停轮播
  previewImage.value = image;
  isPreviewOpen.value = true;
};

// 关闭预览窗口
const closePreview = () => {
  isPreviewOpen.value = false;
  startAutoSlide(); // 重新启动轮播
};

// 计算图片总数
const totalSlides = computed(() => images.value.length);

let intervalId = null;

// 切换到下一张图片
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
};

// 自动轮播
const startAutoSlide = () => {
  if (intervalId === null) {
    intervalId = setInterval(nextSlide, 3000); // 每 3 秒切换
  }
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
  cursor: pointer; /* 鼠标变为手型，提示可点击 */
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
  width: 8px;
  height: 8px;
  border: none;
  border-radius: 50%;
  background: lightcyan;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition:
    transform 0.3s ease,
    background 0.3s ease;
}

.indicators button.active {
  background: #fff;
  transform: scale(1.3);
}

/* 预览图片窗口样式 */
.preview-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
}

.preview-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; /* 确保图片按比例显示 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
</style>