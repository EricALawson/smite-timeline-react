import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
      console.log('click outside callback');
    if (ref.current && !ref.current.contains(e.target)) {
        console.log("outside");
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  });
};

export default useOutsideClick;