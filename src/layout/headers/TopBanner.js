/* This example requires Tailwind CSS v2.0+ */
import { XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import classNames from "src/utilities/web/ClassNames";

export default function Example() {
  const [hidden, setHidden] = useState(false);

  return (
    <div
      className={classNames(
        hidden && "hidden",
        "bg-indigo-600 flex items-center justify-center relative"
      )}
    >
      <span className="text-sm lg:text-base text-center text-white p-2">
        Welcome to my site! We are currently building out content so please be
        patient.
      </span>
      <XIcon
        onClick={() => setHidden(true)}
        className="absolute right-5 h-6 w-6 text-white cursor-pointer"
        aria-hidden="true"
      />
    </div>
  );
}
