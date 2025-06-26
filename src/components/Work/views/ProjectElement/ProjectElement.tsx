import { FC, useCallback, useState } from "react";

import { useClickOutside, useMediaQuery } from "@/common/hooks";
import { Tooltip } from "@/common/Tooltip";

import { ProjectProps } from "../../types";

export const ProjectElement: FC<ProjectProps> = ({ name, description }) => {
  const [show, setShow] = useState(false);
  const isMobileOrTablet = useMediaQuery("(max-width: 1024px)");

  const onCloseHandler = useCallback(() => {
    setShow(false);
  }, []);

  const onOpenHandler = useCallback(() => {
    setShow(true);
  }, []);

  const onToggleHandler = useCallback(() => {
    setShow(prev => !prev);
  }, []);
  
  const elementRef = useClickOutside<HTMLDivElement>(onCloseHandler);

  return (
    <div ref={elementRef}>
      <span 
        onMouseEnter={!isMobileOrTablet ? onOpenHandler : undefined}
        onMouseLeave={!isMobileOrTablet ? onCloseHandler : undefined}
        onClick={isMobileOrTablet ? onToggleHandler : undefined}
      >
        {name}
      </span>
      {show && (
        <Tooltip closeHandler={onCloseHandler}>
          <p>{description}</p>
        </Tooltip>
      )}
    </div>
  );
};
