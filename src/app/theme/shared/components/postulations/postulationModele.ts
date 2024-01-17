export class Postulation {  
    datePostulation!: string;
    statut!:string;
    etudiant!:EtudiantModel ;
    stage!:StageModel      
}

export class EtudiantModel{
    email!:string;
}

export class StageModel{
       titreStage!:string
}