import { Button } from "@mui/material";
import dayjs from "dayjs";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInterval } from "usehooks-ts";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/configureStore";
const quotes = {
	"zh-HK": [
		{
			quote: "要成为你想要看到的改变。",
			author: "圣雄甘地",
		},
		{
			quote: "用三个词总结我对人生的认识：它继续前进。",
			author: "罗伯特·弗罗斯特",
		},
		{
			quote: "唯一做好伟大工作的方法就是热爱自己的工作。",
			author: "史蒂夫·乔布斯",
		},
		{
			quote: "相信自己能做到，你已经成功了一半。",
			author: "西奥多·罗斯福",
		},
		{
			quote: "成功不是终点，失败也不是毁灭。真正重要的是勇气去继续前进。",
			author: "温斯顿·丘吉尔",
		},
		{
			quote: "预测未来最好的方法就是创造未来。",
			author: "艾伦·凯",
		},
		{
			quote: "唯一真正的智慧就是知道自己一无所知。",
			author: "苏格拉底",
		},
		{
			quote: "我无法改变风的方向，但我可以调整船帆，一直朝着目标前进。",
			author: "吉米·迪恩",
		},
		{
			quote: "如果你想过上快乐的人生，就要把它与目标联系在一起，而不是与人或物联系在一起。",
			author: "阿尔伯特·爱因斯坦",
		},
		{
			quote: "幸福不是一件现成的东西，它来自于你自己的行动。",
			author: "达赖喇嘛",
		},
		{
			quote: "我们无法用创造问题的思维来解决问题。",
			author: "阿尔伯特·爱因斯坦",
		},
		{
			quote: "世界上最美好的事物是看不见或摸不到的——它们必须用心去感受。",
			author: "海伦·凯勒",
		},
		{
			quote: "生活中有10%是我们遭遇的事情，90%是我们如何应对。",
			author: "查尔斯·R·斯温道尔",
		},
		{
			quote: "不要盯着时钟看，做它所做的事情，继续前进。",
			author: "山姆·列文森",
		},
		{
			quote: "最伟大的荣耀不在于从未失败，而在于每次失败后都能重新站起来。",
			author: "纳尔逊·曼德拉",
		},
		{
			quote: "如果你看看你拥有的东西，你永远都会拥有更多。如果你看看你没有的东西，你永远都不会拥有足够。",
			author: "奥普拉·温弗瑞",
		},
		{
			quote: "未来属于那些相信自己梦想美好的人。",
			author: "埃莉诺·罗斯福",
		},
		{
			quote: "不管前进多慢，只要不停止，就一定能到达目的地。",
			author: "孔子",
		},
		{
			quote: "你错过了不尝试的100%。",
			author: "韦恩·格雷茨基",
		},
		{
			quote: "努力不是为了成功，而是为了成为有价值的人。",
			author: "阿尔伯特·爱因斯坦",
		},
	],
	en: [
		{
			quote: "Be the change you wish to see in the world.",
			author: "Mahatma Gandhi",
		},
		{
			quote: "In three words I can sum up everything I've learned about life: it goes on.",
			author: "Robert Frost",
		},
		{
			quote: "The only way to do great work is to love what you do.",
			author: "Steve Jobs",
		},
		{
			quote: "Believe you can and you're halfway there.",
			author: "Theodore Roosevelt",
		},
		{
			quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
			author: "Winston Churchill",
		},
		{
			quote: "The best way to predict the future is to invent it.",
			author: "Alan Kay",
		},
		{
			quote: "The only true wisdom is in knowing you know nothing.",
			author: "Socrates",
		},
		{
			quote: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
			author: "Jimmy Dean",
		},
		{
			quote: "If you want to live a happy life, tie it to a goal, not to people or things.",
			author: "Albert Einstein",
		},
		{
			quote: "Happiness is not something ready made. It comes from your own actions.",
			author: "Dalai Lama",
		},
		{
			quote: "We cannot solve our problems with the same thinking we used when we created them.",
			author: "Albert Einstein",
		},
		{
			quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
			author: "Helen Keller",
		},
		{
			quote: "Life is 10% what happens to us and 90% how we react to it.",
			author: "Charles R. Swindoll",
		},
		{
			quote: "Don't watch the clock; do what it does. Keep going.",
			author: "Sam Levenson",
		},
		{
			quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
			author: "Nelson Mandela",
		},
		{
			quote: "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
			author: "Oprah Winfrey",
		},
		{
			quote: "The future belongs to those who believe in the beauty of their dreams.",
			author: "Eleanor Roosevelt",
		},
		{
			quote: "It does not matter how slowly you go as long as you do not stop.",
			author: "Confucius",
		},
		{
			quote: "You miss 100% of the shots you don't take.",
			author: "Wayne Gretzky",
		},
		{
			quote: "Strive not to be a success, but rather to be of value.",
			author: "Albert Einstein",
		},
	],
};
export const Footer = () => {
	const randQuoteRef = useRef(null!);
	const inView = useInView(randQuoteRef);
	// const { t } = useTranslation();
	const { locale } = useSelector((state: RootState) => state.Language);
	useEffect(() => {
		setRandQ(randomQuote());
	}, [locale]);
	useInterval(
		() => {
			setRandQ(randomQuote());
		},
		inView ? 100000 : null
	);
	const randomQuote = (): string => {
		const quoteIndex = Math.floor(Math.random() * quotes.en.length);
		return quotes[locale][quoteIndex].quote;
	};
	const [randQ, setRandQ] = useState(randomQuote());
	return (
		<div className="flex flex-col w-full gap-6 p-10 bg-slate-800">
			<div>Ohh.. I dun even notice someone will scroll to here</div>
			<hr></hr>
			<div className="flex items-center justify-between w-full gap-4">
				<div>{`© 2023-${dayjs().format("YYYY")} Edward Wong. All rights reserved.`}</div>
				<p ref={randQuoteRef}>{randQ}</p>
				<Button
					onClick={() => {
						window.scrollTo(0, 0);
					}}>
					go back to top
				</Button>
			</div>
		</div>
	);
};
