import { Component, OnInit } from '@angular/core';
import {NoteService} from '../services/note.service';
import {Note} from '../models/note';

@Component({
  selector: 'app-important',
  templateUrl: './important.component.html',
  styleUrls: ['../note-list/note-list.component.css']
})
export class ImportantComponent implements OnInit {

  notes: Note[] = [];
  note: Note;

  constructor(private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.loadImportantNotes().subscribe(result => {
      this.notes = result;
    });
  }

  moveToCommonList(note: Note) {
    this.noteService.moveToNOTImportant(note);

  }
  deleteTheNote(id) {
    this.noteService.deleteById(id, true);
  }

}
