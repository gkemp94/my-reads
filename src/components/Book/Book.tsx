import * as React from 'react';
import './Book.css';
// import * as BooksApi from '../../BooksAPI';
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

interface BookProps {
    info: BookType;
}

class Book extends React.Component<BookProps> {
  render() {
    let { title, authors, imageLinks } = this.props.info;
    return (
      <div className="myreads-book">
        <div className="container">
            <img 
                className="myreads-image"
                src={imageLinks.thumbnail}
            />
            <div className="myreads-info">
                <div className="myreads-title">
                    {title}
                </div>
                <div className="myreads-authors">
                {authors && authors.length && authors.map((author) => (
                    <p key={author}> {author} </p>
                ))}
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Book;
