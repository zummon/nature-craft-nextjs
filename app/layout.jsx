import Link from "next/link";
import { useRouter } from "next/router";

export default function Document({ children }) {
	const { pathname } = useRouter();

	return (
		<html>
			<body>
				<div
					className="uk-section uk-background-secondary uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light"
					style={{
						backgroundImage:
							"url(https://images.pexels.com/photos/6102217/pexels-photo-6102217.jpeg?w=1280)",
					}}
				>
					<div className="uk-container uk-container-small">
						<div className="uk-margin-auto-left uk-width-2-3@m">
							<h1 className="uk-heading-medium">{title}</h1>
							<p className="uk-text-large uk-text-secondary">{description}</p>
							<div className="">
								{pathname == "/" ? (
									""
								) : (
									<Link
										href="/"
										className="uk-icon-link uk-margin-bottom uk-margin-right"
										uk-icon="icon: home; ratio: 2"
									></Link>
								)}
								<Link
									href="/blog"
									className="uk-button uk-button-secondary uk-button-large uk-margin-bottom uk-margin-right"
								>
									Blogs
								</Link>
								<Link
									href="/#about"
									className="uk-button uk-button-default uk-margin-bottom uk-margin-right"
								>
									About
								</Link>
								<Link
									href="/#donate"
									className="uk-button uk-button-text uk-margin-bottom uk-margin-right"
								>
									Donate
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="uk-section uk-background-muted">{children}</div>
				<div
					className="uk-section uk-background-secondary uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light"
					style={{
						backgroundImage:
							"url(https://images.pexels.com/photos/5483826/pexels-photo-5483826.jpeg?w=1280)",
					}}
				>
					<div className="uk-container uk-container-small">
						<div
							className="uk-child-width-1-2@s uk-child-width-1-3@m uk-grid-divider"
							uk-grid=""
						>
							<div>
								<h3>List</h3>
								<ul className="uk-list uk-list-hyphen">
									<li>
										<a href="#">Lorem, ipsum.</a>
									</li>
									<li>
										<a href="#">Lorem, ipsum.</a>
									</li>
									<li>
										<a href="#">Lorem, ipsum.</a>
									</li>
									<li>
										<a href="#">Lorem, ipsum.</a>
									</li>
								</ul>
							</div>

							<div>
								<h3>Paragraph</h3>
								<p>
									<span>Made by zummon (Teerapat Anantarattanachai)</span>
								</p>
							</div>

							<div>
								<a
									href="#"
									uk-icon="facebook"
									className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"
								></a>
								<a
									href="#"
									uk-icon="instagram"
									className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"
								></a>
								<a
									href="#"
									uk-icon="pinterest"
									className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"
								></a>
								<a
									href="#"
									uk-icon="twitter"
									className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"
								></a>
								<a
									href="#"
									uk-icon="youtube"
									className="uk-icon-button uk-margin-small-bottom uk-margin-small-right"
								></a>
							</div>
						</div>
					</div>
				</div>
			</body>
		</html>
	);
}
