<template>
  <p v-html="text" class="base-html-text"></p>
</template>

<script>
export default {
    name: "BaseHTMLtext",
    props: {
        text: { type: String, default: ""}
    }

}
</script>

<style lang="scss">
	.base-html-text {
        white-space: pre-line;
		@media only screen and (max-width: 768px) { 
			font-size: 15px;
		}

	}
</style>