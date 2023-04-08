import Link from 'next/link';
import { MDXRemote } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getBlogPaths, getBlog } from '../../lib/blog-parser';

export function getStaticPaths() {
  return {
    paths: getBlogPaths().map((slug) => ({
      params: { slug },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params: { slug } }) {
  const { content, ...others } = getBlog(slug);

  return {
    props: {
      ...others,
      sourceContent: await serialize(content, {
        mdxOptions: {
          remarkPlugins: [],
          rehypePlugins: [],
        },
      }),
    },
  };
}

export default function Blog({ date, description, title, sourceContent }) {
  return (
    <>
      <div className="uk-container uk-container-small">
        <div className="uk-article">
          <p className="uk-text-lead">{date}</p>
          <MDXRemote
            {...sourceContent}
            components={{
              a: (props) => {
                const { href, children } = props;

                if (href.startsWith('/')) {
                  return <Link href={href}>{children}</Link>;
                } else if (href.startsWith('#')) {
                  return <a {...props} />;
                }

                return <a target="_blank" {...props} />;
              },
            }}
          />
        </div>
      </div>
    </>
  );
}
