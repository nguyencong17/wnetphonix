// import React, { useEffect } from "react";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import 'swiper/css/pagination';
// // import required modules
// import { Navigation } from "swiper/modules";
// import { Pagination } from 'swiper/modules';
// import Image from "next/image";
// import IconButton from "../IconButton/IconButton";
// import useSWR from "swr";
// import Link from "next/link";
// import { Toaster } from "@/components/ui/toaster"
// import { useToast } from "@/components/ui/use-toast"


// // SWR
// const fetcher = (url) => fetch(url).then((res) => res.json());

// function Slide() {
//   const { toast } = useToast()
//   // Fetch By useSWR
//   // ================================================
//   const { data, error, isLoading } = useSWR(
//     "https://api.themoviedb.org/3/movie/popular?api_key=dc3b868166ffb5e89b71f42b9958f8a7&language=en-US&page=1&limit=5",
//     fetcher
//   );

//   useEffect(() => {
//     if (data) {
//       toast({
//         title: "Success",
//         description: "Data fetched successfully!",
//         status: "success",
//         duration: 5000, // duration in milliseconds
//         className: "bg-green-500 text-[#141414] border-0",
//       });
//     }
//     if (error) {
//       toast({
//         title: "Error",
//         description: "Failed to fetch data",
//         status: "error",
//         duration: 5000,
//         className: "bg-red-500 text-[#141414] border-0",
//       });
//     }
//   }, [data, error, toast]);
  
//   let listmovie = data?.results;
//   listmovie = listmovie?.slice(0, 10);
//   // console.log("Slide Movie", listmovie);

//   if (error) return "An error has occurred.";
//   if (isLoading) return "Loading...";

//   const pagination = {
//     clickable: true,
//     // renderBullet: function (index, className) {
//     //   return '<span class="'+ className +' !bg-[#999999] !rounded-[8px] !w-[16px] !h-[4px] inline-block"></span>';
//     // },
//   };

//   return (
//     <div className="slide">
//       <div className="container mx-auto relative">
//         <Swiper
//           navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
//           pagination={pagination}
//           modules={[Navigation,Pagination]}
//           loop={true}
//           className="mySwiper h-[750px]"
//           autoHeight={false}
//         >
//           {listmovie &&
//             listmovie?.map((movie) => (
//               <SwiperSlide key={movie.id} className="relative">
//                 <Image
//                   src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
//                   alt="HERO IMAGE"
//                   width={1594}
//                   height={600}
//                   quality={100}
//                   className="relative rounded-lg"
//                 />
//                 <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-[rgba(5,5,5,0)] to-[rgba(5,5,5,1)]"></div>
//                 <div className="absolute z-5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center flex-col items-center text-center w-[65%] mx-auto">
//                   <h2 className="text-[46px]">{movie.title}</h2>
//                   <p className="text-[18px] mt-1">{movie.overview}...</p>
//                   <div className="flex gap-2 mt-4">
//                     <Link href={`/movie/${movie.id}`}>
//                       <IconButton label={"Play Now"} />
//                     </Link>
//                     <svg
//                       width="57"
//                       height="56"
//                       viewBox="0 0 57 56"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect
//                         x="1"
//                         y="0.5"
//                         width="55"
//                         height="55"
//                         rx="7.5"
//                         fill="#0F0F0F"
//                       />
//                       <rect
//                         x="1"
//                         y="0.5"
//                         width="55"
//                         height="55"
//                         rx="7.5"
//                         stroke="#262626"
//                       />
//                       <path
//                         d="M28.5 21V35M35.5 28L21.5 28"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                     <svg
//                       width="57"
//                       height="56"
//                       viewBox="0 0 57 56"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <rect
//                         x="1"
//                         y="0.5"
//                         width="55"
//                         height="55"
//                         rx="7.5"
//                         fill="#0F0F0F"
//                       />
//                       <rect
//                         x="1"
//                         y="0.5"
//                         width="55"
//                         height="55"
//                         rx="7.5"
//                         stroke="#262626"
//                       />
//                       <path
//                         d="M22.238 25.9583C23.1787 25.9583 24.0276 25.4381 24.6081 24.6979C25.5101 23.5477 26.647 22.5905 27.9465 21.8985C28.789 21.4498 29.52 20.7832 29.8745 19.897C30.1226 19.2769 30.25 18.6151 30.25 17.9472V17.2083C30.25 16.725 30.6418 16.3333 31.125 16.3333C32.5747 16.3333 33.75 17.5085 33.75 18.9583C33.75 20.3018 33.4472 21.5747 32.9061 22.7122C32.5962 23.3636 33.0309 24.2083 33.7522 24.2083M33.7522 24.2083H37.399C38.5968 24.2083 39.6689 25.0179 39.7957 26.2089C39.8481 26.7015 39.875 27.2017 39.875 27.7083C39.875 31.0305 38.7178 34.0824 36.7845 36.483C36.3323 37.0445 35.6332 37.3333 34.9123 37.3333H30.227C29.6627 37.3333 29.1021 37.2423 28.5668 37.0638L24.9332 35.8527C24.3979 35.6742 23.8373 35.5833 23.273 35.5833H21.3882M33.7522 24.2083H31.125M21.3882 35.5833C21.4849 35.8219 21.59 36.0562 21.7033 36.2858C21.9333 36.7519 21.6122 37.3333 21.0925 37.3333H20.0334C18.9965 37.3333 18.0349 36.7289 17.7323 35.7372C17.3374 34.443 17.125 33.0692 17.125 31.6458C17.125 29.8345 17.4689 28.1037 18.0951 26.5149C18.451 25.6118 19.3619 25.0833 20.3326 25.0833H21.5608C22.1114 25.0833 22.4302 25.7318 22.1444 26.2024C21.1802 27.7897 20.625 29.6529 20.625 31.6458C20.625 33.0382 20.896 34.3673 21.3882 35.5833Z"
//                         stroke="white"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//         </Swiper>
//         <div className="arrow-left arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="size-6"
//           >
//             <path
//               fillRule="evenodd"
//               d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//         <div className="arrow-right arrow">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             fill="currentColor"
//             className="size-6"
//           >
//             <path
//               fillRule="evenodd"
//               d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </div>
//       </div>
//       <Toaster></Toaster>
//     </div>
//   );
// }

// export default Slide;
