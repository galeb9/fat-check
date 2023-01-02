<template>
  <div v-if="file" class="base-video-display">
    <video class="base-video-display__video" :style="{'max-height': bodyHeight + 'px'}" controls>
        <source ref="baseVideo" :src="require('@/assets/video/' + file)" type="video/mp4">
        <!-- <source src="movie.ogg" type="video/ogg"> -->
        Your browser does not support the video tag.
    </video>
  </div>
</template>

<script>
export default {
    name: "BaseVideoDisplay",
    props: {
        file: { type: String, default: ""},
        maxWidth: { type: String, default: ""}
    },
    data () {
        return {
            bodyHeight: null
        }
    },
    mounted () {
        this.bodyHeight= document.querySelector(".base-popup__body").offsetHeight - 50
    }
}
</script>

<style lang="scss">
    .base-video-display {
        min-height: 200px;
        display: flex;
        justify-content: center;
        .base-video-display__video {
            width: auto;
            // border-radius: $radius;
        }
        @media only screen and (max-width: 768px) {
            .base-video-display__video {
                max-width: 100% !important;
            }
        }
    }
</style>