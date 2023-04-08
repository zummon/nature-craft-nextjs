import Link from 'next/link';

export default function ({ image, description, date, invert, slug, title }) {
  return (
    <>
      <div
        className={`uk-card ${
          invert ? 'uk-card-secondary' : 'uk-card-default'
        }`}
      >
        <div
          className="uk-card-media-top uk-height-medium uk-background-cover"
          style={{ backgroundImage: `url(${image.src})` }}
        >
          <div
            className={`uk-card-badge uk-label ${
              invert ? 'uk-background-secondary' : 'uk-background-default'
            }`}
            style={{ color: invert ? '#fff' : '#000' }}
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
    </>
  );
}
