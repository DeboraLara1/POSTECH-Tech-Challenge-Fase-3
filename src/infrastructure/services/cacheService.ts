import AsyncStorage from '@react-native-async-storage/async-storage';

const CACHE_EXPIRATION = 5 * 60 * 1000; 

interface CacheData<T> {
  data: T;
  timestamp: number;
}

export const cacheService = {
  async set<T>(key: string, data: T): Promise<void> {
    const cacheData: CacheData<T> = {
      data,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(key, JSON.stringify(cacheData));
  },

  async get<T>(key: string): Promise<T | null> {
    const cachedData = await AsyncStorage.getItem(key);
    if (!cachedData) return null;

    const { data, timestamp }: CacheData<T> = JSON.parse(cachedData);
    const isExpired = Date.now() - timestamp > CACHE_EXPIRATION;

    if (isExpired) {
      await AsyncStorage.removeItem(key);
      return null;
    }

    return data;
  },

  async clear(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  },

  async clearAll(): Promise<void> {
    const keys = await AsyncStorage.getAllKeys();
    const cacheKeys = keys.filter(key => key.startsWith('cache_'));
    await AsyncStorage.multiRemove(cacheKeys);
  }
}; 