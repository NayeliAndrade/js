// Extends 

interface IEntityDB {
    id: number;
    created_at: string;
    deleted_at: string | null;
    updated_at: string;
}

interface IUser extends IEntityDB {
    name: string;
    last_name: string;
    age: number;
    phone: string;
    password: string;
    email: string;
    rol: string;
    country: string;
}

interface ICustomer extends IEntityDB {
    name: string;
    last_name: string;
    age: number;
    phone: string;
    password: string;
    email: string;
    rol: string;
    country: string;
    customerKey: number;
}

const user: IUser = {
    id: 0,
    created_at: '12',
    deleted_at: null,
    updated_at: '10-10-2022',
    name: '',
    last_name: '',
    age: 14,
    phone: '',
    password: '',
    email: '',
    rol: '',
    country: '',
}

// Omit
type IEmployee = Omit<ICustomer, 'customerKey' | 'rol'>


// type => simple, dinamico
interface OptionsRolI {
    roles: 'customer' | 'boss';
}

type OptionRoles = 'customer' | 'boss'
const myRol: OptionRoles = 'customer'

// Documentation

/**
 * @augments {id: number}
 * @augments {name: string}
 * @augments {last_name: string}
 */
export function getUser(id: number): number {
    return id;
}