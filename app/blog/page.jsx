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

export default function Blogs({ blogs }) {
	let blogs = getAllBlogs();

	return (
		<>
			<div className="uk-container">
				<div
					className="uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s"
					uk-grid=""
				>
					{blogs.map((props, index) => (
						<div key={`blog-${index}`}>
							<div
								className={`uk-card ${
									invert ? "uk-card-secondary" : "uk-card-default"
								}`}
							>
								<div
									className="uk-card-media-top uk-height-medium uk-background-cover"
									style={{ backgroundImage: `url(${image.src})` }}
								>
									<div
										className={`uk-card-badge uk-label ${
											invert
												? "uk-background-secondary"
												: "uk-background-default"
										}`}
										style={{ color: invert ? "#fff" : "#000" }}
									>
										{date}
									</div>
								</div>
								<div className="uk-card-body">
									<h3 className="uk-card-title">{title}</h3>
									<p>{description}</p>
									<Link
										href={`/blog/${slug}`}
										className="uk-button uk-button-secondary"
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
