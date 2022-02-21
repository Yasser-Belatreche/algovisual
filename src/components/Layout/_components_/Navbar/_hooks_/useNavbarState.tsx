import { useEffect, useState } from "react";

interface Params {
  reverseColors: boolean;
}

const useNavbarState = ({ reverseColors }: Params) => {
  const [withBorder, setWithBorder] = useState<boolean>(false);
  const [colorsReversed, setColorsReversed] = useState<boolean>(reverseColors);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setWithBorder(true);
        setColorsReversed(false);
      } else {
        setWithBorder(false);
        reverseColors && setColorsReversed(true);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [reverseColors]);

  return { withBorder, colorsReversed };
};

export { useNavbarState };
