import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'ui-read-more',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadMoreComponent implements OnInit {
  @Input() content: any;
  @Input() limit = 250;
  @Input() completeWords = true;
  @Input() onlyReadMore = false;
  @Output() seeAllClicked = new EventEmitter();

  isContentToggled = false;
  nonEditedContent = '';

  ngOnInit() {
    this.nonEditedContent = this.content;

    if (this.content.length > this.limit) {
      this.content = this.formatContent(this.content);
    }
  }

  onReadMoreClick(event: MouseEvent) {
    this.seeAllClicked.emit();
    event.preventDefault();
  }

  toggleContent(event: any) {
    event.preventDefault();
    this.isContentToggled = !this.isContentToggled;

    this.content = this.isContentToggled
      ? this.nonEditedContent
      : this.formatContent(this.content);
  }

  formatContent(content: string) {
    const substring = content.substring(0, this.limit);

    if (this.completeWords) {
      this.limit = substring.lastIndexOf(' ');
    }
    return `${substring}...`;
  }
}
