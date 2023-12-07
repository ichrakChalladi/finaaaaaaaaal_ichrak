import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../model/Etudiant";
import {Chambre} from "../model/Chambre";
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
}

  usersList:Etudiant[]=[];
  private baseUrl = 'http://localhost:8181/api/etudiants';
  constructor(private http:HttpClient) { }

  getEtudiantList():Observable<Etudiant[]>{
    return this.http.get<Etudiant[]>("http://localhost:8181/api/etudiants/findAllEtudiant");
  }
  getTotalReservationsAffectes() : Observable<number>{
    return this.http.get<number>(this.baseUrl+"totalReservationsAffectes");
  }
  getEtudiantById(id: any): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.baseUrl}/findEtudiantbyId/${id}`);
  }
  removeEtudiant(id:any):Observable<void>{
    return this.http.delete<void>(this.baseUrl+"/deletebyid/"+id,httpOptions
      );
  }
  addEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    const url = `${this.baseUrl}/addEtudiant`;
    return this.http.post<Etudiant>(url, etudiant,httpOptions);
  }
  updateEtudiant(etudiant:Etudiant):Observable<Etudiant>{
    console.log('updateEtudiant',etudiant);
    return this.http.put<Etudiant>(this.baseUrl+"/updateEtudiant",etudiant);
  }

  getChambreByEtudiant(id: number):Observable<Chambre[]> {
    return this.http.get<[Chambre]>(this.baseUrl+"ChambreByEtudiant/"+id);

  }

  getAllChambre():Observable<Chambre[]> {
    return this.http.get<[Chambre]>("http://localhost:8181/api/etudiant/chambre/all");

  }
  
  pdfExport():Observable<Blob>{
    return this.http.get("http://localhost:8181/api/etudiants/export/pdf", {responseType: 'blob'});
  }

  excelExport():Observable<Blob>{
    return this.http.get("http://localhost:8181/api/etudiants/export-to-excel", {responseType: 'blob'});
  }
  
  pagination(nbre : number, page: number) : Observable<Etudiant[]>{
    return this.http.get<[Etudiant]>(this.baseUrl+"pagination/"+nbre+"/"+page);
  }
  
}
