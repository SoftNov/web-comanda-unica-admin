import { Injectable } from '@angular/core';

export interface CookieOptions {
  maxAgeSeconds?: number;
  path?: string;
  sameSite?: 'Strict' | 'Lax' | 'None';
  secure?: boolean;
}

@Injectable({ providedIn: 'root' })
export class CookieService {
  set(name: string, value: string, options: CookieOptions = {}): void {
    const { maxAgeSeconds, path = '/', sameSite = 'Strict', secure = location.protocol === 'https:' } = options;

    let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path}; SameSite=${sameSite}`;

    if (maxAgeSeconds !== undefined) {
      cookie += `; max-age=${maxAgeSeconds}`;
    }
    if (secure) {
      cookie += '; Secure';
    }

    document.cookie = cookie;
  }

  get(name: string): string | null {
    const target = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split(';');

    for (const raw of cookies) {
      const cookie = raw.trim();
      if (cookie.startsWith(target)) {
        return decodeURIComponent(cookie.substring(target.length));
      }
    }

    return null;
  }

  delete(name: string, path = '/'): void {
    document.cookie = `${encodeURIComponent(name)}=; path=${path}; max-age=0; SameSite=Strict`;
  }
}
