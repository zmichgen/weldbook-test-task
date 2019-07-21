import { Component } from '@angular/core';
import { OverlayService } from 'src/app/services/overlay.service';
import { TablePreviewRef } from 'src/app/table-preview-ref';

@Component({
  selector: 'app-start-page',
  templateUrl: './start-page.component.html',
  styleUrls: ['./start-page.component.scss'],
})
export class StartPageComponent {
  buttonText = 'Показать таблицу';

  constructor(private overlayService: OverlayService) { }

  showTable() {
    const dialogRef: TablePreviewRef = this.overlayService.open();
  }
}
