import { OverlayRef } from '@angular/cdk/overlay';

export class TablePreviewRef {
  constructor(private overlayRef: OverlayRef) {}

  close(): void {
    this.overlayRef.dispose();
  }
}
