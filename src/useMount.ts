import { useEffect } from 'react';

/**
 * 组件 Mount 的 hook，支持 async 啦1
 * @example
 * ```tsx
 * function App() {
 *   useMount(async () => {
 *      // biz code
 *  });
 * }
 * ```
 */
export function useMount(fn: () => void): void {
  useEffect(() => {
    fn();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

export default useMount;
