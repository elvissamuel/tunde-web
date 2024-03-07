// import React from 'react'
// import { Container } from './Container'
// import { Article, Photos, Resume, SocialLink, art } from '../pages/Home'
// import { Card } from './Card'
// import EmailJS from './EmailJs'
// import { LinkedInIcon, XIcon } from './SocialIcons'
// import tundeImg from '../images/photos/tunde-main-1.png'
// import tundeImg2 from '../images/photos/tunde-main-2.png'

// export default async function Home() {
//   return (
//     <>
//       <Container className="-mt-20">
//         <div className="flex flex-col items-center gap-6 md:flex-row">
//           <div className="max-w-2xl md:w-[60%] ">
//             <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
//               Co-Founder, Product Leader & Innovator
//             </h1>
//             <p className="mt-6 text-base text-zinc-600 dark:text-zinc-100">
//               I am Tunde Adeniran, a seasoned product leader with a passion for
//               innovation and growth. With over a decade of experience in the
//               tech industry, I have led transformative initiatives and driven
//               significant results in various fast-paced environments, from
//               start-ups to established firms.
//             </p>
//             <div className="mt-6 flex gap-6">
//               <SocialLink
//                 href="http://www.twitter.com/tee_io"
//                 aria-label="Follow on X"
//                 icon={XIcon}
//               />
//               <SocialLink
//                 href="https://www.linkedin.com/in/tundeadeniran"
//                 aria-label="Follow on LinkedIn"
//                 icon={LinkedInIcon}
//               />
//             </div>
//           </div>
//           <div className="h-[502px] w-[439px] ">
//             <img
//               src={tundeImg}
//               alt="tunde"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </Container>
//       <div className="my-40">
//         <Photos />
//       </div>
//       <Container className="my-28">
//         <div className="flex flex-col gap-10 md:flex-row md:gap-4">
//           <div className="pr-6 md:w-[60%]">
//             <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
//               A Voice of Innovation and Leadership
//             </h2>
//             <p className="my-4">
//               I&apos;m Tunde Adeniran, a product executive based in London,
//               dedicated to using technology to shape the future.
//             </p>
//             <p>
//               My passion for computing dates back to my earliest memories. At
//               the age of 8, after my dad introduced me to his new work laptop at
//               the time (a Compaq LTE 5000 series), I quickly mastered typing on
//               it and wrote my first program.
//             </p>
//             <a href="/about" className="my-4 block">
//               <Card.Cta>Learn more about me</Card.Cta>
//             </a>
//           </div>
//           <div className="flex gap-2">
//             <div className="h-[400px] w-[200px]">
//               <img
//                 src={tundeImg2}
//                 alt="aboutimg"
//                 className="h-full rounded-md object-cover"
//               />
//             </div>
//             <div className="mt-6 h-[400px] w-[200px]">
//               <img
//                 src={tundeImg}
//                 alt="aboutimg"
//                 className="h-full rounded-md object-cover"
//               />
//             </div>
//           </div>
//           <div></div>
//         </div>
//       </Container>
//       <Container className="mt-24 md:mt-28">
//         <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
//           <div className="flex flex-col gap-16">
//             {art.map((article) => (
//               <Article key={article.slug} article={article} />
//             ))}
//             <a
//               className="flex items-center gap-2 text-teal-500"
//               href="/articles"
//             >
//               <p className="text-base font-medium ">View all articles</p>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 className="h-6 w-6"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
//                 />
//               </svg>
//             </a>
//           </div>
//           <div className="space-y-10 lg:pl-16 xl:pl-24">
//             <EmailJS />
//             <Resume />
//           </div>
//         </div>
//       </Container>
//     </>
//   )
// }
