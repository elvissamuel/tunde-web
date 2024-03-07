import { Card } from '../components/Card'
import { SimpleLayout } from '../components/SimpleLayout'
import { formatDate } from '../lib/formatDate'

function Article({ article }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`${article.slug}`}>{article.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={article.date}
          className="md:hidden"
          decorate
        >
          {formatDate(article.date)}
        </Card.Eyebrow>
        <Card.Description>{article.description}</Card.Description>
        <Card.Cta>Read article</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.date)}
      </Card.Eyebrow>
    </article>
  )
}

export const metadata = {
  title: 'Articles',
  description:
    'All of my long-form thoughts on product management, leadership, product design, and more, collected in chronological order.',
}

export default function ArticlesIndex() {
  const art = [
    {
      title: 'The Future with Generative AI: Navigating the Uncharted Waters',
      slug: 'https://tundeadeniran.medium.com/the-future-with-generative-ai-navigating-the-uncharted-waters-ea92f1f8c55b',
      description:
        'In the rapidly evolving landscape of technology, artificial intelligence (AI) stands at the forefront, bringing us a future filled with lots of promise and uncertainty. As we delve into this brave new world, I find myself contemplating the profound impact AI will have across various sectors.',
      date: '2024-03-04',
      author: 'Tunde Adeniran',
    },
    {
      title: 'Taking a 360 degree approach to roadmaps',
      slug: 'https://tundeadeniran.medium.com/taking-a-360-degree-approach-to-roadmaps-b689cf27dd6',
      description:
        'A 360-degree approach with B2B roadmaps: Unleashing the power of customer feedback, internal stakeholder insights, and market trends — Product roadmapping is a crucial element of effective product',
      date: '2024-02-15',
      author: 'Tunde Adeniran',
    },
    {
      title:
        'Who Owns the Product Roadmap? How to use Insight and Influence to Guide Product Direction',
      slug: 'https://tundeadeniran.medium.com/who-owns-the-product-roadmap-how-to-use-insight-and-influence-to-guide-product-direction-534a6f52d35d',
      description:
        'In my early days as a Product Manager, I wondered why the experiences of my peers varied so much from one company to another. I’ve come to realise that different organizations operate with very different levels of flexibility and ownership around multiple aspects of a product manager’s traditional role. In this article, we’ll take a dive into the different scenarios product managers may find themselves',
      date: '2023-03-25',
      author: 'Tunde Adeniran',
    },
    {
      title:
        'Why African Tech Companies should begin to adopt a platforms-based approach to product innovation or face disruption',
      slug: 'https://tundeadeniran.medium.com/why-tech-companies-in-africa-must-adopt-a-platform-based-strategy-or-risk-disruption-db90385f6796',
      description:
        'There are now only two ways to think of any business model — as a pipeline or a platform. Operating through Pipeline based models has historically been our modus operandi. Platforms are a much newer thought-pattern that came in through the advent of the dot-com internet era.',
      date: '2018-03-17',
      author: 'Tunde Adeniran',
    },
  ]

  return (
    <SimpleLayout
      title="Writing on Product Management, Artificial Intelligence, and the Tech industry."
      intro="All of my long-form thoughts on leadership, product design, AI and more, collected in chronological order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {art.map((article) => (
            <Article key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  )
}
