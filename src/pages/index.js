import React from "react";
import { Trans } from "@src/common/components/blocks/Trans";
import Done from "@src/common/done";

const MyComponent = () => {
  return (
    <div>
      <div className="border focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 inline-flex items-center rounded-md px-3 py-2 text-white font-medium text-sm leading-4 bg-teal-300 hover:bg-indigo-700 focus:outline-none shadow-sm">
        hellofs
      </div>
      <Trans />
      <Done />
    </div>
  );
};

export default MyComponent;
