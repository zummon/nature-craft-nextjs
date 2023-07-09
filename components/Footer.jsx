export default function () {
  return (
    <>
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
    </>
  );
}
