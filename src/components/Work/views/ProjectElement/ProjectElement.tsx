import { FC, useCallback, useState } from "react";

import { Tooltip } from "@/common/Tooltip";

import { ProjectProps } from "../../types";

export const ProjectElement: FC<ProjectProps> = ({ name, description }) => {
  const [show, setShow] = useState(false);

  const onCloseHandler = useCallback(() => {
    setShow(false);
  }, []);

  const onOpenHandler = useCallback(() => {
    setShow(true);
  }, []);

  return (
    <>
      <span onMouseEnter={onOpenHandler} onMouseLeave={onCloseHandler}>
        {name}
      </span>
      {show && (
        <Tooltip closeHandler={onCloseHandler}>
          <p>{description}</p>
        </Tooltip>
      )}
    </>
  );
};
