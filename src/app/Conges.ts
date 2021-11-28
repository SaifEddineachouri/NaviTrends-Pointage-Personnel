export class Conges {
    Id :number =0;
    Nom :string ='' ;
    Prenom :string ='';
    Cin : number = 0;
    Email:string = '';
    DateDebut : string = '';
    DateFin : string = '' ;
    Cause : string = '' ;
    TypeConges :string = '';
    Available : number = 0;
    
    constructor(Id:number ,Nom: string,Prenom:string,Cin:number,Email:string,DateDebut:string,DateFin:string,Cause:string,TypeConges:string,Available:number) {
        this.Id = Id; 
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.Cin = Cin;
        this.Email = Email;
        this.DateDebut = DateDebut;
        this.DateFin =  DateFin;
        this.Cause=Cause;
        this.TypeConges = TypeConges;
        this.Available = Available;

    }
}