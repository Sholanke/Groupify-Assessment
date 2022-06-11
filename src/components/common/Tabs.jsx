import React, { useState } from "react";

export default function Tabs({ config }) {
  const firstControlConfig = config.controls[0].title;
  const [activeControl, setActiveControl] = useState(firstControlConfig);

  return (
    <div className="base-tabs">
      <div className="base-tabs__controls">
        {config.controls?.map((control, index) => (
          <button
            className="base-tabs__controls__btn"
            data-active={control.title === activeControl}
            key={index}
            onClick={() => setActiveControl(control.title)}
          >
            {control.title}
          </button>
        ))}
      </div>

      <div className="base-tabs">
        {
          config.controls.find((control) => control.title === activeControl)
            .component
        }
      </div>
    </div>
  );
}
