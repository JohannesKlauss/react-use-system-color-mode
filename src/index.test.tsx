import { useSystemColorMode } from './index';
import { renderHook, act } from '@testing-library/react-hooks';
import 'mock-match-media/polyfill';

import { setMedia } from 'mock-match-media';

beforeEach(() => {
  setMedia({ 'prefers-color-scheme': 'dark' });
});

test('useSystemColorMode should get correct colorMode when fire change event', async () => {
  const { result, waitForNextUpdate } = renderHook(() => useSystemColorMode());

  expect(result.current).toEqual('dark');

  act(() => {
    setMedia({
      'prefers-color-scheme': 'light',
    });
  });

  await waitForNextUpdate()

  expect(result.current).toEqual('light');
});