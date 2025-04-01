<script lang="ts">
	import MinusBox from "svelte-material-icons/MinusBox.svelte";
	import { ETemperatureType, type ITemperature, Temperatures } from "../../obj/Temperature";
	export let index: number;
	export let dropFnc: (i: number) => void;
	export let tempC: number;
	export let tempType: ETemperatureType = ETemperatureType.Celcius;
	export let tempTypeUpdateHander: (i: number, type: ETemperatureType) => void;
	$: tempInfo = Temperatures.find((e) => e.type === tempType) as NonNullable<ITemperature>;
	$: fromFnc = tempInfo.FromCelcius;
	$: toFnc = tempInfo.ToCelcius;
	$: tempTypeUpdateHander(index, tempType);
</script>

<div class="flex gap-2">
	<input
		class="flex-1"
		type={"number"}
		step="0.1"
		on:input={(event) => {
			tempC = toFnc(Number(event.currentTarget?.value));
		}}
		value={fromFnc(tempC)} />
	<select bind:value={tempType}>
		{#each Temperatures as Temperature}
			<option value={Temperature.type}>
				{`${Temperature.name} [${Temperature.unit}]`}
			</option>
		{/each}
	</select>
	<button title="remove temperature convert record" on:click={(e) => dropFnc(index)}><MinusBox /></button>
</div>
