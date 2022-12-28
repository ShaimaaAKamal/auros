import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  private url = "https://mailthis.to/ShaimaaKamal";
  constructor(private http: HttpClient){}

    SendEmail(input: FormGroup):Observable<any>{
      return this.http.post(this.url, input,{responseType:'text'});
}

}
