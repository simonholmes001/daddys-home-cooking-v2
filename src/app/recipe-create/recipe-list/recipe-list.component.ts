import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes = [
    {recipeName: 'Soup', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'curry', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
    {recipeName: 'chips', difficulty: '2 / 5', prepTime: '15 minutes', cookingTime: '1 hour', ingredrients: 'vegetables', instructions: 'Boil yer veggies', tags:'fine ta'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
