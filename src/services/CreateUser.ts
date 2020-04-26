/**
* Para criar: name, email, password
*/

interface CreateUserData {
	name ?: string;
	email: string;
	password: string;
	techs : Array< string | TechObject>;
}

interface TechObject {
	title: string;
	experience : number;
}


export default function createUser({name = '', email, password} : CreateUserData) {
	const user = {
		name,
		email,
		password
	}

	return user;
}