<script setup lang="ts">

definePageMeta({
	alias: ["/", "", "/home"],
});

const {data: response} = await useFetch("https://script.google.com/macros/s/AKfycbxQ_PGpmrZl1ikJWEg9JJ136OVSIit8Qq-bR0ABX_JiCjcvH3U4TKpCArxA7NY_xgHm/exec?sheetName=tags", {headers: {"Content-Type": "application/x-www-form-urlencoded", Accept: "application/json"}});



</script>

<template>
	<NuxtPage />
	<section class="before-index">
		<h2>このサイトはなに？</h2>"
		<p>このサイトは、私が制作している創作言語 (人工言語) の画像をまとめておくためのサイトです。<br>そういう場所が必要だと感じたから用意した。</p>
		<p>(現在、アルファ版として公開中です。<br>今後、予告無しに膨大な変更が加えられる可能性があります。)</p>
	</section>

	<div class="index-container">
		<ul>
			<li>
				<NuxtLink to="/list">リスト</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/tag-list">タグ一覧</NuxtLink>
			</li>
			<li>
				<NuxtLink to="/random">ランダム</NuxtLink>
			</li>
		</ul>
	</div>

	<div>{{ response }}</div>
</template>

<style scoped lang="scss">
h2, p {
	text-align: center;
}

.index-container {
	display: flex;
	justify-content: center;
	padding-block-start: 2rem;

	ul {
		height: 100%;
		list-style: none;
		font-size: 2rem;
		font-weight: bold;
		padding-inline-start: 0;

		li {
			text-decoration: none;
			position: relative;
			margin-block-end: 1rem;

			&:has(a:hover)::before {
				width: 100%;
			}

			&::before {
				content: '';
				display: block;
				background-color: #e0f0ff;
				position: absolute;
				z-index: -1;
				left: 0;
				bottom: 0;
				width: 0;
				height: 100%;
				transition: all .3s;
			}

			a {
				text-decoration: none;
				width: 100%;
				display: block;
				padding-inline: .5rem;
				color: #3050a0;
				box-sizing: border-box;

				&::after {
					display: block;
					content: '';
					position: absolute;
					left: 0;
					bottom: 0;
					width: 100%;
					border-block-end: 2px #3050a0 solid;
				}
			}
		}
	}
}
</style>