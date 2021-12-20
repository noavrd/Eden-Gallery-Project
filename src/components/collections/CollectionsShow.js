import CollectionSingle from './CollectionSingle';
import '../../styles/collections.css';
import { useCallback, useEffect, useState } from 'react';

import { ScrollingCarousel } from '@trendyol-js/react-carousel';

export default function CollectionShow({ artworks }) {
  return (
    <div>
      <div id="collection-total" className="segments">
        <div className="page-headlines">Collections</div>
        <span className="segment-details">
          The Galy collection blends cartoon classics with modern storytelling.
          the collection draws inspiration from Disney, Toy Story, and the
          transactional nature of contemporary society.
        </span>
      </div>
      <div className="slide">
        <ScrollingCarousel rightArrow={true} responsive={true} leftArrow={true}>
          {artworks.map((item, i) => (
            <CollectionSingle single={item} key={i} />
          ))}
        </ScrollingCarousel>
      </div>
    </div>
  );
}
