/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import {
  allBlogPosts,
  getBlogPostBySlug,
  getBlogTitle,
  getBlogDescription,
} from '../../../../src/data/blog'
import {
  buildBlogPostJsonLd,
  buildBlogBreadcrumbsJsonLd,
  toAbsoluteOgImageUrl,
} from '../../../../src/lib/seo'
import BlogDetailView from '../../../../src/components/blog/BlogDetailView'

interface BlogPostPageProps {
  params: Promise<{
    locale: string
    slug: string
  }>
}

export function generateStaticParams() {
  const locales = ['en', 'ua', 'es']
  const paramsList: { locale: string; slug: string }[] = []

  for (const locale of locales) {
    for (const post of allBlogPosts) {
      paramsList.push({
        locale,
        slug: post.slug,
      })
    }
  }

  return paramsList
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return {
      title: 'Article Not Found | Artur Yusupov',
    }
  }

  const title = `${getBlogTitle(post, locale)} | Artur Yusupov`
  const description = getBlogDescription(post, locale)
  const ogImageUrl = toAbsoluteOgImageUrl(post.coverImage)

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.yusupovartur.com/${locale}/blog/${slug}`,
      languages: {
        en: `https://www.yusupovartur.com/en/blog/${slug}`,
        uk: `https://www.yusupovartur.com/ua/blog/${slug}`,
        es: `https://www.yusupovartur.com/es/blog/${slug}`,
        'x-default': `https://www.yusupovartur.com/en/blog/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `https://www.yusupovartur.com/${locale}/blog/${slug}`,
      type: 'article',
      publishedTime: `${post.date}T00:00:00Z`,
      authors: ['Artur Yusupov'],
      images: [
        {
          url: ogImageUrl,
          alt: getBlogTitle(post, locale),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImageUrl],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params
  const post = getBlogPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const postTitle = getBlogTitle(post, locale)
  const postDesc = getBlogDescription(post, locale)
  const articleJsonLd = buildBlogPostJsonLd(
    postTitle,
    postDesc,
    post.coverImage,
    post.date,
    slug,
    locale,
    {
      tags: post.tags,
      readTime: post.readTime[locale === 'ua' || locale === 'es' ? locale : 'en'] || post.readTime.en,
      appliedProjects: post.appliedProjects?.map((p) => ({
        slug: p.slug,
        name: p.name,
      })),
    },
  )
  const breadcrumbsJsonLd = buildBlogBreadcrumbsJsonLd(postTitle, slug, locale)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <main id="main-content">
        <BlogDetailView post={post} locale={locale || 'en'} />
      </main>
    </>
  )
}
