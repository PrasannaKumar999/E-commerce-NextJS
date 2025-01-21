import ProductCard from "@/components/productCard";
import { homeStyled } from "@/styles/homeStyled";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

// import Swiper core and required modules
import {
	Navigation,
	Pagination,
	Scrollbar,
	A11y,
	Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export async function getServerSideProps(context) {
	const res = await fetch("https://fakestoreapi.in/api/products");
	const data = await res.json();
	const productsData = data.products;

	return {
		props: { productsData },
	};
}

const Home = ({ productsData }) => {
	const [categories, setCategories] = useState(null);

	useEffect(() => {
		fetch("https://fakestoreapi.in/api/products/category")
			.then((res) => res.json())
			.then((data) => {
				setCategories(data.categories);
			});
	}, []);

	const categoryOptions = [
		"Woman’s Fashion",
		"Men’s Fashion",
		"Electronics",
		"Home & Lifestyle",
		"Medicine",
		"Sports & Outdoor",
		"Baby’s & Toys",
		"Groceries & Pets",
		"Health & Beauty",
	];

	const countdown = [
		{ title: "days", subtitle: "23" },
		{ title: "hours", subtitle: "05" },
		{ title: "minutes", subtitle: "59" },
		{ title: "seconds", subtitle: "35" },
	];

	const scrollContainerRef = useRef(null);
	const router = useRouter();

	const scrollButton = (direction) => {
		if (scrollContainerRef.current) {
			if (direction === "right") {
				scrollContainerRef.current.scrollBy({
					left: 600, // Adjust the scroll distance
					behavior: "smooth", // Smooth scrolling
				});
			} else {
				scrollContainerRef.current.scrollBy({
					left: -600, // Adjust the scroll distance
					behavior: "smooth", // Smooth scrolling
				});
			}
		}
	};

	const imageCountDown = [
		{ title: "days", subtitle: "03" },
		{ title: "hours", subtitle: 23 },
		{ title: "minutes", subtitle: 19 },
		{ title: "seconds", subtitle: 56 },
	];

	const service = [
		{
			title: "FREE AND FAST DELIVERY",
			subtitle: "Free delivery for all orders over $140",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="41"
					height="40"
					viewBox="0 0 41 40"
					fill="none">
					<g clipPath="url(#clip0_1014_335)">
						<path
							d="M12.1667 31.6667C14.0076 31.6667 15.5 30.1743 15.5 28.3333C15.5 26.4924 14.0076 25 12.1667 25C10.3257 25 8.83334 26.4924 8.83334 28.3333C8.83334 30.1743 10.3257 31.6667 12.1667 31.6667Z"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M28.8333 31.6667C30.6743 31.6667 32.1667 30.1743 32.1667 28.3333C32.1667 26.4924 30.6743 25 28.8333 25C26.9924 25 25.5 26.4924 25.5 28.3333C25.5 30.1743 26.9924 31.6667 28.8333 31.6667Z"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8.83331 28.3335H7.49998C6.39541 28.3335 5.49998 27.4381 5.49998 26.3335V21.6668M3.83331 8.3335H20.1666C21.2712 8.3335 22.1666 9.22893 22.1666 10.3335V28.3335M15.5 28.3335H25.5M32.1667 28.3335H33.5C34.6046 28.3335 35.5 27.4381 35.5 26.3335V18.3335M35.5 18.3335H22.1666M35.5 18.3335L31.0826 10.9712C30.7211 10.3688 30.0701 10.0002 29.3676 10.0002H22.1666"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M8.5 28H7.16667C6.0621 28 5.16667 27.1046 5.16667 26V21.3333M3.5 8H19.8333C20.9379 8 21.8333 8.89543 21.8333 10V28M15.5 28H25.1667M32.5 28H33.1667C34.2712 28 35.1667 27.1046 35.1667 26V18M35.1667 18H21.8333M35.1667 18L30.7493 10.6377C30.3878 10.0353 29.7368 9.66667 29.0343 9.66667H21.8333"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.5 11.8184H12.1667"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M2.31818 15.4546H8.98484"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M5.5 19.0908H12.1667"
							stroke="#FAFAFA"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1014_335">
							<rect
								width="40"
								height="40"
								fill="white"
								transform="translate(0.5)"
							/>
						</clipPath>
					</defs>
				</svg>
			),
		},
		{
			title: "24/7 CUSTOMER SERVICE",
			subtitle: "Friendly 24/7 customer support",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none">
					<g clipPath="url(#clip0_1014_352)">
						<path
							d="M13.3334 24.9998C13.3334 23.1589 11.841 21.6665 10 21.6665C8.15907 21.6665 6.66669 23.1589 6.66669 24.9998V28.3332C6.66669 30.1741 8.15907 31.6665 10 31.6665C11.841 31.6665 13.3334 30.1741 13.3334 28.3332V24.9998Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M33.3334 24.9998C33.3334 23.1589 31.841 21.6665 30 21.6665C28.1591 21.6665 26.6667 23.1589 26.6667 24.9998V28.3332C26.6667 30.1741 28.1591 31.6665 30 31.6665C31.841 31.6665 33.3334 30.1741 33.3334 28.3332V24.9998Z"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M6.66669 24.9998V19.9998C6.66669 16.4636 8.07145 13.0722 10.5719 10.5717C13.0724 8.07126 16.4638 6.6665 20 6.6665C23.5362 6.6665 26.9276 8.07126 29.4281 10.5717C31.9286 13.0722 33.3334 16.4636 33.3334 19.9998V24.9998"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
						<path
							d="M30 31.6665C30 32.9926 28.9464 34.2644 27.0711 35.202C25.1957 36.1397 22.6522 36.6665 20 36.6665"
							stroke="white"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</g>
					<defs>
						<clipPath id="clip0_1014_352">
							<rect width="40" height="40" fill="white" />
						</clipPath>
					</defs>
				</svg>
			),
		},
		{
			title: "MONEY BACK GUARANTEE",
			subtitle: "We reurn money within 30 days",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="40"
					height="40"
					viewBox="0 0 40 40"
					fill="none">
					<path
						d="M8.09906 30.5992L8.09883 30.5991C7.2261 29.9483 6.42549 28.9206 5.8427 27.759C5.25985 26.5973 4.91663 25.3451 4.91663 24.2666V11.8666C4.91663 9.50736 6.67146 6.96177 8.89112 6.13513L8.89208 6.13477L17.2083 3.01826C17.2084 3.01823 17.2085 3.0182 17.2086 3.01817C17.9621 2.73661 18.9615 2.5874 19.9833 2.5874C21.0051 2.5874 22.0045 2.73661 22.758 3.01817C22.7581 3.0182 22.7582 3.01823 22.7582 3.01826L31.0745 6.13477L31.0755 6.13513C33.2951 6.96177 35.05 9.50736 35.05 11.8666V24.2499C35.05 25.3371 34.7066 26.5892 34.124 27.7483C33.5415 28.9073 32.741 29.9313 31.8678 30.5824L31.8675 30.5826L24.7009 35.9326L24.7008 35.9325L24.6946 35.9373C23.4119 36.9264 21.724 37.4332 20 37.4332C18.2773 37.4332 16.5851 36.927 15.2648 35.9486C15.2647 35.9484 15.2645 35.9483 15.2644 35.9482L8.09906 30.5992ZM17.7418 4.43145L17.7412 4.4317L9.4245 7.54837L9.42379 7.54863C8.59621 7.86019 7.85498 8.52248 7.32406 9.29061C6.79297 10.059 6.43329 10.9898 6.43329 11.8832V24.2666C6.43329 25.161 6.74388 26.1892 7.20088 27.101C7.65776 28.0126 8.29325 28.8722 9.00081 29.4005L9.00085 29.4006L16.1672 34.7503C17.2292 35.5445 18.6282 35.9249 20.002 35.9249C21.376 35.9249 22.7782 35.5445 23.8477 34.7516L23.8491 34.7506L31.0157 29.4006L31.0166 29.3999C31.7314 28.8638 32.3668 28.005 32.8222 27.0943C33.2775 26.1837 33.5833 25.16 33.5833 24.2666V11.8666C33.5833 10.9804 33.2229 10.0538 32.6925 9.28645C32.162 8.51889 31.4223 7.85396 30.5976 7.5338L30.5976 7.53376L30.5921 7.5317L22.2754 4.41503L22.2755 4.41495L22.2664 4.41174C21.6282 4.18651 20.8001 4.08314 20.0007 4.08532C19.202 4.0875 18.3751 4.19514 17.7418 4.43145Z"
						fill="#FAFAFA"
						stroke="#FAFAFA"
					/>
					<path
						d="M17.4131 21.0536L17.7667 21.4071L18.1202 21.0536L24.4036 14.7703C24.6916 14.4822 25.1751 14.4822 25.4631 14.7703C25.7512 15.0583 25.7512 15.5417 25.4631 15.8298L18.2965 22.9965C18.1452 23.1478 17.9579 23.2167 17.7667 23.2167C17.5755 23.2167 17.3882 23.1478 17.2369 22.9965L14.5536 20.3131C14.2655 20.0251 14.2655 19.5417 14.5536 19.2536C14.8416 18.9655 15.3251 18.9655 15.6131 19.2536L17.4131 21.0536Z"
						fill="#FAFAFA"
						stroke="#FAFAFA"
					/>
				</svg>
			),
		},
	];

	return (
		<>
			<style jsx>{homeStyled}</style>
			{/* <div className="divider"></div> */}
			<div>
				<div className="categoryContainer">
					<div className="leftSection">
						{categoryOptions.map((ele) => (
							<span className="category" key={ele}>
								{ele}
							</span>
						))}
					</div>
					<div className="rightSection">
						<div className="imageContainer">
							{/* <img src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"/> */}
							<div>
								<Swiper
									pagination={true}
									modules={[Autoplay, Pagination, Navigation, A11y]}
									spaceBetween={50}
									slidesPerView={1}
									autoplay={{
										delay: 3000, // Delay between transitions in milliseconds
										disableOnInteraction: false, // Keep autoplay running after user interaction
									}}
									className="mySwiper">
									<SwiperSlide>
										<div className="imageContainer">
											<img
												src="https://img.freepik.com/free-vector/flat-horizontal-banner-template-black-friday-sale_23-2150846934.jpg?semt=ais_hybrid"
												style={{ borderRadius: "5px" }}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="imageContainer">
											<img
												src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
												style={{ borderRadius: "5px" }}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="imageContainer">
											<img
												src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
												style={{ borderRadius: "5px" }}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="imageContainer">
											<img
												src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
												style={{ borderRadius: "5px" }}
											/>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="imageContainer">
											<img
												src="https://fastly.picsum.photos/id/25/5000/3333.jpg?hmac=yCz9LeSs-i72Ru0YvvpsoECnCTxZjzGde805gWrAHkM"
												style={{ borderRadius: "5px" }}
											/>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</div>
					</div>
				</div>
				<div className="dealsToday">
					<div className="rectangle"></div>
					<div>Today's</div>
				</div>
				<div className="countdown">
					<div className="textFlashSales">Flash Sales</div>
					<div className="countdownContainer">
						{countdown.map((ele, index) => (
							<div className="timeContainer" key={index}>
								<div className="time">
									<div className="timeTitle">{ele.title}</div>
									<div className="timeSubTitle">{ele.subtitle}</div>
								</div>
								{countdown.length > index + 1 && (
									<div className="colonContainer">
										<div className="colon"></div>
										<div className="colon"></div>
									</div>
								)}
							</div>
						))}
					</div>
					<div className="buttonContainer">
						<div className="slideButton" onClick={() => scrollButton("left")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none">
								<path
									d="M8 1L1 8L8 15M1 8H17"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="slideButton" onClick={() => scrollButton("right")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19"
								height="16"
								viewBox="0 0 19 16"
								fill="none">
								<path
									d="M1.5 8H18M18 8L11 1M18 8L11 15"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div
					ref={scrollContainerRef}
					className="productsDataContainer">
					{productsData &&
						productsData.map((ele) => (
							<ProductCard product={ele} key={ele.id} />
						))}
				</div>
				<div className="ctaAllProductsContainer">
					<div
						className="ctaAllProducts"
						onClick={() => router.push("home/products")}>
						View All Products
					</div>
				</div>
				<div
					style={{
						width: "100%",
						borderBottom: " 1px solid rgb(225,225,225)",
						marginTop: "60px",
					}}></div>
				<div className="categories">
					<div className="rectangle"></div>
					<div>Categories</div>
				</div>
				<div className="countdown">
					<div className="textFlashSales">Browse By Category</div>
					<div className="buttonContainer">
						<div className="slideButton" onClick={() => console.log("test")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="18"
								height="16"
								viewBox="0 0 18 16"
								fill="none">
								<path
									d="M8 1L1 8L8 15M1 8H17"
									stroke="black"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
						<div className="slideButton" onClick={() => console.log("test")}>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="19"
								height="16"
								viewBox="0 0 19 16"
								fill="none">
								<path
									d="M1.5 8H18M18 8L11 1M18 8L11 15"
									stroke="black"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className="categoryBoxContainer">
					{categories &&
						categories.map((category) => (
							<div
								className="categoryBox"
								onClick={() => {
									router.push(`/home/category/${category}`);
								}}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="56"
									height="56"
									viewBox="0 0 56 56"
									fill="white"
									stroke="black">
									<g clipPath="url(#clip0_994_868)">
										<path
											d="M38.9375 6.125H17.0625C15.5523 6.125 14.3281 7.34922 14.3281 8.85938V47.1406C14.3281 48.6508 15.5523 49.875 17.0625 49.875H38.9375C40.4477 49.875 41.6719 48.6508 41.6719 47.1406V8.85938C41.6719 7.34922 40.4477 6.125 38.9375 6.125Z"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M25.6667 7H31.1354"
											strokeWidth="3"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<path
											d="M28 44.0052V44.0305"
											strokeWidth="2.5"
											strokeLinecap="round"
											strokeLinejoin="round"
										/>
										<line
											x1="15.1667"
											y1="39.8334"
											x2="40.8333"
											y2="39.8334"
											strokeWidth="2"
										/>
									</g>
									<defs>
										<clipPath id="clip0_994_868">
											<rect width="56" height="56" fill="white" />
										</clipPath>
									</defs>
								</svg>
								{category}
							</div>
						))}
				</div>

				<div
					style={{
						width: "100%",
						borderBottom: " 1px solid rgb(225,225,225)",
						marginTop: "60px",
					}}></div>
				<div className="catergoryBoxImageContainer">
					<div className="categoryLeftContainer">
						<div className="txtTop">Categories</div>
						<div className="textMiddle">Enhance Your Music Experience</div>
						<div style={{ display: "flex", gap: "24px" }}>
							{imageCountDown.map((ele) => (
								<div className="roundClock">
									<div className="imageCountDownTitle">{ele.subtitle}</div>
									<div className="imageCountDownSubtitle">{ele.title}</div>
								</div>
							))}
						</div>
						<div className="ctaImageBuyNow">Buy Now</div>
					</div>
					<div className="imageRightContainer">
						<img src="/JBL.png" style={{width:"100%"}}/>
					</div>
				</div>

				<div className="categories">
					<div className="rectangle"></div>
					<div>Featured</div>
				</div>
				<div className="countdown">
					<div className="textFlashSales">New Arrival</div>
				</div>

				<div className="featuredBoxes">
					<div className="boxLeft">
						<img src="/ps5.png" />
						<div className="imageText">
							<div className="textTopImage">PlayStation 5</div>
							<div className="textMiddleImage">
								Black and White version of the PS5 coming out on sale.
							</div>
							<div className="textBottomImage">Shop Now</div>
						</div>
					</div>
					<div className="boxRight">
						<div className="rightImageTop">right image 1</div>
						<div className="rightImageBottomContainer">
							<div className="bottomrightImage">
								<img src="/speakers.png" />
								<div className="rightImageText">
									<div className="textTopImage">Speakers</div>
									<div className="textMiddleImage">
										Amazon wireless speakers
									</div>
									<div className="textBottomImage">Shop Now</div>
								</div>
							</div>
							<div className="bottomrightImage">
								<img src="/perfume.png" />
								<div className="rightImageText">
									<div className="textTopImage">Perfume</div>
									<div className="textMiddleImage">GUCCI INTENSE OUD EDP</div>
									<div className="textBottomImage">Shop Now</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="customerContainer">
					{service &&
						service.map((ele) => (
							<div className="descriptionContainer">
								<div className="outerRound">
									<div className="innerRound">
										{ele.icon}
									</div>
								</div>
								<div>
									<div className="customerTitle">{ele.title}</div>
									<div className="CustomerSubtitle">{ele.subtitle}</div>
								</div>
							</div>
						))}
				</div>
			</div>
		</>
	);
};

export default Home;
