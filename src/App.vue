<template>
  <div class="main">
    <!-- <TheHeader /> -->

    <RouterView class="router-view" v-slot="{ Component }">
		<transition name="fade-in" mode="out-in">
				<component class="active-component" :is="Component" />
		</transition>
    </RouterView>


  </div>
</template>

<script>
import TheHeader  from "@/components/header/TheHeader.vue"

export default {
  name: 'App',
  components: {
    TheHeader
  }
}
</script>

<style lang="scss">
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
:root {
    --secondary: #a3cef1;
    --bg: linear-gradient( var(--secondary), #f5f3f4);
	--radius: 8px;
}
body {
	background: var(--bg);
	min-height: 100vh;
}
// body:after {
// 	content: "";
// 	background-image: url("http://www.transparenttextures.com/patterns/black-paper.png");
// 	top: 0;
// 	left: 0;
// 	bottom: 0;
// 	right: 0;
// 	margin: 0;
// 	position: fixed;
// 	opacity: 0.4;
// 	z-index: -1;
// }
img {
	max-width: 100%;
	height: auto;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: white;
	// background: var(--bg);
	a:link,
	a:visited {
		text-decoration: none;
		border-bottom: none;
		color: inherit;
	}
	.main {
		max-width: 1420px;
		padding: 0 40px;
		margin: 0 auto;
		.router-link-active {
			transition: all 0.2s ease-out;
			border-bottom: 2px solid var(--secondary);
			padding: 0 3px 5px;
		}
		.display-on-desktop { display: block }
		.display-on-mobile { display: none }
		@media only screen and (max-width: 768px) {
			padding: 0 20px; // app padding at sides

			.display-on-desktop { display: none }
			.display-on-mobile { display: block }
		}


	}

	// device sizes -> text, side padding
}
</style>
