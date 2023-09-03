# Cache Http Service: cache.service.ts

```js
// to use
//  true as 2nd argument forces the retrieval of a fresh response from the server.
this.cacheService.getData('/api/data', true).subscribe((response) => {
  // Handle the fresh response
});
```

## Cache service explained

- The `responseCache` map stores each response along with its expiration time.
- The `cacheDuration` variable determines the duration for which a response is considered valid.
- The `getData` method checks the cache for a valid entry. If found and cacheBust is false, it returns the cached response. Otherwise, it clears the cache entry and retrieves the response from the server.
- The `clearCache` method clears the entire cache, and the clearCacheEntry method allows you to clear a specific cache entry.
- The `isCacheValid` method checks whether a cached entry is still valid based on its expiration time.

```js
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  private responseCache = new Map<
    string,
    { response: any; expiresAt: number }
  >();
  private cacheDuration = 60 * 1000; // Cache duration in milliseconds (1 minute)

  constructor(private http: HttpClient) {}

  getData(url: string, cacheBust = false): Observable<any> {
    const cachedEntry = this.responseCache.get(url);

    if (cachedEntry) {
      if (!cacheBust && this.isCacheValid(cachedEntry)) {
        return of(cachedEntry.response);
      } else {
        this.responseCache.delete(url);
      }
    }

    return this.http.get<any>(url).pipe(
      tap((response) => {
        this.responseCache.set(url, {
          response,
          expiresAt: Date.now() + this.cacheDuration,
        });
      }),
      shareReplay(1),
    );
  }

  clearCache() {
    this.responseCache.clear();
  }

  clearCacheEntry(url: string) {
    this.responseCache.delete(url);
  }

  private isCacheValid(entry: { response: any; expiresAt: number }): boolean {
    return entry.expiresAt > Date.now();
  }
}
```
