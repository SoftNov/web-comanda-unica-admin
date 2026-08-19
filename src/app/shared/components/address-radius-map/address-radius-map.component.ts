import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as L from 'leaflet';

const DEFAULT_CENTER: L.LatLngTuple = [-14.235, -51.9253]; // Centro geográfico do Brasil
const DEFAULT_ZOOM = 4;
const LOCATED_ZOOM = 16;

// Ícones do Leaflet vêm de imagens separadas que o bundler não resolve
// automaticamente fora do CSS; carregar via CDN evita configurar cópia de assets.
const markerIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

@Component({
  selector: 'app-address-radius-map',
  standalone: true,
  templateUrl: './address-radius-map.component.html',
  styleUrl: './address-radius-map.component.scss'
})
export class AddressRadiusMapComponent implements AfterViewInit, OnChanges, OnDestroy {
  @Input() latitude: number | null = null;
  @Input() longitude: number | null = null;
  @Input() radiusMeters = 1000;

  @Output() readonly positionChange = new EventEmitter<{ latitude: number; longitude: number }>();

  @ViewChild('mapContainer', { static: true }) private readonly mapContainerRef!: ElementRef<HTMLDivElement>;

  private map?: L.Map;
  private marker?: L.Marker;
  private circle?: L.Circle;

  ngAfterViewInit(): void {
    this.map = L.map(this.mapContainerRef.nativeElement, {
      center: this.hasPosition() ? [this.latitude!, this.longitude!] : DEFAULT_CENTER,
      zoom: this.hasPosition() ? LOCATED_ZOOM : DEFAULT_ZOOM
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19
    }).addTo(this.map);

    this.map.on('click', (event: L.LeafletMouseEvent) => {
      this.applyPosition(event.latlng.lat, event.latlng.lng, true);
    });

    if (this.hasPosition()) {
      this.renderMarkerAndCircle();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.map) {
      return;
    }

    if ((changes['latitude'] || changes['longitude']) && this.hasPosition()) {
      const zoom = Math.max(this.map.getZoom(), LOCATED_ZOOM);
      this.renderMarkerAndCircle();
      this.map.setView([this.latitude!, this.longitude!], zoom);
    }

    if (changes['radiusMeters'] && this.circle) {
      this.circle.setRadius(this.radiusMeters);
    }
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  private hasPosition(): boolean {
    return this.latitude != null && this.longitude != null;
  }

  private renderMarkerAndCircle(): void {
    const position: L.LatLngTuple = [this.latitude!, this.longitude!];

    if (!this.marker) {
      this.marker = L.marker(position, { icon: markerIcon, draggable: true }).addTo(this.map!);
      this.marker.on('dragend', () => {
        const latLng = this.marker!.getLatLng();
        this.applyPosition(latLng.lat, latLng.lng, false);
      });
    } else {
      this.marker.setLatLng(position);
    }

    if (!this.circle) {
      this.circle = L.circle(position, {
        radius: this.radiusMeters,
        color: '#2563eb',
        weight: 2,
        fillColor: '#3b82f6',
        fillOpacity: 0.15
      }).addTo(this.map!);
    } else {
      this.circle.setLatLng(position);
      this.circle.setRadius(this.radiusMeters);
    }
  }

  private applyPosition(latitude: number, longitude: number, recenter: boolean): void {
    this.latitude = latitude;
    this.longitude = longitude;
    this.renderMarkerAndCircle();
    if (recenter) {
      this.map!.panTo([latitude, longitude]);
    }
    this.positionChange.emit({ latitude, longitude });
  }
}
