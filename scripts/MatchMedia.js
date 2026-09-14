import pixToRem from "./utils/pixToRem";

const MatchMedia = {
  mobile: window.matchMedia(`(width <= ${pixToRem(767.98)}rem)`)
}


export default MatchMedia