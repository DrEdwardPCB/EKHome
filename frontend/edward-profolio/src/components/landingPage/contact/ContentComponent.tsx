import { Social } from "./Social";
import { ContactMethod } from "./ContactMethod";
import { Message } from "./Message";
export const ContactContent = () => {
	return (
		<div className="min-h-[70vh] bg-[url(/src/assets/img/6-dark.png)]">
			<div className="w-full min-h-[70vh] p-4 bg-gradient-174 from-gray-700 from-20% via-transparent to-80% to-gray-600 ">
				<div className="grid grid-cols-2 gap-4">
					<div className="col-span-2 row-span-1 lg:col-span-1">
						<Social></Social>
					</div>
					<div className="col-span-2 row-span-1 lg:col-span-1">
						<ContactMethod></ContactMethod>
					</div>
					<div className="col-span-2 row-span-2 ">
						<Message></Message>
					</div>
				</div>
			</div>
		</div>
	);
};
