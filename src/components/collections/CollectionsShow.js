import CollectionSingle from './CollectionSingle';
import '../../styles/collections.css';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import { PrevButton, NextButton } from './Button';

import { ScrollingCarousel } from '@trendyol-js/react-carousel';

export default function CollectionShow({ artworks }) {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    containScroll: 'trimSnaps',
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const onSelect = useCallback(() => {
    console.log(1);

    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);
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
      {/* <div className="embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            {artworks.map((item, i) => (
              <CollectionSingle single={item} key={i} />
            ))}
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      </div> */}
    </div>
  );
}
