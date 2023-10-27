
import {
    Component,
    OnInit,
    OnDestroy,
    Renderer2,
    HostBinding
} from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AbstractControl, FormBuilder, Validators } from "@angular/forms";
import { JwtAuthService } from '@services/Auth/JWTAuthService/jwt-auth-service.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {
    @HostBinding('class') class = 'login-box';

    ngOnInit(): void {
        this.renderer.addClass(
            document.querySelector('app-root'),
            'login-page'
        );

    }

    constructor(
        private http: HttpClient,
        private formBuilder: FormBuilder,
        public jwtAuthService: JwtAuthService,
        private toastr: ToastrService,
        private router: Router,
        private renderer: Renderer2,
    ) { }

    loginForm = this.formBuilder.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
    })


    onSubmit() {
        if (this.loginForm.valid) {
            let formData = {
                username: this.loginForm.get('username')?.value,
                password: this.loginForm.get('password')?.value,
            };
            const apiUrl = 'http://127.0.0.1:8000/api/auth/login';
            this.http.post(apiUrl, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            }).subscribe(
                (response: any) => {
                    const token = response.jwt;
                    console.log('Login successful:', token);
                    this.jwtAuthService.setToken(token)
                    this.router.navigateByUrl('/');
                    location.reload();

                    // Handle successful login (e.g., redirect to another page)
                },
                (error) => {
                    console.error('Login failed:', error);
                    // Handle login error (e.g., display error message)
                }
            );
        }
        if (this.loginForm.invalid) {
            console.log("Login Form Invalid")
        }
    }

    get controls(): { [p: string]: AbstractControl } {
        return this.loginForm.controls;
    }
    ngOnDestroy() {
        this.renderer.removeClass(
            document.querySelector('app-root'),
            'login-page'
        );
    }
}