import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  register() {
    const inputValue = this.form.value;
    this.authService.register(inputValue.email, inputValue.password)
      .subscribe(
        success => this.router.navigateByUrl(`/home`),
        error => alert(error)
      )
  }
}