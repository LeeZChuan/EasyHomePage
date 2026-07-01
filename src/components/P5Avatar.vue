<template>
  <div ref="canvasContainer" class="p5-avatar"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const props = defineProps({
  size: { type: Number, default: 100 },
  seed: { type: Number, default: 0 },
});

const canvasContainer = ref(null);
let p5Instance = null;
let globalMouseX = 0;
let globalMouseY = 0;

function onMouseMove(e) {
  globalMouseX = e.clientX;
  globalMouseY = e.clientY;
  if (p5Instance) {
    p5Instance.redraw();
  }
}

onMounted(async () => {
  const p5Module = await import("p5");
  const p5 = p5Module.default;

  window.addEventListener("mousemove", onMouseMove);

  p5Instance = new p5((p) => {
    let faceColor;
    let noiseOffsets = [];
    const numPoints = 60;

    p.setup = () => {
      const canvas = p.createCanvas(props.size, props.size);
      canvas.parent(canvasContainer.value);
      p.noLoop();

      p.randomSeed(props.seed);
      p.noiseSeed(props.seed);

      faceColor = p.color(
        p.random(100, 240),
        p.random(100, 240),
        p.random(100, 240),
      );

      for (let i = 0; i < numPoints; i++) {
        noiseOffsets.push(p.random(1000));
      }
    };

    p.draw = () => {
      p.clear();
      const cx = props.size / 2;
      const cy = props.size / 2;
      const baseRadius = props.size * 0.36;

      p.fill(faceColor);
      p.noStroke();
      p.beginShape();
      for (let i = 0; i < numPoints; i++) {
        const angle = p.map(i, 0, numPoints, 0, p.TWO_PI);
        const noiseVal = p.noise(noiseOffsets[i]);
        const r = baseRadius + noiseVal * baseRadius * 0.35;
        const x = cx + r * p.cos(angle);
        const y = cy + r * p.sin(angle);
        p.vertex(x, y);
      }
      p.endShape(p.CLOSE);

      // 将全局鼠标坐标转换为 canvas 内的相对坐标
      const rect = canvasContainer.value?.getBoundingClientRect();
      let localMX = cx;
      let localMY = cy;
      if (rect) {
        localMX = globalMouseX - rect.left;
        localMY = globalMouseY - rect.top;
      }

      const eyeOffsetX = props.size * 0.15;
      const eyeY = cy - props.size * 0.05;
      const eyeRadius = props.size * 0.1;
      const pupilRadius = props.size * 0.05;
      const maxPupilOffset = eyeRadius * 0.45;

      drawEye(p, cx - eyeOffsetX, eyeY, eyeRadius, pupilRadius, maxPupilOffset, localMX, localMY);
      drawEye(p, cx + eyeOffsetX, eyeY, eyeRadius, pupilRadius, maxPupilOffset, localMX, localMY);

      // 微笑
      p.noFill();
      p.stroke(60);
      p.strokeWeight(2.5);
      p.arc(cx, cy + props.size * 0.1, props.size * 0.28, props.size * 0.18, 0, p.PI);
    };

    function drawEye(p, ex, ey, eyeR, pupilR, maxOffset, mx, my) {
      p.fill(255);
      p.noStroke();
      p.ellipse(ex, ey, eyeR * 2, eyeR * 2);

      const angle = p.atan2(my - ey, mx - ex);
      const d = p.dist(mx, my, ex, ey);
      const offset = p.min(d * 0.15, maxOffset);
      const px = ex + offset * p.cos(angle);
      const py = ey + offset * p.sin(angle);

      p.fill(30);
      p.ellipse(px, py, pupilR * 2, pupilR * 2);
    }
  });
});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", onMouseMove);
  if (p5Instance) {
    p5Instance.remove();
    p5Instance = null;
  }
});
</script>

<style scoped>
.p5-avatar {
  display: inline-block;
  line-height: 0;
}
</style>
