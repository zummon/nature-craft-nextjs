import { getAllBlogs } from "../page";
import Link from "next/link";

let title = "Blogs";
let description = "Fugit quasi ullam reiciendis totam culpa.";
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

export default function Blogs() {
	let blogs = getAllBlogs();

	return (
		<>
			<div className="max-w-6xl mx-auto">
				<div className="grid gap-6 md:grid-cols-3 sm:grid-cols-2 lg:gap-9">
					{blogs.map((item, index) => (
						<div
							key={`blog-${index}`}
							className={`shadow-lg flex flex-col ${
								item.invert ? "bg-zinc-900 text-white" : "bg-white"
							}`}
						>
							<div
								className="h-72 bg-cover bg-center flex"
								style={{ backgroundImage: `url(${item.image.src})` }}
							>
								<div className="my-4 mr-4 ml-auto">
									<span
										className={`py-0.5 px-2 text-sm shadow ${
											item.invert ? "bg-zinc-900 text-white" : "bg-white"
										}`}
									>
										{item.date}
									</span>
								</div>
							</div>
							<div className="p-8 flex flex-col gap-4 flex-1 justify-between">
								<h3 className="text-2xl">{item.title}</h3>
								<p className="">{item.description}</p>
								<div className="">
									<Link
										href={`/blog/${item.slug}`}
										className={`inline-block px-7 py-2 shadow ${
											item.invert
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
		</>
	);
}
