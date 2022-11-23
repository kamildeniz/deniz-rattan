import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../modals/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  path=" http://localhost:3000/categories";
  constructor(private http:HttpClient) { }

  
  getCategories(){
    
    return this.http.get<Category[]>(this.path)}
}

