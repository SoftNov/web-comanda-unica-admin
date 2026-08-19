import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

export interface GeocodeResult {
  latitude: number;
  longitude: number;
}

interface NominatimResult {
  lat: string;
  lon: string;
}

// Geocodifica endereços via Nominatim (OpenStreetMap) — não exige API key, mas
// tem limite de ~1 req/s por IP, então só deve ser chamado sob ação explícita
// do usuário (busca de CEP, clique em "localizar"), nunca a cada tecla digitada.
@Injectable({ providedIn: 'root' })
export class GeocodingService {
  private readonly http = inject(HttpClient);

  geocodeAddress(query: string): Observable<GeocodeResult | null> {
    const params = new URLSearchParams({
      q: query,
      format: 'json',
      limit: '1',
      countrycodes: 'br'
    });

    return this.http
      .get<NominatimResult[]>(`https://nominatim.openstreetmap.org/search?${params.toString()}`)
      .pipe(
        map((results) => {
          const first = results?.[0];
          if (!first) {
            return null;
          }
          const latitude = parseFloat(first.lat);
          const longitude = parseFloat(first.lon);
          if (Number.isNaN(latitude) || Number.isNaN(longitude)) {
            return null;
          }
          return { latitude, longitude };
        })
      );
  }
}
