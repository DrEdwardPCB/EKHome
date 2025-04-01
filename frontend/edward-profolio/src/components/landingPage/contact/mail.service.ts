// import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";
// const mailerSend = new MailerSend({
// 	apiKey: import.meta.env.VITE_MAILER_SEND_TOKEN,
// });
// const IAM = new Recipient("eternal.edward1997@gmail.com", "Edward Wong");
// export const sendEmail = async (name: string, emailAddress: string, subject: string, content: string) => {
// 	// receipt mail
// 	const receiptMail = new EmailParams();
// 	{
// 		const sentFrom = new Sender(emailAddress, name);
// 		const recipients = [new Recipient(emailAddress, name)];
// 		receiptMail.setFrom(sentFrom).setTo(recipients).setSubject(`Receipt: ${subject}`).setText("message has been delivered to Edward");
// 	}
// 	const mainEmail = new EmailParams();
// 	{
// 		const sentFrom = new Sender(emailAddress, name);
// 		const recipients = [IAM];
// 		mainEmail.setFrom(sentFrom).setTo(recipients).setSubject(`Receipt: ${subject}`).setText(content);
// 	}
// 	await Promise.all([mailerSend.email.send(receiptMail), mailerSend.email.send(mainEmail)]);
// };
import emailjs from "@emailjs/browser";
const emailjsAPIKey = import.meta.env.VITE_EMAILJS_API_KEY
const emailjsServiceId = import.meta.env.VITE_EMAILJS_SERVICEID
const emailjsTemplateId = import.meta.env.VITE_EMAILJS_TEMPLATEID
emailjs.init("249L0Ik96Zo8ZgoFu");
export const sendEmail = async (name: string, emailAddress: string, subject: string, content: string) => {
	// receipt mail
	return emailjs.send("service_3a3dm0f", "template_3syc5tp", {
		name,
		subject,
		content,
		emailAddress,
	});
};
