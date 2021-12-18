import '../../styles/collaborations.css';
import collOne from './colloberation 1.jpg';
import collTwo from './colloberation 2.jpg';
import collThree from './colloberation 3.jpg';

export default function Collaboration() {
  return (
    <div>
      <div className="segments" id="coll">
        <div className="page-headlines">Collaboration</div>
        <span className="segment-details">
          Discover selected artworks by Galy
        </span>
      </div>

      <div className="show-collaborations">
        <div className="single-coll">
          <div className="information-coll">
            <div className="title-coll">Collaboration Title</div>
            <div className="details-coll">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </div>
            <button className="btn-coll">Read More</button>
          </div>
          <img className="pic-roll" src={collOne} alt="first-coll" />
        </div>

        <div className="single-coll">
          <div className="information-coll">
            <div className="title-coll">Collaboration Title</div>
            <div className="details-coll">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </div>
            <button className="btn-coll">Read More</button>
          </div>
          <img className="pic-roll" src={collTwo} alt="first-coll" />
        </div>

        <div className="single-coll">
          <div className="information-coll">
            <div className="title-coll">Collaboration Title</div>
            <div className="details-coll">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam
            </div>
            <button className="btn-coll">Read More</button>
          </div>
          <img className="pic-roll" src={collThree} alt="first-coll" />
        </div>
      </div>
    </div>
  );
}
