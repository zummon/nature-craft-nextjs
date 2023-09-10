import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
	const { title, description, image, date } = pageProps;
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="date" content={date} />
				<meta name="description" content={description} />
				<meta name="twitter:title" content={title} />
				<meta name="twitter:description" content={description} />
				{/* <meta name="twitter:image" content={image.src} /> */}
				<meta property="og:title" content={title} />
				<meta property="og:description" content={description} />
				{/* <meta property="og:image" content={image.src} /> */}
			</Head>
			<Header title={title} description={description} />
			<div className="uk-section uk-background-muted">
				<Component {...pageProps} />
			</div>
			<Footer />
		</>
	);
}

export default MyApp;
