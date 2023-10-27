import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtAuthService } from '@services/Auth/JWTAuthService/jwt-auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent {
  constructor(
    private http: HttpClient,
    public jwtAuthService: JwtAuthService,
    private toastr: ToastrService,
    private router: Router,
  ) { }
  ngOnInit(): void {
    const apiUrl = 'http://127.0.0.1:8000/api/auth/logout';
    this.http.post(apiUrl, {}, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).subscribe(
      (response: any) => {
        console.log('Logout successful');
        this.jwtAuthService.removeToken()
        this.router.navigateByUrl('/login');
        location.reload();

        // Handle successful login (e.g., redirect to another page)
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error (e.g., display error message)
      }
    );
  }
}
