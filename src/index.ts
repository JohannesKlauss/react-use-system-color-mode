import { useEffect, useState } from 'react';

const MEDIA_QUERY = '(prefers-color-scheme: dark)';
const MODE_DARK = 'dark';
const MODE_LIGHT = 'light';

type ColorMode = 'dark' | 'light';

const isClient = () => typeof window !== 'undefined';

const getMatchMedia = (): MediaQueryList | undefined => {
  return isClient() ? window.matchMedia && window.matchMedia(MEDIA_QUERY) : undefined;
};

const getColorMode = (matchQueryList: MediaQueryList | undefined): ColorMode => {
  return matchQueryList && matchQueryList.matches ? MODE_DARK : MODE_LIGHT;
};

const getBindingEvents = (matchQueryList: MediaQueryList | undefined, handler: () => void): { bindEvent: () => void; unbindEvent: () => void } => {
  if (matchQueryList && matchQueryList.addEventListener) {
    return {
      bindEvent: (): void => matchQueryList.addEventListener('change', handler),
      unbindEvent: (): void => matchQueryList.removeEventListener('change', handler),
    };
  }

  return {
    bindEvent: (): void => matchQueryList && matchQueryList.addListener(handler),
    unbindEvent: (): void => matchQueryList && matchQueryList.removeListener(handler),
  };
};

export function useSystemColorMode(): ColorMode {
  const [colorMode, setColorMode] = useState<ColorMode>(getColorMode(getMatchMedia()));

  const handleChange = (): void => {
    isClient() && window.requestAnimationFrame(() => setColorMode(getColorMode(getMatchMedia())));
  };

  useEffect(() => {
    if (isClient()) {
      const { bindEvent, unbindEvent } = getBindingEvents(getMatchMedia(), handleChange);

      bindEvent();

      return unbindEvent;
    }
  }, []);

  return colorMode;
}