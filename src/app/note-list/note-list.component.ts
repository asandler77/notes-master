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

  deleteTheNote(id) {
    console.log(id);
    this.noteService.deleteById(id, false);
  }

  toImportantList(note: Note) {
    this.noteService.moveToImportant(note);
  }
}
