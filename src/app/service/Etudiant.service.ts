import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../model/Etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  baseUrl="http://localhost:8181/api/etudiants"
  constructor(private http:HttpClient) { }
  getEtudiantList():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>(`${this.baseUrl}/findAllE`);
  }
  getEtudiantById(id:any):Observable<any>{
    return this.http.get<any>(this.baseUrl+id);
  }
  removeEtudiant(id:any){
    return this.http.delete(`${this.baseUrl}/deleteEtudiant/${id}`);
  }
  addEtudiant(data:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(`${this.baseUrl}/addEtudiant`,data);
  }
  updateEtudiant(data:any,id:any):Observable<Etudiant>{
    return this.http.put<any>(`${this.baseUrl}/updateEtudiant/${id}`,data);
  }

}
