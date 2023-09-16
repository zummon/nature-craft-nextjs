import Link from "next/link";
import { getBlogPaths, getBlog } from "./blog/[slug]/page";

export function getAllBlogs() {
	return getBlogPaths()
		.map((slug) => getBlog(slug))
		.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

let title = "Nature Craft";
let description = "Lorem ipsum dolor sit amet consectetur.";
let image = {
	src: "",
};
let date = "";

export async function generateMetadata() {
	return {
		title,
		description,
		openGraph: { title, description },
		twitter: { title, description },
		other: { date },
	};
}

export default function Home() {
	let blogs = getAllBlogs().slice(0, 4);

	return (
		<>
			<div className="max-w-6xl mx-auto mb-10">
				<div className="flex gap-6 overflow-x-auto snap-x pb-8 lg:gap-9">
					{blogs.map((blog, index) => (
						<div
							key={`blog-${index}`}
							className={`shadow-lg flex flex-col min-w-[360px] snap-center ${
								blog.invert ? "bg-zinc-900 text-white" : "bg-white"
							}`}
						>
							<div
								className="h-72 bg-cover bg-center flex"
								style={{ backgroundImage: `url(${blog.image.src})` }}
							>
								<div className="my-4 mr-4 ml-auto">
									<span
										className={`py-0.5 px-2 text-sm shadow ${
											blog.invert ? "bg-zinc-900 text-white" : "bg-white"
										}`}
									>
										{blog.date}
									</span>
								</div>
							</div>
							<div className="p-8 flex flex-col gap-4 flex-1 justify-between">
								<h3 className="text-2xl">{blog.title}</h3>
								<p className="">{blog.description}</p>
								<div className="">
									<Link
										href={`/blog/${blog.slug}`}
										className={`inline-block px-7 py-2 shadow ${
											blog.invert
												? "bg-white text-black"
												: "bg-zinc-900 text-white"
										}`}
									>
										Read
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>

			<div className="mb-10">
				<div className="flex items-center lg:w-2/3 shadow-xl bg-white">
					<div
						className="w-1/3 h-80 lg:h-96 bg-cover bg-center"
						style={{
							backgroundImage: `url(https://images.pexels.com/photos/6137913/pexels-photo-6137913.jpeg?w=640)`,
						}}
					></div>
					<div className="w-2/3 p-4 lg:p-8">
						<h2
							className="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8 scroll-m-24"
							id="about"
						>
							About
						</h2>
						<p className="text-xl mb-4 lg:mb-8">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
							doloremque accusantium at cupiditate quaerat temporibus?
						</p>
						<p className="">
							Lorem ipsum dolor sit amet consectetur adipisicing.
						</p>
					</div>
				</div>
			</div>

			<div className="mb-10">
				<div className="flex items-center lg:w-2/3 shadow-xl ml-auto bg-zinc-900 text-white">
					<div className="w-2/3 p-4 lg:p-8">
						<h2
							className="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8 scroll-m-24"
							id="donate"
						>
							Donate
						</h2>
						<p className="text-xl mb-4 lg:mb-8">
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
							doloremque accusantium at cupiditate quaerat temporibus?
						</p>

						<a href="#" className="inline-block bg-white text-black px-7 py-2">
							Buy me a coffee
						</a>
					</div>
					<div
						className="w-1/3 h-80 lg:h-96 bg-cover bg-center"
						style={{
							backgroundImage: `url(https://images.pexels.com/photos/6207392/pexels-photo-6207392.jpeg?w=640)`,
						}}
					></div>
				</div>
			</div>

			<div className="">
				<div className="flex items-center lg:w-1/2 shadow-xl mx-auto bg-white">
					<div className="p-4 lg:p-8 text-center">
						<h2 className="text-3xl lg:text-4xl xl:text-5xl mb-4 lg:mb-8">
							Other
						</h2>
						<p className="text-xl mb-4 lg:mb-8">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
							harum quo doloremque sequi quis laborum delectus animi soluta.
							Minima doloribus ullam omnis sit veniam itaque beatae aspernatur
							illo odit dolore?
						</p>
						<p className="italic">Lorem ipsum dolor sit amet.</p>
					</div>
				</div>
			</div>
		</>
	);
}
