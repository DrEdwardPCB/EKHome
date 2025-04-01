export enum ETemperatureType {
	Kelvin,
	Celcius,
	Newton,
	Reaumur,
	Fahrenheit,
}
export interface ITemperature {
	type: ETemperatureType;
	name: string;
	unit: string;
	FromCelcius: (value: number) => number;
	ToCelcius: (value: number) => number;
}
export const Temperatures: ITemperature[] = [
	{
		type: ETemperatureType.Celcius,
		name: "Celcius",
		unit: "°C",
		FromCelcius: (value) => value,
		ToCelcius: (value) => value,
	},
	{
		type: ETemperatureType.Kelvin,
		name: "Kelvin",
		unit: "K",
		FromCelcius: (value) => value + 237.15,
		ToCelcius: (value) => value - 237.15,
	},
	{
		type: ETemperatureType.Newton,
		name: "Newton",
		unit: "°N",
		FromCelcius: (value) => value * (33 / 100),
		ToCelcius: (value) => value * (100 / 33),
	},
	{
		type: ETemperatureType.Reaumur,
		name: "Réaumur",
		unit: "°Ré",
		FromCelcius: (value) => value * (4 / 5),
		ToCelcius: (value) => value * (5 / 4),
	},
	{
		type: ETemperatureType.Fahrenheit,
		name: "Fahrenheit",
		unit: "°F",
		FromCelcius: (value) => value * (9 / 5) + 32,
		ToCelcius: (value) => (value - 32) * (5 / 9),
	},
];
