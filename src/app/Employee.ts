export class Employee {
    Id :number =0;
    Nom :string ='' ;
    Prenom :string ='';
    DateNaissance :string = '' ;
    Cin : number = 0;
    Ncnss :number = 0 ;
    DateEmbauche : string = '' ;
    Salaire : number = 0;
    Regime : string = '';
    Fichier : string = '' ;
    Commentaire : string = '';


    constructor(Id:number ,Nom: string,Prenom:string,DateNaissance:string,Cin:number,Ncnss:number,DateEmbauche:string,Salaire:number,Regime:string,Fichier:string,Commentaire:string) {
        this.Id = Id; 
        this.Nom = Nom;
        this.Prenom = Prenom;
        this.DateNaissance = DateNaissance;
        this.Cin = Cin;
        this.Ncnss = Ncnss;
        this.DateEmbauche = DateEmbauche;
        this.Salaire = Salaire;
        this.Regime = Regime;
        this.Fichier = Fichier;
        this.Commentaire = Commentaire;
    }
}