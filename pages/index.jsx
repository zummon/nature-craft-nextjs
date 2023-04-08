import { getAllBlogs } from '../lib/blog-parser';
import Card from '../components/Card';

export function getStaticProps() {
  return {
    props: {
      blogs: getAllBlogs().slice(0, 4),
      title: 'Nature Craft',
      description: 'Lorem ipsum dolor sit amet consectetur.',
      image: {
        src: '',
      },
      date: '',
    },
  };
}

export default function Home({ blogs }) {
  return (
    <>
      <div className="uk-container uk-margin-large">
        <div uk-slider="">
          <ul
            className="uk-slider-items uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s"
            uk-grid=""
          >
            {blogs.map((props, index) => (
              <li key={`blog-${index}`}>
                <Card {...props} />
              </li>
            ))}
          </ul>
          <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
        </div>
      </div>

      <div className="uk-margin-large">
        <div className="uk-width-2-3@m">
          <div
            className="uk-flex uk-flex-middle uk-card uk-card-default uk-margin-right uk-margin-remove-right@m"
            id="about"
          >
            <div
              className="uk-width-1-3 uk-card-media-left uk-height-large uk-background-cover"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/6137913/pexels-photo-6137913.jpeg?w=640)`,
              }}
            ></div>
            <div className="uk-width-2-3 uk-card-body">
              <h2 className="uk-heading-small">About</h2>
              <p className="uk-h4 uk-margin-top">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                doloremque accusantium at cupiditate quaerat temporibus?
              </p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="uk-margin-large">
        <div className="uk-width-2-3@m uk-margin-auto-left">
          <div
            className="uk-flex uk-flex-middle uk-card uk-card-secondary uk-margin-left uk-margin-remove-left@m"
            id="donate"
          >
            <div className="uk-width-2-3 uk-card-body">
              <h2 className="uk-heading-small">Donate</h2>
              <p className="uk-h4 uk-margin-top">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                doloremque accusantium at cupiditate quaerat temporibus?
              </p>
              <p>
                <a href="#" className="uk-button uk-button-secondary">
                  Buy me a coffee
                </a>
              </p>
            </div>
            <div
              className="uk-width-1-3 uk-card-media-right uk-height-large uk-background-cover"
              style={{
                backgroundImage: `url(https://images.pexels.com/photos/6207392/pexels-photo-6207392.jpeg?w=640)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
}
