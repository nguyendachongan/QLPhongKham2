import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: []
})
export class ModalComponent implements OnInit {

  constructor(public modal: NgbModal) { }

  ngOnInit() {
  }
  open(content) {
    this.modal.open(content, { size: 'lg' });
  }
}
