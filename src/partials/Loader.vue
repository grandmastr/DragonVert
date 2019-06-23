<template>
	<div class="loader" id="loader">
		<div class="loader">
			<!-- <img src="../../public/images/loading-middle-1.gif" alt srcset> -->
			<div class="lds-css ng-scope" style="width: 150px; height: 150px;">
				<div class="lds-blocks" style="width:100%;height:100%">
					<div style="left:54px;top:54px;animation-delay:0s"></div>
					<div style="left:85px;top:54px;animation-delay:0.125s"></div>
					<div style="left:116px;top:54px;animation-delay:0.25s"></div>
					<div style="left:54px;top:85px;animation-delay:0.875s"></div>
					<div style="left:116px;top:85px;animation-delay:0.375s"></div>
					<div style="left:54px;top:116px;animation-delay:0.75s"></div>
					<div style="left:85px;top:116px;animation-delay:0.625s"></div>
					<div style="left:116px;top:116px;animation-delay:0.5s"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<style type="text/css" >
@keyframes lds-blocks {
	0% {
		background: #fab000;
	}
	12.5% {
		background: #fab000;
	}
	12.625% {
		background: #19253a;
	}
	100% {
		background: #19253a;
	}
}
@-webkit-keyframes lds-blocks {
	0% {
		background: #fab000;
	}
	12.5% {
		background: #fab000;
	}
	12.625% {
		background: #19253a;
	}
	100% {
		background: #19253a;
	}
}
.lds-blocks {
	position: relative;
}
.lds-blocks div {
	position: absolute;
	width: 30px;
	height: 30px;
	background: #19253a;
	-webkit-animation: lds-blocks 1s linear infinite;
	animation: lds-blocks 1s linear infinite;
}
.lds-blocks {
	width: 129px !important;
	height: 129px !important;
	-webkit-transform: translate(-74.5px, -74.5px) scale(0.745)
		translate(74.5px, 74.5px);
	transform: translate(-74.5px, -74.5px) scale(0.745)
		translate(74.5px, 74.5px);
}
</style>
<script>
export default {
	name: "loader"
};
</script>