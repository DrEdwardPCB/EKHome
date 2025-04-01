import { useElementSize } from "usehooks-ts";

export const ScheduleContent = () => {
	const [ref, { width, height }] = useElementSize();
	return (
		<div className="min-h-[100vh] bg-[url(/src/assets/img/7-dark.png)]">
			<div ref={ref} className="w-full min-h-[100vh] bg-gradient-174 from-gray-700 from-20% via-transparent to-80% to-gray-600">
				<iframe
					src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FToronto&mode=WEEK&src=ZXRlcm5hbC5lZHdhcmQxOTk3QGdtYWlsLmNvbQ&src=ZW4uY2FuYWRpYW4jaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4uaG9uZ19rb25nI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udWsjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%23F6BF26&color=%23AD1457&color=%237CB342"
					style={{ border: 0 }}
					width={width}
					height={height}
					scrolling="no"></iframe>
			</div>
		</div>
	);
};
