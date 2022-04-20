import { Component, OnInit } from '@angular/core';
import { GsearchService } from '../service/gsearch.service';
import { user } from '../user';

@Component({
  selector: 'app-gitsearch',
  templateUrl: './gitsearch.component.html',
  styleUrls: ['./gitsearch.component.css']
})
export class GitsearchComponent implements OnInit {
  currentUser!:user;

  constructor(private _gsearchService:GsearchService) { }

  ngOnInit(): void {
  }
  findUser(ghubname: string){
    if (ghubname == "") {
      alert("Enter name")
      
    }
    else{
      this._gsearchService.findUser(ghubname).then(
        () => {
          this.currentUser = this._gsearchService.user;
        },
        () => {
          alert('Github user not found');
        }
      );
    

    }
    
  }

}
