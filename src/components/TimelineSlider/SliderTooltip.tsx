import React from "react";

function formatTime(seconds: number) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.round(seconds % 60);
    return [
      h,
      m > 9 ? m : (h ? '0' + m : m || '0'),
      s > 9 ? s : '0' + s
    ].filter(Boolean).join(':');
  }

const SliderTooltip = (value?: number) => {
    return <div className='time-tooltip'>
        {value && formatTime(value)}
    </div>
}

export default SliderTooltip;