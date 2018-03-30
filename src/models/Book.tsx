interface IndustryIdentifier {
    type: string;
    identifier: string;
}
  
interface ReadingModes {
    text: boolean;
    image: boolean;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

interface PanelizationSummary { 
    containsEpubBubbles: boolean; 
    containsImageBubbles: boolean; 
}

export default interface Book {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    industryIdentifiers: IndustryIdentifier[];
    panelizationSummary?: PanelizationSummary;
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    categories: string[];
    averageRating?: number;
    ratingsCount?: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
    id: string;
}