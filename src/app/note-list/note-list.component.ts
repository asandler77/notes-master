import { Component, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {

  notes: Note[] = [];
  note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.load().subscribe(result => {
      console.log(result);
      this.notes = result;
    });
  }

  deleteTheNote(note) {
    this.noteService.deleteById(note, false);
  }

  moveToImportantList(note: Note) {
    this.noteService.moveToImportant(note);
  }
}
