
export interface Country {
    name?: string;
    code?: string;
}

export interface Representative {
    name?: string;
    image?: string;
}

export interface Documment {
    id?: number;
    clientName?: string;
    documentDate?: string | Date;
    documentStatus?: string;
}