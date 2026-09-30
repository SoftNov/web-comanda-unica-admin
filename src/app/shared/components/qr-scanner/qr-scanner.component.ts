import { Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild, signal } from '@angular/core';

// Leitura de QR Code pela câmera do aparelho usando a API nativa BarcodeDetector (Chrome/Edge no
// Android e desktop, Safari 17+). Sem suporte no navegador, o componente só avisa — quem o usa
// sempre oferece a digitação manual do código como alternativa (e leitores USB, que "digitam"
// o código no campo, funcionam sem câmera nenhuma).
@Component({
  selector: 'app-qr-scanner',
  standalone: true,
  template: `
    <div class="qr-scanner">
      @if (unsupported()) {
        <p class="qr-scanner__message">
          <span class="material-icons" aria-hidden="true">no_photography</span>
          Este navegador não lê QR Code pela câmera. Digite o código impresso no cartão ou use um leitor USB.
        </p>
      } @else if (error()) {
        <p class="qr-scanner__message qr-scanner__message--error">
          <span class="material-icons" aria-hidden="true">error_outline</span>
          {{ error() }}
        </p>
      } @else {
        <div class="qr-scanner__viewport">
          <video #video class="qr-scanner__video" playsinline muted></video>
          <div class="qr-scanner__frame" aria-hidden="true"></div>
        </div>
        <p class="qr-scanner__hint">Aponte a câmera para o QR Code do cartão.</p>
      }
      <button type="button" class="btn btn--ghost qr-scanner__close" (click)="closed.emit()">
        <span class="material-icons" aria-hidden="true">close</span>
        Fechar câmera
      </button>
    </div>
  `,
  styles: [`
    .qr-scanner { display: flex; flex-direction: column; align-items: center; gap: 12px; }
    .qr-scanner__viewport { position: relative; width: 100%; max-width: 360px; aspect-ratio: 1; border-radius: var(--radius-sm); overflow: hidden; background: #000; }
    .qr-scanner__video { width: 100%; height: 100%; object-fit: cover; }
    .qr-scanner__frame { position: absolute; inset: 18%; border: 3px solid var(--color-accent); border-radius: 12px; box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.35); }
    .qr-scanner__hint { margin: 0; font-size: 0.875rem; color: var(--color-text-muted); }
    .qr-scanner__message { display: flex; align-items: center; gap: 8px; margin: 0; font-size: 0.875rem; color: var(--color-text-muted); }
    .qr-scanner__message--error { color: #f87171; }
  `]
})
export class QrScannerComponent implements OnInit, OnDestroy {
  @Output() readonly scanned = new EventEmitter<string>();
  @Output() readonly closed = new EventEmitter<void>();

  @ViewChild('video') private videoRef?: ElementRef<HTMLVideoElement>;

  readonly unsupported = signal(false);
  readonly error = signal<string | null>(null);

  private stream: MediaStream | null = null;
  private timer: ReturnType<typeof setInterval> | null = null;
  private done = false;

  ngOnInit(): void {
    const Detector = (window as unknown as { BarcodeDetector?: new (options: { formats: string[] }) => BarcodeDetectorLike }).BarcodeDetector;
    if (!Detector || !navigator.mediaDevices?.getUserMedia) {
      this.unsupported.set(true);
      return;
    }
    const detector = new Detector({ formats: ['qr_code'] });

    navigator.mediaDevices
      .getUserMedia({ video: { facingMode: 'environment' }, audio: false })
      .then((stream) => {
        this.stream = stream;
        // O <video> só existe depois do primeiro ciclo de detecção de mudanças.
        setTimeout(() => this.start(detector));
      })
      .catch(() => this.error.set('Não foi possível acessar a câmera. Verifique a permissão do navegador.'));
  }

  ngOnDestroy(): void {
    this.stop();
  }

  private start(detector: BarcodeDetectorLike): void {
    const video = this.videoRef?.nativeElement;
    if (!video || !this.stream) {
      return;
    }
    video.srcObject = this.stream;
    void video.play();

    this.timer = setInterval(() => {
      if (this.done || video.readyState < 2) {
        return;
      }
      detector
        .detect(video)
        .then((codes) => {
          const value = codes.find((code) => !!code.rawValue)?.rawValue;
          if (value && !this.done) {
            this.done = true;
            this.stop();
            this.scanned.emit(value.trim());
          }
        })
        .catch(() => undefined);
    }, 250);
  }

  private stop(): void {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = null;
  }
}

interface BarcodeDetectorLike {
  detect(source: HTMLVideoElement): Promise<{ rawValue: string }[]>;
}
