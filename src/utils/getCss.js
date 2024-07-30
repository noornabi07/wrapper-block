export const getGradientCSS = (gradient) => {
  const { type, radialType, colors, centerPositions, angel } = gradient;
  if (gradient) {
    const gradientColors = colors?.map(
      ({ color, position }) => `${color} ${position}%`
    );
    const liner = `linear-gradient(${angel}deg, ${gradientColors})`;
    const radial = `radial-gradient(${radialType} at ${centerPositions?.x}% ${centerPositions?.y}%,${gradientColors})`;

    return type === "linear" ? `background:${liner};` : `background:${radial};`;
  }
  return "";
};
const getColor = (color) => {
  return ` ${color ? `background: ${color};` : ""}`;
};
const getImagePosition = (img) => {
  return `${img?.position && img?.position !== "default"
    ? `background-position: ${img.position !== "custom"
      ? `${img.position};`
      : `${img.xPosition} ${img.yPosition};`
    }`
    : ""
    }
  ${img?.attachment && img?.attachment !== "default"
      ? `background-attachment: ${img.attachment};`
      : ""
    }
    ${img?.repeat && img?.repeat !== "default" ? `background-repeat: ${img.repeat};` : ""}
    ${img?.size && img?.size !== "default"
      ? `background-size:${img.size !== "custom"
        ? img.size
        : `${img.customSize} auto`
      };`
      : ""
    }`;
};
const getImageCSS = (img) => {
  let desktop, tablet, mobile;
  if (Object.keys(img).length > 1) {
    if (img?.desktop) {
      desktop = getImagePosition(img?.desktop, "desktop");
    }
    if (img?.tablet) {
      tablet = getImagePosition(img?.tablet, "tablet");
    }
    if (img?.mobile) {
      mobile = getImagePosition(img?.mobile, "mobile");
    }
  }
  if (img) {
    return {
      global: `background-image: url(${img.url});`,
      desktop: img.url ? desktop : "",
      tablet: img.url ? tablet : "",
      mobile: img.url ? mobile : "",
    };
  }
  return "";
};

const getVideoCSS = (video, selector, type) => {
  const { url, loop } = video;
  const parentEl = document.querySelector(selector);

  const el = parentEl?.querySelector(".bpl-video");
  const videoEl = document.createElement("video");
  videoEl.muted = true;
  // videoEl.autoplay = true;
  videoEl.classList.add("bpl-video");

  if (!el) {
    if (parentEl && url) {
      videoEl.innerHTML = `<source src=${url}></source>`;
      parentEl.appendChild(videoEl);
    }
  }
  videoEl.loop = loop;
  videoEl.play()
  
  if (el && type !== "video") {
    parentEl.removeChild(el);
  }

  return `${selector} .bpl-video{
    left: 0;
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    width: -webkit-fill-available;
    top: 0;
    z-index: 0;
}`
}

export const getBackgroundCSS = (background, selector) => {
  const { normal, hover } = background;
  const { type, color, gradient, img, video } = normal;
  const {
    type: hoverType,
    color: hoverColor,
    gradient: hoverGradient,
    img: hoverImg,
    transition,
  } = hover;

  const parentEl = document.querySelector(selector);
  const el = parentEl?.querySelector(".bpl-video");

  setTimeout(() => {

  }, 1000);
  if (type !== "video" && el) {
    el.remove()
    // video.loop

  }


  const bg =
    type === "color"
      ? getColor(color)
      : type === "gradient"
        ? getGradientCSS(gradient)
        : type === "image"
          ? getImageCSS(img).global
          : "";

  // const bg =  type==="color" ? getColor(color):type==="gradient"?getGradientCSS(gradient):type==="media"?mediaType==="image"?getImageCSS(img):getVideoCSS():""



  const hoverBg =
    hoverType === "color"
      ? getColor(hoverColor)
      : hover.type === "gradient"
        ? getGradientCSS(hoverGradient)
        : hover.type === "image"
          ? getImageCSS(hoverImg).global
          : "";
  const desktop = type === "image" ? getImageCSS(img).desktop : "";
  const tablet = type === "image" ? getImageCSS(img).tablet : "";
  const mobile = type === "image" ? getImageCSS(img).mobile : "";
  const hoverDesktop = hoverType === "image" ? getImageCSS(hover.img).desktop : "";
  const hoverTablet = hoverType === "image" ? getImageCSS(hover.img).tablet : "";
  const hoverMobile = hoverType === "image" ? getImageCSS(hover.img).mobile : "";

  return `
  ${type === "video" ? getVideoCSS(video, selector, type) : ""}
  ${selector}{
    ${bg}
    ${desktop}
    ${transition ? `transition:all ${transition}s;` : ""}
  }

  ${selector}:hover{
    ${hoverBg}
    ${hoverDesktop}
  }

  @media only screen and (min-width:641px) and (max-width: 1024px) {
      ${selector}{
    ${tablet}
  }
  ${selector}:hover{
    ${hoverTablet}
  }
  }
  @media only screen and (max-width: 640px) {
  ${selector}{
    ${mobile}
  }
  ${selector}:hover{
    ${hoverMobile}
  }
  }`.replace(/\s+/g, " ").trim()
};