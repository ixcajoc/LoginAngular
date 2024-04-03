export interface UserLogin {
    user: string,
    password: string
}

export interface User {
    id:        number;
    user:      string;
    type_user: TypeUser;
}

export interface TypeUser {
    type_user_id: number;
    type:         string;
    active:       boolean;
    descripction: string;
}

export interface NewUser {
    user:      string;
    password:  string;
    name:      string;
    last_name: string;
    type_user: number;
}

