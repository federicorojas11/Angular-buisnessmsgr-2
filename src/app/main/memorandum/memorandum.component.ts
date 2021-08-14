import { MemorandumService } from './memorandum.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memorandum',
  templateUrl: './memorandum.component.html',
  styleUrls: ['./memorandum.component.scss'],
})
export class MemorandumComponent implements OnInit {
  msjRecibidos = 0;
  msjEnviados = 0;
  Recibidos: any;
  mensajes = [
    {
      id: 1,
      titulo: 'Test mensaje 1',
      mensaje:
        'Magna dolore ipsum sit occaecat labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'Irure amet',
      time: new Date(),
    },
    {
      id: 2,
      titulo: 'Test Mensaje 2',
      mensaje:
        'Ma sit labore ex elit nulla culpa ad exercitation reprehenderit.',
      remitente: 'irure amet',
      time: new Date(),
    },
  ];
  constructor(private _memorandumService: MemorandumService) {}

  ngOnInit(): void {
    // this.msjRecibidos = this._memorandumService.getRecibidos().length;
    this.msjRecibidos = 16;
    // this.msjEnviados = this._memorandumService.getEnviados().length;
    this.msjEnviados = 10;
    // this.Recibidos = this._memorandumService.getRecibidos();
    this.Recibidos = 5;

    /* this._memorandumService.getMessagesDev().subscribe((data) => {
      console.log(data);
    }); */
  }
}
