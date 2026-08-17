import { Injectable } from '@angular/core';

// Toca um sinal sonoro curto (dois tons) para alertar sobre um pedido/serviço novo, sem depender
// de nenhum arquivo de áudio externo — sintetizado na hora via Web Audio API (osciladores simples).
// Navegadores bloqueiam áudio antes da primeira interação do usuário com a página; como chegar até
// a home já exige ter clicado em algo (login, seleção de empresa), o contexto normalmente já está
// liberado — o resume() aqui é só uma tentativa extra, sem exigir nenhum botão "ativar som". Se o
// áudio continuar bloqueado ou o navegador não suportar Web Audio, falha em silêncio: a notificação
// visual (toast) continua valendo de qualquer forma.
@Injectable({ providedIn: 'root' })
export class NotificationSoundService {
  private audioContext?: AudioContext;

  playChime(): void {
    try {
      const context = this.getAudioContext();
      if (context.state === 'suspended') {
        void context.resume();
      }
      this.playTone(context, 880, context.currentTime, 0.14);
      this.playTone(context, 1175, context.currentTime + 0.15, 0.18);
    } catch {
      // Sem suporte a Web Audio ou áudio bloqueado pelo navegador — segue sem som.
    }
  }

  private getAudioContext(): AudioContext {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }
    return this.audioContext;
  }

  private playTone(context: AudioContext, frequency: number, startTime: number, duration: number): void {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(frequency, startTime);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(0.2, startTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + duration);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(startTime);
    oscillator.stop(startTime + duration);
  }
}