<script setup lang="ts"></script>

<template>
  <div class="lowcode-engine">
    <div class="header">header</div>
    <div class="middle">
      <!-- 左侧图标列 -->
      <div class="workspace-left-icon left-icon"></div>
      <!-- float-panel和fixed-panel二选一 -->
      <div class="workspace-left-float-panel left-panel"></div>
      <div class="workspace-left-fixed-panel left-panel"></div>
      <!-- 右面工作区 -->
      <div class="workspace-workbench">
        <!--  -->
        <div class="workspace-sub-top-content"></div>
        <div class="workspace-workbench-content">
          <div class="workspace-engine-main">
            <!-- 主区域有分上中下结构 -->
            <div class="top-area"></div>
            <div class="main">
              <!-- 左侧图标列 -->
              <div class="left-icon"></div>
              <!-- float-panel和fixed-panel二选一 -->
              <div class="left-float-panel left-panel"></div>
              <div class="left-fixed-panel left-panel"></div>
              <div class="canvas-panel"></div>
              <div class="settings-pane"></div>
            </div>
            <div class="bottom-area"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="workspace-bottom-area bottom-area">bottom</div>
  </div>
</template>

<style scoped>
.lowcode-engine {
  display: flex;
  flex-direction: column;
  height: 100vh;
  .header {
    height: 48px;
    background-color: red;
  }
  .bottom {
    height: 48px;
    background-color: antiquewhite;
  }
  .middle {
    flex-grow: 1;
    display: flex;
    .workspace-left-icon {
      width: 48px;
      background-color: aqua;
    }
    /* .left-panel {
      min-width: 200px;
      background-color: aquamarine;
    } */
    .workspace-workbench {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .workspace-sub-top-content {
        height: 48px;
        background-color: blue;
      }
      .workspace-workbench-content {
        flex-grow: 1;
        display: flex;
        .workspace-engine-main {
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          .top-area {
            height: 48px;
            background-color: brown;
          }
          /* .bottom-area {
            height: 48px;
            background-color: burlywood;
          } */
          .main {
            flex-grow: 1;
            display: flex;
            /* .left-icon {
              width: 48px;
              background-color: beige;
            } */
            .canvas-panel {
              flex-grow: 1;
              background-color: blueviolet;
            }
            .settings-pane {
              width: 200px;
              background-color: blue;
            }
          }
        }
      }
    }
  }
}
.left-icon {
  width: 48px;
  background-color: aqua;
}
.left-panel {
  min-width: 120px;
  background-color: aquamarine;
}
.bottom-area {
  height: 48px;
  background-color: burlywood;
}
</style>
