// eslint-disable-next-line @typescript-eslint/no-explicit-any
const cache = new Map<string, { promise: Promise<any>; timeoutId?: number }>();

const getCachedPromise = <Result>(key: string): Promise<Result> | undefined => {
  const entry = cache.get(key);
  return entry?.promise;
};

const setCachedPromise = <Result>(
  key: string,
  promise: Promise<Result>,
  // Cannot be 0, we need to delete the cached promise on next event loop
  duration: number = 1,
): void => {
  const cacheKey = key;

  const timeoutId = window.setTimeout(() => {
    cache.delete(cacheKey);
  }, duration);

  cache.set(cacheKey, { promise, timeoutId });
};

type KeyGenerator<Params> = (params: Params) => string;
interface CachedFetcherParams<Params, Result> {
  cacheDuration?: number;
  fetcher: (params: Params) => Promise<Result>;
  key: string | KeyGenerator<Params>; // Duration in milliseconds
}

export const cachedFetcher = <Params, Result>({
  key,
  fetcher,
  cacheDuration,
}: CachedFetcherParams<Params, Result>): ((params: Params) => Promise<Result>) => {
  return async (params: Params): Promise<Result> => {
    const cacheKey = typeof key === 'function' ? key(params) : key;
    const cachedPromise = getCachedPromise<Result>(cacheKey);

    if (cachedPromise) {
      return await cachedPromise;
    }

    const promise = fetcher(params);

    setCachedPromise(cacheKey, promise, cacheDuration);

    return await promise;
  };
};
