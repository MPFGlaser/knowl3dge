import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  editing: boolean = false;
  editingButtonText = 'Edit Profile';

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
