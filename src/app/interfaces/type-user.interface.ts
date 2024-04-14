// interface User {
//   id: number;
//   user: string;
//   type_user: {
//     type_user_id: number;
//     type: string;
//     active: boolean;
//     description: string;
//   };

// }

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
