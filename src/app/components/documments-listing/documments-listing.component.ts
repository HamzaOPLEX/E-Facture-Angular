import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-documments-listing',
  templateUrl: './documments-listing.component.html',
  styleUrls: ['./documments-listing.component.scss']
})
export class DocummentsListingComponent {
  messages: string[] = ['Message 1', 'Message 2']; // Add your messages here
  tablebody: any[] = [/* Add your data here */]; // Assuming tablebody is an array of objects

  deleteForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.deleteForm = this.fb.group({
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  deleteItem() {
    const password = this.deleteForm.get('password').value;
    // Add logic to handle delete action here
  }
}
