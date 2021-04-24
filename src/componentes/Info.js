import React from "react";
const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const {
    strArtistThumb,
    strGenre,
    strBiographyES,
    strBiographyEN,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = info;
  console.log(info);
  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-light font-weight-bold">
        Información Artista
      </div>
      <div className="card-body">
        <img src={strArtistThumb} alt="logo artista" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografia:</h2>
        <p className="card-text">
          {strBiographyES ? strBiographyES : strBiographyEN}
        </p>
        <p className="card-text">
          {strFacebook && (
            <a
              href={`https://${strFacebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
          )}
          {strTwitter && (
            <a
              href={`https://${strTwitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {strLastFMChart && (
            <a
              href={`${strLastFMChart}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-lastfm"></i>
            </a>
          )}
        </p>
      </div>
    </div>
  );
};

export default Info;
