import { Injectable } from '@angular/core';

//import { Observable } from 'rxjs/Rx'; // RxJS 5 Syntax

import { Observable, of } from 'rxjs';    // RxJS 6 Syntax

import { Note } from '../models/note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private id_counter = 0;
  private importantNotes = [
    {
      id: 100, title: "Super duper important title", body: "Super duper important BOOOODYYY"
}];
  private notes: Note[] = [
    {
      id: 1, title: "Buy movie tickets",
      body: "Latest MI movie looks promising"
    },
    {
      id: 2, title: "Buy groceries",
      body: "Arborio Rice, Saffron, Vegetable stock, Onions, Butter"},
    {
      id: 3, title: "Invite guests for dinner", body: "Vera and Alex"
    },

  ]

  constructor() { }

  public load(): Observable<Note[]> {
    return of(this.notes);
  }

  public loadImportantNotes(): Observable<Note[]> {
      return of (this.importantNotes);
  }

  public add(note: Note) {
    note.id = ++this.id_counter;
    this.notes.push(note);
  }

  public addNoteToImportant(note: Note) {
    this.importantNotes.push(note);
  }

  public addNoteToNotImportant(note: Note) {
    this.notes.push(note);
  }


  public get(id: string): Observable<Note> {
    if (id === 'new') {
      return of(new Note());
    } else {
      // Get the note with required id from the data source
      // this.persons =  this.personService.getPersons().find(x => x.id == this.personId);
       return of(this.notes.find(note => id === note.id.toString()));
      }

    }
  deleteFromArrayOfNOTImportantNotes(delname: Note) {
    const index: number = this.notes.indexOf(delname);
    if (index !== -1) {
      this.notes.splice(index, 1);
      console.log(delname.id + ' will be deleted');

    }
  }

  // public  deleteNoteOnService(idToDelete) {
  //     this.deleteByIdFromImportant(idToDelete);
  // }
    public update(note: Note) {
      console.log('before' + this.notes);
      for ( let noteitter of this.notes) {
        if (noteitter.id === note.id) {
          this.deleteFromArrayOfNOTImportantNotes(noteitter);
        }
        console.log(noteitter.id);
      }
      console.log('after' + this.notes);

    }

  // private deleteById(idToDelete: any) {
  //   for (const notevar of this.notes) {
  //     if (notevar.id === idToDelete) {
  //       this.deleteFromArrayOfNOTImportantNotes(notevar);
  //     }
  //   }
  // }

  moveToImportant(note: Note) {
    // this.deleteById(note.id, );
    this.deleteById(note.id, false);
    this.addNoteToImportant(note);
  }


  moveToNOTImportant(note: Note) {
    this.deleteById(note.id, true);
    this.addNoteToNotImportant(note);

  }
  public deleteById(idToDelete: number, isImportant: Boolean) {
    for (const notevar of this.importantNotes) {
      if (notevar.id === idToDelete) {
        if (isImportant) {
          this.deleteFromArrayImportantNotes(notevar);
        } else {
          this.deleteFromArrayOfNOTImportantNotes(notevar);
        }
      }
    }
  }
  deleteFromArrayImportantNotes(delname: Note) {
    const index: number = this.importantNotes.indexOf(delname);
    if (index !== -1) {
      this.importantNotes.splice(index, 1);
      console.log(delname.id + ' will be deleted');

    }
  }
}
