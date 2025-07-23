<template>
  <div class="jn-works mt-5 position-relative" id="Works">
    <span class="badge bg-success jn-badge">{{ attributes.Badge }}</span>
    <div class="row mt-5 mx-0 jn-works-row" v-if="loaded">
      <div
        v-for="n in rows"
        :key="n"
        class="row"
      >
        <div
          v-for="(file, index) in markdownFiles.slice((n - 1) * itemsPerRow, n * itemsPerRow)"
          :key="file.id"
          class="col-lg-4 col-md-6 col-12 mb-5"
        >
          <div class="card jn-works-card h-100">
            <div class="card-body">
              <h5 class="card-title">
                {{ file.attributes.title }}
                <a
                  v-if="file.attributes.url"
                  class="text-decoration-none link-success"
                  :href="file.attributes.url"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i class="bi bi-arrow-up-right-circle"></i>
                </a>
                <span
                  v-else
                  class="text-decoration-none text-muted"
                  style="cursor: not-allowed;"
                >
                  <!-- <i class="bi bi-arrow-up-right-circle"></i> -->
                </span>
              </h5>
              <div class="card-title mt-3">
                项目日期：{{ file.attributes.date }}
              </div>
              <div class="card-title mt-3">
                <span
                  v-for="tags in file.attributes.tags"
                  :key="tags"
                  class="badge bg-success jn-tags me-2"
                >
                  {{ tags }}
                </span>
              </div>
              <div v-html="file.html" class="jn-card-text"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive, computed } from "vue";

// 导入主介绍内容
import { attributes, html } from "/contents/works/index.md";

const loaded = ref(false);
const screenWidth = ref(window.innerWidth);

// 响应式布局计算
const itemsPerRow = computed(() => {
  if (screenWidth.value >= 990) return 3; // 大屏幕：3栏
  if (screenWidth.value >= 770) return 2; // 中等屏幕：2栏
  return 1; // 小屏幕：1栏
});

const rows = computed(() => {
  return Math.ceil(markdownFiles.length / itemsPerRow.value);
});

// 监听窗口大小变化
const handleResize = () => {
  screenWidth.value = window.innerWidth;
};

const formattedHtml = ref("");
const formatHtml = (content) => {
  return content
    .toString()
    .replace(/<li>/g, `<p><i class="bi bi-emoji-wink-fill text-success"></i> `)
    .replace(/<\/li>/g, "</p>")
    .replace(/<ul>/g, "")
    .replace(/<\/ul>/g, "");
};
formattedHtml.value = formatHtml(html);

// 导入 .md 文件
const markdownContext = import.meta.glob("/contents/works/!(index).md");
const markdownFiles = reactive([]);
const getFiles = async () => {
  const importPromises = Object.values(markdownContext).map((path) =>
    path().then((module) => ({
      html: module.html,
      attributes: module.attributes,
    })),
  );
  markdownFiles.push(...(await Promise.all(importPromises)));
  // 按照 data 降序排列
  markdownFiles.sort((a, b) => {
    return a.attributes.date < b.attributes.date ? 1 : -1;
  });

  loaded.value = true;
};

onMounted(async () => {
  await getFiles();
  window.addEventListener('resize', handleResize);
});

// 清理事件监听器
onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
});
</script>

<style scoped>
.jn-works {
  background-color: rgba(58, 232, 179, 0.08);
}

.jn-works-card {
  box-shadow: 0 0 10pt #0000001c;
  border: 1px solid #ffffff2e;
}

.jn-works-row {
  padding-left: 18pt;
}

.bi-arrow-up-right-circle {
  display: inline-block; /* 确保元素可以正常旋转 */
  transition: transform 0.2s linear; /* 添加平滑过渡效果 */
}

/* 只有在链接存在时才显示hover动效 */
a:hover .bi-arrow-up-right-circle {
  transform: rotate(45deg); /* 在 hover 状态下旋转 45 度 */
}

/* 禁用状态的图标样式 */
.text-muted .bi-arrow-up-right-circle {
  opacity: 0.5;
  transition: none; /* 禁用过渡效果 */
}
</style>
