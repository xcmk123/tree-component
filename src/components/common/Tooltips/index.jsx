import { useState } from "react";
import style from "./style.module.scss";

const Tooltips = (props) => {
  const { children, content } = props;
  const [isVisible, setVisible] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const styles = () => {
    return [
      style["tooltips-content"],
      isVisible
        ? style["tooltips-visible"]
        : style["tooltips-invisible"]
    ].join(' ')
  }
  
  const handleFadeoutTooltips = () => {
    setVisible(false);
  };

  const handleFadeinTooltips = () => {
    setHovered(true);
    setVisible(true);
  };
  
  const handleRemoveTooltips = () => {
    if (!isVisible) return setHovered(false);
  };

  return (
    <div
      id={style["tooltips-container"]}
      onMouseEnter={handleFadeinTooltips}
      onMouseLeave={handleFadeoutTooltips}
    >
      {children}
      {isHovered && (
        <div
          className={styles()}
          onAnimationEnd={handleRemoveTooltips}
        >
          {content}
        </div>
      )}
    </div>
  );
};
export default Tooltips;
