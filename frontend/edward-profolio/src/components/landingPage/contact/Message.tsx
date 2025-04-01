import { TextField } from "@mui/material";
import { twMerge } from "tailwind-merge";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { sendEmail } from "./mail.service";
import { Button } from "@mui/material";
import { toast } from "react-toastify";
import { AiOutlineMail } from "react-icons/ai";
import { Pills } from "../../common/Pills";
import { useTranslation } from "react-i18next";

export const messageSchema = z.object({
	name: z.string().min(3),
	emailAddress: z.string().email(),
	subject: z.string().min(3),
	content: z.string().min(3),
});
export const Message = () => {
	const { control, handleSubmit } = useForm<z.infer<typeof messageSchema>>({
		resolver: zodResolver(messageSchema),
		defaultValues: {
			name: "",
			emailAddress: "",
			subject: "",
			content: "",
		},
	});
	const submitForm = async (value: z.infer<typeof messageSchema>) => {
		try {
			await sendEmail(value.name, value.emailAddress, value.subject, value.content);
			toast.success("Message has been delivered successfully");
		} catch (err) {
			console.error(err);
			toast.error("An error has been occur while sending message");
		}
	};
	const { t } = useTranslation();

	return (
		<div className="flex flex-col h-full p-4 shadow-lg bg-opacity-60 rounded-xl bg-slate-600">
			<div className="flex items-center justify-between gap-2">
				<h3 className="my-4 text-xl font-bold ">Message</h3>
				<Pills hover IconSlot={<AiOutlineMail className="font-bold text-blue-500"></AiOutlineMail>} TextSlot={t("CONTACT_SUBTITLE_EMAIL")}></Pills>
			</div>
			<form onSubmit={handleSubmit(submitForm)}>
				<div className="grid grid-cols-2 gap-4 mb-4">
					<Controller
						control={control}
						name="name"
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<TextField
								className="col-span-2 lg:col-span-1"
								value={value}
								onChange={(e) => onChange(e.target.value)}
								error={!!error}
								placeholder="How shold we call you"
								label="name"
								helperText={error?.message}></TextField>
						)}></Controller>
					<Controller
						control={control}
						name="emailAddress"
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<TextField
								className="col-span-2 lg:col-span-1"
								value={value}
								onChange={(e) => onChange(e.target.value)}
								error={!!error}
								placeholder="Your Email address?"
								label="Email Address"
								helperText={error?.message}></TextField>
						)}></Controller>
					<Controller
						control={control}
						name="subject"
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<TextField
								className="col-span-2 "
								value={value}
								onChange={(e) => onChange(e.target.value)}
								error={!!error}
								placeholder="Subject..."
								label="Subject"
								helperText={error?.message}></TextField>
						)}></Controller>
					<Controller
						control={control}
						name="content"
						render={({ field: { onChange, value }, fieldState: { error }, formState }) => (
							<TextField
								className="col-span-2 "
								value={value}
								onChange={(e) => onChange(e.target.value)}
								error={!!error}
								placeholder="Some details here..."
								label="Content"
								multiline
								rows={5}
								helperText={error?.message}></TextField>
						)}></Controller>
				</div>
				<Button variant="contained" type="submit">
					Submit
				</Button>
			</form>
		</div>
	);
};
