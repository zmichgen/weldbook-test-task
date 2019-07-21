import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

import { TableComponent } from '../components/table/table.component';
import { TablePreviewRef } from '../table-preview-ref';

@Injectable()
export class OverlayService {
  constructor(private overlay: Overlay) {}
  open() {
    const overlayRef = this.overlay.create(this.getOverlayConfig());
    const tablePreviewPortal = new ComponentPortal(TableComponent);
    overlayRef.attach(tablePreviewPortal);
    const dialogRef = new TablePreviewRef(overlayRef);
    overlayRef.backdropClick().subscribe((_) => dialogRef.close());
    return dialogRef;
  }

  private getOverlayConfig(): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: true,
      backdropClass: 'dark-backdrop',
      scrollStrategy: this.overlay.scrollStrategies.reposition(),
      positionStrategy,
    });
    return overlayConfig;
  }
}
