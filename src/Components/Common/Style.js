import { getBorderCSS, getMultiShadowCSS } from '../../../../Components/utils/getCSS';
import { getBoxCss } from '../../utils/functions';
import { getBackgroundCSS as getBGCSS, getOverlayCSS } from "../../utils/getCss";

const Style = ({ attributes, mainId }) => {
  const { wrapper, content, paddingColumns, shape, background2, overlay } = attributes;
  const { top, bottom } = shape;
  const { isFlip } = top;
  const { minHeight, border, shadow } = wrapper;
  const { isFullWidth, width, textAlign, color, verticalAlign, horizontalAlign } = content;
  const { normal, hover } = shadow;
  const { normalBorder, hoverBorder, } = border;

  const mainSl = `#${mainId}`;
  const containerSl = `${mainSl} .bBlocksContainer`;
  const contentSl = `${containerSl} .content`;
  const bottomShaped = `${containerSl} .bottomShaped`;
  const topShaped = `${containerSl} .topShaped`;

  return (
    <style>
      {`
        ${getBGCSS(background2, containerSl)}
        ${getOverlayCSS(overlay, containerSl)}

        ${mainSl}{
          min-height: ${0 === parseInt(minHeight) ? 'auto' : minHeight};
        }
        
      ${containerSl}{
        min-height: ${0 === parseInt(minHeight) ? 'auto' : minHeight};
        ${getBorderCSS(normalBorder)};
        ${getBoxCss(paddingColumns.padding.desktop, "padding")};
        box-shadow:${getMultiShadowCSS(normal)};
        align-items: ${horizontalAlign};
        justify-content: ${verticalAlign};
        overflow: hidden;
        }

      ${containerSl}:hover{
        ${getBorderCSS(hoverBorder)};
        box-shadow:${getMultiShadowCSS(hover)};
        }

        ${contentSl}{
          width: ${(isFullWidth || 0 === parseInt(width.desktop)) ? '100%' : width.desktop};
          text-align:${textAlign};
          color: ${color};
          z-index:99999;
        }

      ${topShaped} svg{
        width: ${top?.width.desktop};
        height: ${top?.height.desktop};
        color:${top?.color};
        fill:${top?.color};
        ${isFlip === true && `
          transform: translateX(0%) rotateY(180deg);
        `}
      }

      ${topShaped} svg path{
        color:${top?.color};
      fill:${top?.color};
      }

      ${bottomShaped} svg{
        width: ${bottom?.width.desktop};
        height: ${bottom?.height.desktop};
        color:${bottom?.color};
        fill:${bottom?.color};

      ${bottom?.isFlip === true && `
          transform: translateX(0%) rotateX(180deg);
        `};
      ${bottom?.isFlip === false && `
          transform: rotate(180deg);
        `}
      ${bottom?.isUpload === true && `
          transform: none;
        `}
      }
      ${bottomShaped} svg path{
      color:${bottom?.color};
      fill:${bottom?.color};
      }

      @media only screen and (max-width:640px){
      ${containerSl}{
        ${getBoxCss(paddingColumns.padding.mobile, "padding")};
        }

      ${topShaped} svg{
        width: ${top?.width.mobile};
        height: ${top?.height.mobile};
        }

      ${bottomShaped} svg{
        width: ${bottom?.width.mobile};
        height: ${bottom?.height.mobile};
        }

      }

      @media only screen and (min-width:641px) and (max-width: 1024px){
        ${containerSl}{
        ${getBoxCss(paddingColumns.padding.tablet, "padding")};
        }

      ${topShaped} svg{
        width: ${top?.width.tablet};
        height: ${top?.height.tablet};
        }

      ${bottomShaped} svg{
        width: ${bottom?.width.tablet};
        height: ${bottom?.height.tablet};
        }
      `}

    </style>
  );
};
export default Style;