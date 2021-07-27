import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchmoviesService } from '../services/searchmovies.service';
import { FormValidators } from './form-validators';

@Component({
  selector: 'app-searchform',
  templateUrl: './searchform.component.html',
  styleUrls: ['./searchform.component.css']
})
export class SearchformComponent implements OnInit {
  searchForm : FormGroup;
  title : FormControl;
  year: FormControl;
  results:any;
  errors:string;

  constructor(private fb:FormBuilder,
    private searchMovie: SearchmoviesService) { }

  ngOnInit() {
    let titlePattern = '[ a-zA-Z0-9,\.]+';
    let yearPattern = '[0-9]{4}';
    this.title = this.fb.control(
      '',[Validators.required,Validators.maxLength(30),Validators.pattern(titlePattern)]
    );
    this.year = this.fb.control(
      '2018',[Validators.pattern(yearPattern),FormValidators.integerBetween(1900,2022)]
    );
    this.searchForm= this.fb.group({
      title:this.title,
      year:this.year
    });
  }

  startSearch(){
    let title = this.title.valid? this.title.value:null;
    let year = this.year.valid? this.year.value:null;
    let that=this;
    let action = (data:Object)=> {
      if(data['Error']){
        that.errors = data['Errors'];
        that.results='';
      }
      else{
        that.errors='';
        that.results=data;
      }
    }
    if(title)
    this.searchMovie.search(action,title,year);
    else
    this.errors = 'Titre non obligatoire !';
  }
}
