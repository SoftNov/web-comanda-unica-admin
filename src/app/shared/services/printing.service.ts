import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type PrinterConnectionType = 'NETWORK' | 'USB';
export type PrinterCodePage = 'CP850' | 'CP860' | 'WPC1252' | 'ASCII';
export type PrinterStatus = 'UNKNOWN' | 'ONLINE' | 'REACHABLE' | 'OFFLINE' | 'NO_PAPER' | 'COVER_OPEN' | 'ERROR';
export type PrintJobStatus = 'PENDING' | 'PROCESSING' | 'PRINTED' | 'UNCONFIRMED' | 'ERROR' | 'CANCELLED';
export type PrintEventType = 'ORDER_CREATED' | 'ORDER_CANCELLED' | 'ITEM_CANCELLED' | 'ORDER_NOTES_CHANGED' | 'PAYMENT_RECEIVED' | 'TEST';
export type PrintDeliveryState = 'NOT_SENT' | 'SEND_STARTED' | 'SENT' | 'DEVICE_CONFIRMED' | 'UNKNOWN';

export interface PrinterResponse {
  id: string;
  name: string;
  connectionType: PrinterConnectionType;
  host: string | null;
  port: number | null;
  usbTarget: string | null;
  agentId: string | null;
  agentName: string | null;
  paperWidthMm: number;
  codePage: PrinterCodePage;
  supportsCut: boolean;
  supportsQrCode: boolean;
  supportsStatus: boolean;
  active: boolean;
  status: PrinterStatus;
  statusMessage: string | null;
  statusCheckedAt: string | null;
  createdAt: string;
}

export interface SavePrinterRequest {
  name: string;
  connectionType: PrinterConnectionType;
  host?: string | null;
  port?: number | null;
  usbTarget?: string | null;
  macAddress?: string | null;
  agentId?: string | null;
  paperWidthMm: number;
  codePage: PrinterCodePage;
  supportsCut: boolean;
  supportsQrCode: boolean;
  supportsStatus: boolean;
  active: boolean;
}

export interface DiscoveredPrinterResponse {
  key: string;
  connectionType: PrinterConnectionType;
  host: string | null;
  port: number | null;
  usbTarget: string | null;
  macAddress: string | null;
  respondsToStatus: boolean;
  agentId: string;
  agentName: string;
}

export interface PrintSectorResponse {
  id: string;
  name: string;
  description: string | null;
  printerId: string | null;
  printerName: string | null;
  fullOrderCopy: boolean;
  paymentReceipt: boolean;
  active: boolean;
  categories: { id: string; name: string }[];
}

export interface SavePrintSectorRequest {
  name: string;
  description?: string | null;
  printerId?: string | null;
  fullOrderCopy: boolean;
  paymentReceipt: boolean;
  active: boolean;
  categoryIds: string[];
}

export interface PrintAgentResponse {
  id: string;
  name: string;
  paired: boolean;
  revoked: boolean;
  online: boolean;
  lastSeenAt: string | null;
  pairedAt: string | null;
  agentVersion: string | null;
  hostname: string | null;
  osName: string | null;
  pairingCode: string | null;
  pairingExpiresAt: string | null;
}

export interface PrintJobResponse {
  id: string;
  orderId: string | null;
  orderNumber: number | null;
  tableLabel: string | null;
  sectorName: string | null;
  printerName: string | null;
  eventType: PrintEventType;
  status: PrintJobStatus;
  deliveryState: PrintDeliveryState;
  reprint: boolean;
  attempts: number;
  errorMessage: string | null;
  itemLines: string[];
  createdAt: string;
  printedAt: string | null;
}

export interface PrintJobPage {
  content: PrintJobResponse[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface PrintJobFilter {
  status?: PrintJobStatus | '';
  orderNumber?: number | null;
  sectorId?: string;
  page?: number;
  size?: number;
}

@Injectable({ providedIn: 'root' })
export class PrintingService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = `${environment.apiBaseUrl}/api/v1`;

  get installerUrl(): string {
    return environment.printAgentInstallerUrl;
  }

  listPrinters(): Observable<PrinterResponse[]> {
    return this.http.get<PrinterResponse[]>(`${this.baseUrl}/printers`);
  }

  listDiscoveredPrinters(): Observable<DiscoveredPrinterResponse[]> {
    return this.http.get<DiscoveredPrinterResponse[]>(`${this.baseUrl}/printers/discovered`);
  }

  createPrinter(request: SavePrinterRequest): Observable<PrinterResponse> {
    return this.http.post<PrinterResponse>(`${this.baseUrl}/printers`, request);
  }

  updatePrinter(id: string, request: SavePrinterRequest): Observable<PrinterResponse> {
    return this.http.put<PrinterResponse>(`${this.baseUrl}/printers/${id}`, request);
  }

  deletePrinter(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/printers/${id}`);
  }

  testPrinter(id: string): Observable<PrintJobResponse> {
    return this.http.post<PrintJobResponse>(`${this.baseUrl}/printers/${id}/test`, {});
  }

  listSectors(): Observable<PrintSectorResponse[]> {
    return this.http.get<PrintSectorResponse[]>(`${this.baseUrl}/print-sectors`);
  }

  createSector(request: SavePrintSectorRequest): Observable<PrintSectorResponse> {
    return this.http.post<PrintSectorResponse>(`${this.baseUrl}/print-sectors`, request);
  }

  updateSector(id: string, request: SavePrintSectorRequest): Observable<PrintSectorResponse> {
    return this.http.put<PrintSectorResponse>(`${this.baseUrl}/print-sectors/${id}`, request);
  }

  deleteSector(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/print-sectors/${id}`);
  }

  listAgents(): Observable<PrintAgentResponse[]> {
    return this.http.get<PrintAgentResponse[]>(`${this.baseUrl}/print-agents`);
  }

  createAgent(name: string): Observable<PrintAgentResponse> {
    return this.http.post<PrintAgentResponse>(`${this.baseUrl}/print-agents`, { name });
  }

  regeneratePairingCode(id: string): Observable<PrintAgentResponse> {
    return this.http.post<PrintAgentResponse>(`${this.baseUrl}/print-agents/${id}/pairing-code`, {});
  }

  revokeAgent(id: string): Observable<PrintAgentResponse> {
    return this.http.post<PrintAgentResponse>(`${this.baseUrl}/print-agents/${id}/revoke`, {});
  }

  deleteAgent(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/print-agents/${id}`);
  }

  searchJobs(filter: PrintJobFilter): Observable<PrintJobPage> {
    const params: Record<string, string | number> = {
      page: filter.page ?? 0,
      size: filter.size ?? 20
    };
    if (filter.status) {
      params['status'] = filter.status;
    }
    if (filter.orderNumber != null) {
      params['orderNumber'] = filter.orderNumber;
    }
    if (filter.sectorId) {
      params['sectorId'] = filter.sectorId;
    }
    return this.http.get<PrintJobPage>(`${this.baseUrl}/print-jobs`, { params });
  }

  reprintJob(id: string): Observable<PrintJobResponse> {
    return this.http.post<PrintJobResponse>(`${this.baseUrl}/print-jobs/${id}/reprint`, {});
  }

  retryJob(id: string): Observable<PrintJobResponse> {
    return this.http.post<PrintJobResponse>(`${this.baseUrl}/print-jobs/${id}/retry`, {});
  }

  cancelJob(id: string): Observable<PrintJobResponse> {
    return this.http.post<PrintJobResponse>(`${this.baseUrl}/print-jobs/${id}/cancel`, {});
  }
}
