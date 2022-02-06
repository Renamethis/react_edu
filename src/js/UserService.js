import axios from 'axios';
import  React, { Component } from  'react';

const API_URL = 'http://localhost:8000';

export default class UsersService{
	
	constructor(){}
	
	
	getUsers() {
		const url = `${API_URL}/api/users/`;
		return axios.get(url).then(response => response.data);
	}  
	getUserByURL(link){
		const url = `${API_URL}${link}`;
		return axios.get(url).then(response => response.data);
	}
	getUser(pk) {
		const url = `${API_URL}/api/users/${pk}`;
		return axios.get(url).then(response => response.data);
	}
	deleteUser(customer){
		const url = `${API_URL}/api/users/${user.pk}`;
		return axios.delete(url);
	}
	createUser(customer){
		const url = `${API_URL}/api/users/`;
		return axios.post(url,user);
	}
	updateUser(customer){
		const url = `${API_URL}/api/users/${user.pk}`;
		return axios.put(url,customer);
	}
}
