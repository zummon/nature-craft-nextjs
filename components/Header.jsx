import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ({ title, description }) {
  const { pathname } = useRouter();

  return (
    <>
      <div
        className="uk-section uk-background-secondary uk-light uk-background-cover uk-background-fixed uk-background-blend-soft-light"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/6102217/pexels-photo-6102217.jpeg?w=1280)',
        }}
      >
        <div className="uk-container uk-container-small">
          <div className="uk-margin-auto-left uk-width-2-3@m">
            <h1 className="uk-heading-medium">{title}</h1>
            <p className="uk-text-large uk-text-secondary">{description}</p>
            <div className="">
              {pathname == '/' ? (
                ''
              ) : (
                <>
                  <Link
                    href="/"
                    className="uk-icon-link uk-margin-bottom uk-margin-right"
                    uk-icon="icon: home; ratio: 2"
                  ></Link>
                </>
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
    </>
  );
}
