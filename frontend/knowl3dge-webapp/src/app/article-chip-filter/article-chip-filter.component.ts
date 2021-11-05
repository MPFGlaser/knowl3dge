import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Tag } from '../interfaces/tag';
import { TagService } from '../services/tag.service';
import { FormControl } from '@angular/forms';
import { MatChipSelectionChange } from '@angular/material/chips';


@Component({
  selector: 'app-article-chip-filter',
  templateUrl: './article-chip-filter.component.html',
  styleUrls: ['./article-chip-filter.component.scss'],
})
export class ArticleChipFilterComponent implements OnInit {
  // arrays for tags & related
  tags?: Tag[];

  // values for chip list
  selectable = true;
  removable = true;
  multiple = true;
  tagCtrl = new FormControl();
  selectedTags: Tag[] = [];

  @Output() selectedTagsChangedEvent = new EventEmitter<Tag[]>();

  constructor(private tagService: TagService) {}

  ngOnInit(): void {
    this.getTags();
  }

  // Fires when a tag is (de)selected. Adds or removes it from the selectedTags array accordingly
  selectionChange(event: MatChipSelectionChange, tag: Tag): void {
    if (event.selected) {
      this.add(tag);
    } else {
      this.remove(tag);
    }

    // This should have a debounce!
    this.selectedTagsChangedEvent.emit(this.selectedTags);
  }

  // Adds a tag to the end of the selectedTags array
  add(clickedTag: Tag) {
    this.selectedTags.push(clickedTag);
  }

  // Removes a tag from the selectedTags array
  remove(clickedTag: Tag) {
    const index = this.selectedTags.indexOf(clickedTag);

    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    }
  }

  // Gets all tags
  async getTags(): Promise<void> {
    const tags = await this.tagService.getTags().toPromise();
    this.tags = tags;
  }
}
