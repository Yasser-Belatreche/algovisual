import { useCallback, useState } from "react";

const useResponsiveMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);
  const toggleMenu = useCallback(() => {
    setIsMenuOpened((isOpen) => !isOpen);
  }, []);

  return { toggleMenu, isMenuOpened };
};

export { useResponsiveMenu };
