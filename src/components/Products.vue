<template>
  <div class="jn-products mt-5 position-relative" id="Products">
    <span class="badge bg-dark jn-badge">{{ attributes.Badge }}</span>

    <div class="row justify-content-evenly mt-5 mx-0">
      <div class="jn-left-panel mb-4 col-md-5 col-12">
        <div class="sticky-wrapper">
          <h2 class="jn-h2">
            {{ attributes.Title }}
          </h2>
          <div v-html="formattedHtml"></div>
        </div>
      </div>

      <div v-if="loaded" class="jn-right-panel col-md-7 col-12">
        <div
          v-for="(file, index) in markdownFiles"
          :key="file"
          class="row justify-content-between"
        >
          <div class="col-12 mb-5 jn-product-card">
            <div class="card jn-card">
              <div class="card-body">
                <h5 class="card-title">
                  {{ file.attributes.title }}
                  <a
                    class="text-decoration-none link-dark"
                    :href="file.attributes.url"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i class="bi bi-arrow-up-right-circle"></i>
                  </a>
                </h5>
                <div class="card-title mt-3">
                  <span
                    v-for="tags in file.attributes.tags"
                    :key="index"
                    class="badge bg-dark jn-tags me-2"
                  >
                    {{ tags }}
                  </span>
                </div>
                <div class="row my-3 align-items-start">
                  <div
                    v-html="file.html"
                    class="jn-card-text col-md-8 col-12 jn-products-text"
                  ></div>
                  <div class="col-md-4 col-12 pb-2">
                    <div class="jn-cover-img">
                      <Carousel :images="file.attributes.cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, reactive } from "vue";
import { useMainStore } from "@/store";
import stickybits from "stickybits";
import Carousel from "../Carousel.vue";
// 导入主介绍内容
import { attributes, html } from "/contents/products/index.md";

const store = useMainStore();
const isMobile = computed(() => store.isMobile);

const loaded = ref(false);

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
const markdownContext = import.meta.glob("/contents/products/!(index).md");
const imageModules = import.meta.glob("/contents/products/images/*", {
  eager: true,
});
const markdownFiles = reactive([]);

const getFiles = async () => {
  const importPromises = Object.values(markdownContext).map(
    async (loadMarkdown) => {
      const module = await loadMarkdown();
      const attributes = module.attributes;
      if (attributes.cover) {
        // 使用图片文件名来获取正确的导入路径
        const currentArray = attributes.cover.split(",");
        currentArray.forEach((item, index) => {
          const imagePathKey = Object.keys(imageModules).find((key) =>
            key.includes(item),
          );
          const imageUrl = imagePathKey
            ? imageModules[imagePathKey].default
            : null;
          currentArray[index] = imageUrl;
        });
        return {
          html: formatHtml(module.html),
          attributes: {
            ...attributes,
            cover: currentArray,
          },
        };
      }
      return {
        html: formatHtml(module.html),
        attributes: {
          ...attributes,
          cover: null,
        },
      };

      // const imagePathKey = Object.keys(imageModules).find(key => key.includes(attributes.cover));
      // const imageUrl = imagePathKey ? imageModules[imagePathKey].default : null;
    },
  );

  markdownFiles.push(...(await Promise.all(importPromises)));
  // 按照 date 降序排列
  markdownFiles.sort((a, b) =>{
    const aDate = new Date(a.attributes.date).getTime();
    const bDate = new Date(b.attributes.date).getTime();
    return bDate - aDate;
  });

  loaded.value = true;
};

onMounted(async () => {
  await getFiles();
  if (!isMobile.value) {
    stickybits(".sticky-wrapper", {
      stickyBitStickyOffset: 100,
    });
  }
});
</script>

<style scoped>
.jn-h2 {
  font-size: 3rem;
  margin-bottom: 2rem;
}

.jn-tags {
  width: fit-content;
}

.jn-cover-img {
  border-radius: 4pt;
  position: relative;
  overflow: hidden;
}

.jn-product-card {
  position: relative;
}
.jn-card{
  border: 1px solid transparent; /* 初始时无边框 */
  transition: border-color 0.3s ease; /* 添加平滑过渡效果 */
}

.jn-card:hover {
  cursor: pointer;
  border-color: #5E3BEE; /* 鼠标悬停时改变边框颜色 */
}

/* .jn-product-card:hover .jn-cover-img {
  transform: scale(1.1);
  transition: transform 0.3s ease-in-out;
}

.jn-product-card:hover .jn-product-title {
  color: #007bff;
  transition: color 0.3s ease-in-out;
} */



.jn-product-card .bi-arrow-up-right-circle {
  display: inline-block; /* 确保元素可以正常旋转 */
  transition: transform 0.2s linear; /* 添加平滑过渡效果 */
}

.jn-product-card .bi-arrow-up-right-circle:hover {
  transform: rotate(45deg); /* 旋转 45 度 */
  color:#5E3BEE
}
</style>
