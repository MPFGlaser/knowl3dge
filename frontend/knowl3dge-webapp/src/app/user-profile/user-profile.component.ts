import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  editing: boolean = false;
  editingButtonText = 'Edit Profile';

  constructor() {}

  ngOnInit(): void {}

  editProfile() {
    this.editing = !this.editing;
    if (this.editing) {
      this.editingButtonText = 'Save Profile';
    } else {
      this.editingButtonText = 'Edit Profile';
    }
    console.log('Editing mode:' + this.editing);
  }
}
