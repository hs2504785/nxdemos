import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from '@gale/shared/ui/src';
import { SearchService } from '@gale/shared/ui/src/lib/components/search/services/search.service';

@Component({
  selector: 'ui-dropdown-input',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule, SearchComponent],
  templateUrl: './dropdown-input.component.html',
  styleUrls: ['./dropdown-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownInputComponent {
  private searchService = inject(SearchService);

  @Input() data: any;
  @Input() selectedItem: any;
  @Input() searchable = false;
  @Output() itemClicked = new EventEmitter();

  searchTerm = this.searchService.searchTerm;
  filteredData = computed(() =>
    this.data.reduce((acc: any[], item: any) => {
      const searchTerm = this.searchTerm();
      if (searchTerm) {
        if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          const index = item.name
            .toLowerCase()
            .indexOf(searchTerm.toLowerCase());
          const name =
            item.name.slice(0, index) +
            '<strong>' +
            item.name.slice(index, index + searchTerm.length) +
            '</strong>' +
            item.name.slice(index + searchTerm.length);
          acc.push({
            name,
            value: item.value,
          });
        }
      } else {
        acc.push({
          name: item.name,
          value: item.value,
        });
      }
      return acc;
    }, []),
  );
  onItemSelected(item: any) {
    let originalItem = item;

    if (this.searchTerm()) {
      const value = item.name ? item.value : item;
      originalItem = this.data.find((item: any) => item.value === value);
    }

    this.selectedItem = originalItem;
    this.itemClicked.emit(originalItem);
  }
}
