import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../modals/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path=" /categories";
  constructor(private http:HttpClient) { }
//'../../../../assets/data/categries.json'
  
  getCategories(){
    
    return this.http.get<Category[]>(this.path)}
}

