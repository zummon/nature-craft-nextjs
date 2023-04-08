import { getAllBlogs } from '../../lib/blog-parser';
import Card from '../../components/Card';

export function getStaticProps() {
  return {
    props: {
      blogs: getAllBlogs(),
      title: 'Blogs',
      description: 'Fugit quasi ullam reiciendis totam culpa.',
      image: {
        src: '',
      },
      date: '',
    },
  };
}

export default function Blogs({ blogs }) {
  return (
    <>
      <div className="uk-container">
        <div
          className="uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s"
          uk-grid=""
        >
          {blogs.map((props, index) => (
            <div key={`blog-${index}`}>
              <Card {...props} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
