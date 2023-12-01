import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent {
  name=new FormControl('',Validators.required);
  surname=new FormControl('');
  cin=new FormControl('');
  ecole=new FormControl('');
  dateNaissance=new FormControl('');
  showForm(){
    console.log(this.name)
  }
  fg=new FormGroup({
    namefg:new FormControl('',[Validators.required, Validators.minLength(3)]),
    surnamefg: new FormControl(),
    cin:new FormControl(''),
    ecole:new FormControl(''),
    dateNaissance:new FormControl(''),

  })
  showFromFG(){
    console.log(this.fg)
  }

  get namefgE(){
    return this.fg.get('namefg')
  }
  constructor(private fb:FormBuilder){

  }
  formb=this.fb.group({
    namefb:['',],
    surnamefb:['',],
    cinfb:[''],
    ecolefb:[''],
    dateNaissancefb:[''],

  })
  onSubmit() {
    console.log('Form Submitted:', this.formb.value);
  }

}
