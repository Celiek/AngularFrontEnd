import { Component } from '@angular/core';
import { UserServiceService} from '../user-service.service'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-import-page',
  templateUrl: './import-page.component.html',
  styleUrl: './import-page.component.css',
  standalone: true,
})

export class ImportPageComponent {
  constructor(private userService: UserServiceService, private modalService: NgbModal) {}

  public open(modal: any): void {
    this.modalService.open(modal);
  }


  uploadFile(event: any): void {
    const fileList:FileList = event.target.files;

    if(fileList.length > 0){
      const file: File = fileList[0];

      this.userService.addBatchUsers(file).subscribe(
        (response) => {
          console.log('Plik przesłany pomyślnie', response);
        },
        (error) => {
          console.error('Błąd podczas przesyłania pliku', error);
        }
      )
    };

  }
}
