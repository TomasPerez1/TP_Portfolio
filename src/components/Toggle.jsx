import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Toggle() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="border-2 border-red-400 flex items-center w-fit gap-[0.10rem]">
      <SunIcon className="h-6 w-6" />
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-primary" : "bg-secondary"
        } relative inline-flex h-5 w-11 items-center rounded-full`}
      >
        
        <span
          className={`${
            enabled ? "translate-x-6" : "translate-x-1"
          } inline-block h-3.5 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <MoonIcon className="h-5 w-5" />
    </div>
  );
}
