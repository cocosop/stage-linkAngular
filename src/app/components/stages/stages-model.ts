export class StagesModel {
    idStage!: number;
    titreStage!: string;
    entreprise!:EntrepriseModel;
    localisation!: string;
    description!: string;
    dateDebut!: string;
    dateFin!: string;
    
    
}

export class EntrepriseModel{
    email!:string;
}