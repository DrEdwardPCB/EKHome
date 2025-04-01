<script lang="ts">
	import Plus from "svelte-material-icons/Plus.svelte";
	import { ETemperatureType } from "../../obj/Temperature";
	import { storable } from "../../obj/storable";
	import TemperatureInput from "./TemperatureInput.svelte";
	import _ from "lodash";

	let celcius: number = 0;
	const tempStore = storable([ETemperatureType.Celcius, ETemperatureType.Fahrenheit]);

	let drop = (i: number) => {
		tempStore.update((val) => val.toSpliced(i, 1));
	};
	let updateType = (i: number, type: ETemperatureType) => {
		tempStore.update((val) => val.map((e, idx) => (idx === i ? type : e)));
	};
</script>

<div class="flex flex-col gap-2 h-96 w-96">
	{#each $tempStore as tempType, i}
		<TemperatureInput bind:tempC={celcius} {tempType} index={i} dropFnc={drop} tempTypeUpdateHander={updateType} />
	{/each}
	<button
		class="flex items-center w-full gap-2 text-left"
		title="Add Temperature Convert"
		on:click={(e) => {
			tempStore.update((val) => [...val, ETemperatureType.Celcius]);
		}}>
		Add Temperature Convert <Plus />
	</button>
</div>
