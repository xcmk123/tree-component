import React, { ReactNode, useEffect, useRef, useState } from "react";

import styles from "./Collapsible.module.css";

function Collapsible({ open = false, children, TitleContainer }) {
  const [isOpen, setIsOpen] = useState(open);
  const [height, setHeight] = useState(
    open ? undefined : 0
  );
  const ref = useRef(null);

  useEffect(() => {
    if (!height || !isOpen || !ref.current) return undefined;
    const resizeObserver = new ResizeObserver((el) => {
      setHeight(el[0].contentRect.height);
    });
    resizeObserver.observe(ref.current);
    return () => {
      resizeObserver.disconnect();
    };
  }, [height, isOpen]);

  useEffect(() => {
    if (isOpen) setHeight(ref.current?.getBoundingClientRect().height);
    else setHeight(0);
  }, [isOpen]);
  
  return (
    <>
      <div onClick={() => setIsOpen((prevState) => !prevState)}>
        {TitleContainer}
      </div>
      <div className={styles.content} style={{ height }}>
        <div ref={ref}>{children}</div>
      </div>
    </>
  );
}

export default Collapsible;
