export class User {
    constructor(
        public fname: string,
        public lname: string,
        public email: string,
        public password: string,
        public type: string
    ){
        this.fname=fname;
        this.lname=lname;
        this.email=email;
        this.password=password;
        this.type=type;
    }
}