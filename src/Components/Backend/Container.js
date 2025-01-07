import { InnerBlocks } from '@wordpress/block-editor';
import SVG from 'react-inlinesvg';
import { Abstract, AsymmetricCurve, AsymmetricTriangle, OceanWabe, } from '../../utils/icons';

const Container = ({ attributes }) => {
  const { shape } = attributes;
  const { top, bottom } = shape;
  const { isUpload, type } = top;

  return (
    <>
      {/* Top Shaped */}
      {
        isUpload ? <div className='topShaped'>
          <SVG
            src={top?.uploadSvg?.url}
            height=""
            width=""
            length=""
          />
        </div> : <>
          {
            type === "none" ? "" :
              <div className='topShaped'>
                {type === "ocean wave" && <OceanWabe />}
                {type === "asymmetric triangle" && <AsymmetricTriangle />}
                {type === "abstract paintbrush" && <Abstract />}
                {type === "asymmetric curve" && <AsymmetricCurve />}
              </div>
          }
        </>
      }

      {/* Bottom shaped */}
      {
        bottom.isUpload ? <div className='bottomShaped'>
          <SVG
            src={bottom?.uploadSvg?.url}
            height=""
            width=""
          />
        </div> :
          <>
            {
              bottom?.type === "none" ? "" :
                <div className='bottomShaped'>
                  {bottom?.type === "ocean wave" && <OceanWabe />}
                  {bottom?.type === "asymmetric triangle" && <AsymmetricTriangle />}
                  {bottom?.type === "abstract paintbrush" && <Abstract />}
                  {bottom?.type === "asymmetric curve" && <AsymmetricCurve />}
                </div>
            }
          </>
      }

      <div className='content'>
        <InnerBlocks />
      </div>
    </>
  );
};

export default Container;