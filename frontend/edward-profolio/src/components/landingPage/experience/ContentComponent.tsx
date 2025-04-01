import { ExperienceDiagram } from "./ExperienceDiagram";

export const ExperienceContent = () => {
	return (
		<div className="h-[80vh] bg-[url(/src/assets/img/4-dark.png)]">
			<div className="relative w-full h-[80vh] bg-gradient-174 from-gray-700 from-20% via-transparent to-80% to-gray-600 overflow-y-auto before:absolute before:w-full after:w-full before:h-8 before:w-full before:bg-gradient-to-b before:from-gray-700 before:translate-y-3 before:to-transparent before:top-0 after:absolute after:h-10 after:w-full after:bg-gradient-to-t after:from-gray-600 after:to-transparent after:bottom-0">
				<div className="h-full p-4 overflow-x-hidden overflow-y-auto">
					<ExperienceDiagram />
				</div>
			</div>
		</div>
	);
};
