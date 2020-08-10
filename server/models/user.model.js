export default class User {

    id;
    name;
    lastName;
    email;
    password;

    conn;
            
    constructor(id, name, lastName, email, password, conn) {
        this.id = id;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.conn = conn.getInstance();
    }

    getUser() {
        return {
            id: this.id,
            name: this.name,
            lastName: this.lastName,
            email: this.email
        }
    }

}