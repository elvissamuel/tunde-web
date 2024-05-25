import clsx from 'clsx'
import image1 from '../images/photos/tunde-speak2.jpg'
import image2 from '../images/photos/tunde-speak3.jpg'
import image3 from '../images/photos/tunde-speak1.jpg'
import image4 from '../images/photos/tunde-speak4.jpg'
import image5 from '../images/photos/tunde-speak5.jpg'
import image6 from '../images/photos/tunde-speak6.jpg'
import image7 from '../images/photos/tunde4.png'
import image8 from '../images/photos/tunde5.jpg'

import { Container } from '../components/Container'
import { LinkedInIcon, XIcon } from '../components/SocialIcons'
import profilePhoto from '../images/photos/tunde.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Tunde Adeniran.',
}

export default function About() {
  return (
    <Container className=" mt-16 w-full sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <img
              src={profilePhoto}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I&apos;m Tunde Adeniran, a product executive based in London,
            dedicated to using technology to shape the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              My passion for computing dates back to my earliest memories. At
              the age of 8, after my dad introduced me to his new work laptop at
              the time (a Compaq LTE 5000 series), I quickly mastered typing on
              it and wrote my first program.
            </p>
            <p>
              During my childhood, my fascination with computers was rivalled
              only by my love for books. At 10 years old, I had read the
              Encyclopædia Britannica learning about topics ranging from
              planetary rocks to black holes, and animal life.
            </p>
            <p>
              Over the years, I grew up wanting to be a scientist, and then a
              neurosurgeon (inspired by Dr. Ben Carson whom I admired very much
              as a child), then a pilot (later abandoned due to my fear of
              heights).
            </p>
            <p>
              I completed an undergraduate degree in Computer Science during
              which I wanted to become a programmer or a network engineer (wrote
              the Cisco CCNA exam in my late teens). I soon after went into
              entrepreneurship founding Tuwonk Ltd, a logistics business I ran
              for a couple of years back in Nigeria. Following a series of
              economic shocks and my inexperience in the logistics industry, I
              exited the business and set out on a new path in the software
              industry a domain I was a lot more familiar with.
            </p>
            <p>
              I&apos;ve spent the last 13 years driving product innovation and
              building software for different technology businesses ranging from
              start-ups to established firms.
            </p>
            <p>
              Today, as the co-founder of Lerno, I&apos;m focused on using
              technology to reinvent the world of the art of selling. Our goal
              is to empower the next generation of sellers with the right tools
              they need to build connections with customers like never before.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul >
            <SocialLink href="#" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/tundeadeniran"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:adeniran.tunde@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              adeniran.tunde@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>

      <div className="my-28">
        <p className="text-3xl font-bold text-zinc-600 dark:text-zinc-100">Something About Public Speaking</p>
        <p className="my-2 text-zinc-600 dark:text-zinc-400">
          I&apos;ve spent the last 13 years driving product innovation and
          building software for different technology businesses ranging from
          start-ups to established firms.
        </p>

        <div className="my-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div className="h-56 rounded-lg shadow-md md:col-span-2">
            <img
              className="h-full w-full rounded-lg object-cover shadow-md"
              src={image3}
              alt="img1"
            />
          </div>
          <div className="h-56 rounded-lg shadow-md">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={image8}
              alt="img1"
            />
          </div>
          <div className="h-56 rounded-lg shadow-md">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={image1}
              alt="img1"
            />
          </div>
          <div className="h-56 rounded-lg shadow-md">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={image4}
              alt="img1"
            />
          </div>
          <div className="h-56 rounded-lg shadow-md md:col-span-2">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={image2}
              alt="img1"
            />
          </div>
          <div className="h-56 rounded-lg shadow-md">
            <img
              className="h-full w-full rounded-lg object-cover"
              src={image7}
              alt="img1"
            />
          </div>
        </div>
      </div>
    </Container>
  )
}
