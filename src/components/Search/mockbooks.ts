
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

interface BookType {
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
interface PanelizationSummary { 
  containsEpubBubbles: boolean; 
  containsImageBubbles: boolean; 
}

const books: BookType[] = [
    {
      'title': 'A History of Horror',
      'authors': [
        'Wheeler W. Dixon'
      ],
      'publisher': 'Rutgers University Press',
      'publishedDate': '2010',
      'description': 'Ever since horror leapt from popular fiction to the silver screen in the late 1890s, viewers have experienced fear and pleasure in exquisite combination. A History of Horror, with rare stills from classic films, is the only book to offer a comprehensive survey of this ever-popular film genre. Chronologically examining over fifty horror films from key periods, this one-stop sourcebook unearths the historical origins of legendary characters and explores how the genre fits into the Hollywood studio system and how its enormous success in American and European culture expanded globally over time.',
      'industryIdentifiers': [
        {
          'type': 'ISBN_13',
          'identifier': '9780813547954'
        },
        {
          'type': 'ISBN_10',
          'identifier': '0813547954'
        }
      ],
      'readingModes': {
        'text': true,
        'image': true
      },
      'pageCount': 248,
      'printType': 'BOOK',
      'categories': [
        'Performing Arts'
      ],
      'averageRating': 4,
      'ratingsCount': 1,
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.2.2.0.preview.3',
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=5CtYoSSxomcC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=5CtYoSSxomcC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.com/books?id=5CtYoSSxomcC&printsec=frontcover&dq=horror&hl=&cd=1&source=gbs_api',
      'infoLink': 'http://books.google.com/books?id=5CtYoSSxomcC&dq=horror&hl=&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/A_History_of_Horror.html?hl=&id=5CtYoSSxomcC',
      'id': '5CtYoSSxomcC'
    },
    {
      'title': 'Icons of Horror and the Supernatural',
      'subtitle': 'An Encyclopedia of Our Worst Nightmares',
      'authors': [
        'S. T. Joshi'
      ],
      'publisher': 'Greenwood Publishing Group',
      'publishedDate': '2007',
      'description': 'Offers entries on 24 of the significant archetypes of horror and the supernatural, from the classical epics of Homer to the novels of Stephen King.',
      'industryIdentifiers': [
        {
          'type': 'ISBN_10',
          'identifier': '0313337829'
        },
        {
          'type': 'ISBN_13',
          'identifier': '9780313337826'
        }
      ],
      'readingModes': {
        'text': true,
        'image': true
      },
      'pageCount': 796,
      'printType': 'BOOK',
      'categories': [
        'Horror films'
      ],
      'averageRating': 4,
      'ratingsCount': 1,
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.1.2.0.preview.3',
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=QrT1SlwhfsIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=QrT1SlwhfsIC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.com/books?id=QrT1SlwhfsIC&printsec=frontcover&dq=horror&hl=&cd=2&source=gbs_api',
      'infoLink': 'http://books.google.com/books?id=QrT1SlwhfsIC&dq=horror&hl=&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Icons_of_Horror_and_the_Supernatural.html?hl=&id=QrT1SlwhfsIC',
      'id': 'QrT1SlwhfsIC'
    },
    {
      'title': 'Horror and the Horror Film',
      'authors': [
        'Bruce F. Kawin'
      ],
      'publisher': 'Anthem Press',
      'publishedDate': '2012',
      'description': '"Horror and the Horror Film" is a vivid, compelling, insightful and well-written study of the horror film and its subgenres from 1896 to the present, concentrating on the nature of horror in reality and on film.',
      'industryIdentifiers': [
        {
          'type': 'ISBN_13',
          'identifier': '9780857284495'
        },
        {
          'type': 'ISBN_10',
          'identifier': '0857284495'
        }
      ],
      'readingModes': {
        'text': false,
        'image': true
      },
      'pageCount': 252,
      'printType': 'BOOK',
      'categories': [
        'Performing Arts'
      ],
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': 'preview-1.0.0',
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=r88NdErN1pkC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=r88NdErN1pkC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.com/books?id=r88NdErN1pkC&printsec=frontcover&dq=horror&hl=&cd=3&source=gbs_api',
      'infoLink': 'http://books.google.com/books?id=r88NdErN1pkC&dq=horror&hl=&source=gbs_api',
      'canonicalVolumeLink': 'https://books.google.com/books/about/Horror_and_the_Horror_Film.html?hl=&id=r88NdErN1pkC',
      'id': 'r88NdErN1pkC'
    },
    {
      'title': 'Horror to the Extreme',
      'subtitle': 'Changing Boundaries in Asian Cinema',
      'authors': [
        'Jinhee Choi',
        'Mitsuyo Wada-Marciano'
      ],
      'publisher': 'Hong Kong University Press',
      'publishedDate': '2009-06-01',
      'description': 'This book compares production and consumption of Asian horror cinemas in different national contexts and their multidirectional dialogues with Hollywood and neighboring Asian cultures. Individual essays highlight common themes including technology, digital media, adolescent audience sensibilities, transnational co-productions, pan-Asian marketing techniques, and variations on good vs. evil evident in many Asian horror films. Contributors include Kevin Heffernan, Adam Knee, Chi-Yun Shin, Chika Kinoshita, Robert Cagle, Emilie Yeh Yueh-yu, Neda Ng Hei-tung, Hyun-suk Seo, Kyung Hyun Kim, and Robert Hyland.',
      'industryIdentifiers': [
        {
          'type': 'ISBN_13',
          'identifier': '9789622099739'
        },
        {
          'type': 'ISBN_10',
          'identifier': '9622099734'
        }
      ],
      'readingModes': {
        'text': true,
        'image': true
      },
      'pageCount': 284,
      'printType': 'BOOK',
      'categories': [
        'Social Science'
      ],
      'maturityRating': 'NOT_MATURE',
      'allowAnonLogging': false,
      'contentVersion': '0.2.2.0.preview.3',
      'panelizationSummary': {
        'containsEpubBubbles': false,
        'containsImageBubbles': false
      },
      'imageLinks': {
        'smallThumbnail': 'http://books.google.com/books/content?id=ApeLNDLTq10C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        'thumbnail': 'http://books.google.com/books/content?id=ApeLNDLTq10C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'
      },
      'language': 'en',
      'previewLink': 'http://books.google.com/books?id=ApeLNDLTq10C&printsec=frontcover&dq=horror&hl=&cd=4&source=gbs_api',
      'infoLink': 'https://play.google.com/store/books/details?id=ApeLNDLTq10C&source=gbs_api',
      'canonicalVolumeLink': 'https://market.android.com/details?id=book-ApeLNDLTq10C',
      'id': 'ApeLNDLTq10C'
    }
  ];

export default books;