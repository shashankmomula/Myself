import React from "react";
import blur from "../output-onlinegiftools.gif";

const Diff = () => {
  return (
    <div className="diff aspect-[10/9] mt-20 mix-blend-multiply dark:mix-blend-normal">
      <div className="diff-item-1">
        <img alt="daisy" src={blur} />
      </div>
      <div className="diff-item-2">
        <img
          alt="daisy"
          src="https://webixnet.com/wp-content/uploads/2022/09/97639-coding.gif"
        />
      </div>
      <div className="diff-resizer"></div>
    </div>
  );
};

export default Diff;
