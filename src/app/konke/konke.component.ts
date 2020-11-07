import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Konk } from '../konk';
import { KonkeService } from '../konke.service';

@Component({
  selector: 'app-konke',
  templateUrl: './konke.component.html',
  styleUrls: ['./konke.component.css']
})
export class KonkeComponent implements OnInit {

  constructor(private muser:KonkeService,private fb:FormBuilder,private router:Router,private actR:ActivatedRoute) { }
 muntuForm:FormGroup
 submitted=false;
 munt:Konk
 ids:any;

  ngOnInit(): void {
    this.AddMuntu();
    this.getMuntus();
  }
  getMuntus(){
    return this.muser.Read().subscribe(data=>{
      this.munt=data;
    })
  }
  deletePerson(id:number){
    console.log(id);
    this.muser.Delete(id).subscribe((data:Konk)=>{
      this.getMuntus();
    });
  }
  editPerson(person:Konk){
    
    this.ids=this.actR.snapshot['id'];
      const productData:any = new FormData();
      productData.append('id', this.ids);
      productData.append('name', person.name);
      productData.append('surname', person.surname);
      this.muser.Update(productData).subscribe(result=>{
        this.router.navigate(['']);
  })

}
    
  
  get nameValidator(){
    return this.muntuForm.get('name') as FormControl;
  }
  get surnameValidator(){
    return this.muntuForm.get('surname') as FormControl;
  }
  AddMuntu(){
    this.muntuForm=this.fb.group({
      name:['',Validators.required],
      surname:['',Validators.required]
    })
  }
  onSubmit(){
    this.AddPerson(this.muntuForm.value);
    this.editPerson(this.muntuForm.value);
    this.ClearForm();
  }
  AddPerson(person:Konk){
      return this.muser.Create(person).subscribe(data=>{
        console.log(this.muntuForm.value);
      })

  }
  ClearForm(){
    if(this.submitted==true){
      alert(this.muntuForm.value);
    }
    else if(!this.muntuForm.valid){
      alert("uyanya");
    }
    this.muntuForm.reset();
  }
  CreateOrUpdate(currentPerson:Konk){
    if(currentPerson.id===null){
      this.muser.Create(this.muntuForm.value).subscribe(data=>{

      })
    }
    else{
        this.editPerson(currentPerson);
    }
  }

}
