# Using Empty Screen

```js
// import EmptyScreenComponent component
@Component({
  standalone: true,
  imports: [
    EmptyScreenComponent,
  ],
  selector: 'ga-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
```

```html
// default
<ga-empty-screen
  class="empty-sm"
  [width]="100"
  [height]="100"
  title="{{ 'NO_SEARCH_RESULTS_FOUND' | translate }}"
  desc="{{ 'DESC_SEARCH_FIELD' | translate }}"
  imgName="field.png"
>
</ga-empty-screen>

// with buttons
<ga-empty-screen
  class="empty-lg"
  [width]="170"
  [height]="170"
  title="{{ 'TITLE' }}"
  desc="{{ 'DESC' }}"
  imgName="experiments.png"
>
  <div class="action-buttons">
    <button class="btn btn-primary btn_lg">
      <i class="si-add-plus"></i>
      {{ 'experiments_add_btn' }}
    </button>
  </div>
</ga-empty-screen>
```
