import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { ProfilService } from '../_services/profil.service';
import { AuthService } from '../../auth/_services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

  user: User;
  isLoading: Boolean = false;
  
    constructor(
      private profilService: ProfilService,
      
    ) { }
  
    ngOnInit() {
      this.getUser();
    }
  
    getUser(): void{
      this.isLoading = true;
      this.profilService.getUser().subscribe(
        user =>{
          this.isLoading = false;
          this.user = user['data'];
        }
        );
    }
  
    updateUser(user){
      this.isLoading = true;
      this.profilService.updateUser(user.value).subscribe(
        response =>{
          this.isLoading = false;
          this.user = response['data'];
        }
      );
    }
}
