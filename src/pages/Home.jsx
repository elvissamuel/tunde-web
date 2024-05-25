import clsx from 'clsx'

import { Card } from '../components/Card'
import { Container } from '../components/Container'
import { LinkedInIcon, XIcon } from '../components/SocialIcons'
import image1 from '../images/photos/tunde-speak1.jpg'
import image2 from '../images/photos/tunde-speak2.jpg'
import image3 from '../images/photos/tunde-speak3.jpg'
import image6 from '../images/photos/tunde4.png'
import image7 from '../images/photos/tunde5.jpg'
import tundeImg from '../images/photos/tunde-main-1.png'
import tundeImg2 from '../images/photos/tunde-main-2.png'
import grapeDataLogo from '../images/photos/grapedata_logo.jpg'
import lerno from '../images/photos/lerno_logo.jpg'
import terragonLogo from '../images/photos/terragon_limited_logo.jpg'
import tatcLogo from '../images/photos/the_african_talent_company_logo.jpg'
import { formatDate } from '../lib/formatDate'
import EmailJS from '../components/EmailJs'


function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const art = [
  {
    title: 'The Future with Generative AI: Navigating the Uncharted Waters',
    slug: 'https://tundeadeniran.medium.com/the-future-with-generative-ai-navigating-the-uncharted-waters-ea92f1f8c55b',
    description:
      'In the rapidly evolving landscape of technology, artificial intelligence (AI) stands at the forefront, bringing us a future filled with lots of promise and uncertainty. As we delve into this brave new world, I find myself contemplating the profound impact AI will have across various sectors.',
    date: '2024-03-04',
  },
  {
    title: 'Taking a 360 degree approach to roadmaps',
    slug: 'https://tundeadeniran.medium.com/taking-a-360-degree-approach-to-roadmaps-b689cf27dd6',
    description:
      'A 360-degree approach with B2B roadmaps: Unleashing the power of customer feedback, internal stakeholder insights, and market trends — Product roadmapping is a crucial element of effective product',
    date: '2024-02-15',
  },
  {
    title:
      'Who Owns the Product Roadmap? How to use Insight and Influence to Guide Product Direction',
    slug: 'https://tundeadeniran.medium.com/who-owns-the-product-roadmap-how-to-use-insight-and-influence-to-guide-product-direction-534a6f52d35d',
    description:
      'In my early days as a Product Manager, I wondered why the experiences of my peers varied so much from one company to another. I’ve come to realise that different organizations operate with very different levels of flexibility and ownership around multiple aspects of a product manager’s traditional role. In this article, we’ll take a dive into the different scenarios product managers may find themselves',
    date: '2023-03-25',
  },
  {
    title:
      'Why African Tech Companies should begin to adopt a platforms-based approach to product innovation or face disruption',
    slug: 'https://tundeadeniran.medium.com/why-tech-companies-in-africa-must-adopt-a-platform-based-strategy-or-risk-disruption-db90385f6796',
    description:
      'There are now only two ways to think of any business model — as a pipeline or a platform. Operating through Pipeline based models has historically been our modus operandi. Platforms are a much newer thought-pattern that came in through the advent of the dot-com internet era.',
    date: '2018-03-17',
  },
]

function Article({ article }) {
  return (
    <Card as="article">
      <Card.Title href={`${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}) {
  return (
    <a className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </a>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <img src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: 'Lerno',
      title: 'Co-founder & CPO',
      logo: lerno,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'GrapeData, London',
      title: 'Product Lead',
      logo: grapeDataLogo,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },

    {
      company: 'The African Talent Company',
      title: 'Group Head of Product',
      logo: tatcLogo,
      start: '2020',
      end: '2021',
    },
    {
      company: 'Terragon Group',
      title: 'Vice President, Product',
      logo: terragonLogo,
      start: '2019',
      end: '2020',
    },
    {
      company: 'Terragon Group',
      title: 'Group Product Manager',
      logo: terragonLogo,
      start: '2017',
      end: '2019',
    },
    {
      company: 'Terragon Group',
      title: 'Senior Product Manager',
      logo: terragonLogo,
      start: '2014',
      end: '2017',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <a
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-900 outline-offset-2 transition hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 active:transition-none dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70"
        href="/tundecv.pdf"
        download="tunde-resume"
      >
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </a>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {[image7, image2, image3, image1, image6].map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] h-56 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800',
              rotations[imageIndex % rotations.length],
            )}
          >
            <img
              src={image}
              alt=""
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Container className="-mt-20">
        <div className="flex flex-col items-center gap-6 lg:flex-row">
          <div className="max-w-2xl md:w-[60%] ">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              Experienced Product Manager with Technical Background and an MBA
            </h1>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-100">
              I am Tunde Adeniran, a product manager with a passion for digital innovation and technology products. With over a decade of experience in the UK and EMEA ecosystem, I have led product initiatives working with engineering teams and cross-functional stakeholders to drive business outcomes.
            </p>
            <div className="mt-6 flex gap-6">
              <SocialLink
                href="http://www.twitter.com/tee_io"
                aria-label="Follow on X"
                icon={XIcon}
              />
              <SocialLink
                href="https://www.linkedin.com/in/tundeadeniran"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
              />
            </div>
          </div>
          <div className="h-[502px] w-[439px] ">
            <img
              src={tundeImg}
              alt="tunde"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Container>
      <div className="my-40">
        <Photos />
      </div>
      <Container className="my-28">
        <div className="flex flex-col gap-10 lg:flex-row md:gap-4">
          <div className="pr-6 md:w-[60%]">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              I'm Your Dedicated Product Consultant
            </h2>
            <p className="my-4 dark:text-zinc-100 text-zinc-800">
              I help early-stage start-ups accheive product market fit by rapidly iterating and measuring result. I bring an external veiwpoint that's oftencrucial in helping startupss shape up their product strategy, roadmap, and improve agile development process.
            </p>
            <p className='dark:text-zinc-100 text-zinc-800'>
              My passion for computing dates back to my earliest memories. At
              the age of 8, after my dad introduced me to his new work laptop at
              the time (a Compaq LTE 5000 series), I quickly mastered typing on
              it and wrote my first program.
            </p>
            <a href="/about" className="my-4 block">
              <Card.Cta>Learn more about me</Card.Cta>
            </a>
          </div>
          <div className="flex gap-2">
            <div className="h-[400px] w-[200px]">
              <img
                src={tundeImg2}
                alt="aboutimg"
                className="h-full rounded-md object-cover"
              />
            </div>
            <div className="mt-6 h-[400px] w-[200px]">
              <img
                src={tundeImg}
                alt="aboutimg"
                className="h-full rounded-md object-cover"
              />
            </div>
          </div>
          <div></div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {art.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
            <a
              className="flex items-center gap-2 text-teal-500"
              href="/articles"
            >
              <p className="text-base font-medium ">View all articles</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
                />
              </svg>
            </a>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <EmailJS />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
