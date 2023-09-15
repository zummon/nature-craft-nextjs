import Link from "next/link";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { readdirSync, readFileSync } from "fs";

export async function generateMetadata() {
	return {
		title,
		description,
		openGraph: {
			title,
			description,
			images: [
				{
					url: image.src,
				},
			],
		},
		twitter: { title, description, images: [image.src] },
		other: { date },
	};
}

export function getBlog(slug) {
	const { data, content } = matter(readFileSync(`./app/[slug]/${slug}.md`));

	return {
		...data,
		date: data.date.toLocaleDateString(undefined, {
			year: "numeric",
			month: "long",
			day: "numeric",
		}),
		content,
		slug,
	};
}

export function getBlogPaths() {
	return readdirSync("./app/[slug]").map((file) => file.replace(/\.md?$/, ""));
}

export function generateStaticParams() {
	return getBlogPaths().map((slug) => ({
		slug,
	}));
}

export default function Blog({ params: { slug } }) {
	const { content, date } = getBlog(slug);

	return (
		<>
			<div className="max-w-5xl mx-auto">
				<div className="text-2xl mb-4 px-4 sm:px-8">{date}</div>
				<div className="prose prose-img:mx-auto max-w-none px-4 sm:px-8">
					<MDXRemote
						source={content}
						components={{
							a: (props) => {
								if (props.href.startsWith("/")) {
									return <Link {...props}></Link>;
								} else if (props.href.startsWith("#")) {
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
