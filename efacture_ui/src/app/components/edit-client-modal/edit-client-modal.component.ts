import { Component, EventEmitter, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedDataService } from '@services/SharedData/shared-data.service'; // Service for shared data between components
import { Header, MessageService } from 'primeng/api';

@Component({
  selector: 'app-edit-client-modal',
  templateUrl: './edit-client-modal.component.html',
  styleUrls: ['./edit-client-modal.component.scss']
})
export class EditClientModalComponent {
  @Output() clients = new EventEmitter<string>();
  @Input() Item_ID;
  @Input() URL ;
  submitted = false;
  closeResult = '';
  ClientForm!: FormGroup;
  constructor(
    private http: HttpClient,
    private fb: FormBuilder,
    private SharedDataService: SharedDataService,
    private messageService: MessageService
  ) { }

  visible: boolean = false;

  resetForm() {
    this.ClientForm = this.fb.group({
      client_name: ['', [Validators.required]],
      client_ICE: ['', [Validators.required]],
      client_city: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.resetForm()

  }

  showDialog() {
    this.visible = true;
    let url = "http://127.0.0.1:8000/api/clients/" + this.Item_ID
    this.http.get(url).subscribe(
      (response: any) => {
        // this.visible = false;
        console.log(response)
      },
      (error) => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error.error) });
      }
    )
  }

  Change() {
    console.log(this.ClientForm.getRawValue())
  }
  // emitEvent(data) {
  //   this.clients.emit(data);
  // }
  onSubmit() {
    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.ClientForm.invalid) {
    //   alert('Form not complete please to check that all required field are filled')
    // }
    // else {
    //   let url = "http://127.0.0.1:8000/api/clients/"+this.Item_ID
    //   this.http.get(url).subscribe(
    //     (response: any) => {
    //       this.visible = false;
    //       this.ClientForm = this.fb.group({
    //         client_name: [response.client_name, [Validators.required]],
    //         client_ICE: [response.client_ICE, [Validators.required]],
    //         client_city: [response.client_city, [Validators.required]]
    //       })
    //       this.resetForm()
    //     },
    //     (error) => {
    //       this.messageService.add({ severity: 'error', summary: 'Error', detail: JSON.stringify(error.error) });
    //     }
    //   )
    // }
  }
}
