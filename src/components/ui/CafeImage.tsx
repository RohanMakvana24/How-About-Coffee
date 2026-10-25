import React, { useEffect, useRef, useState } from 'react';
import { buildAvifSrcSet, buildSrcSet } from '../../lib/imageSrcSet';

type CafeImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  containerClassName?: string;
  src?: string;
};

/** Image frame with a café-inspired loading state; keeps each image's layout intact. */
export const CafeImage: React.FC<CafeImageProps> = ({ containerClassName = '', className = '', alt = '', onLoad, onError, src, sizes = '100vw', ...props }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (imageRef.current?.complete) setLoaded(true);
  }, [src]);

  const finish = (event: React.SyntheticEvent<HTMLImageElement>) => {
    setLoaded(true);
    onLoad?.(event);
  };

  const webpSrcSet = buildSrcSet(src);
  const avifSrcSet = buildAvifSrcSet(src);

  return (
    <span className={`cafe-image ${loaded ? 'cafe-image--loaded' : ''} ${containerClassName}`}>
      <span className="cafe-image__skeleton" aria-hidden="true">
        <span className="cafe-image__steam"><i /><i /><i /></span>
        <span className="cafe-image__cup"><i /><b /></span>
        <span className="cafe-image__bean cafe-image__bean--one" />
        <span className="cafe-image__bean cafe-image__bean--two" />
        <strong>Brewing your moment</strong>
      </span>
      <picture>
        {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
        <img
          ref={imageRef}
          {...props}
          src={src}
          srcSet={webpSrcSet}
          sizes={sizes}
          decoding="async"
          alt={alt}
          className={className}
          onLoad={finish}
          onError={(event) => { setLoaded(true); onError?.(event); }}
        />
      </picture>
    </span>
  );
};

export default CafeImage;
