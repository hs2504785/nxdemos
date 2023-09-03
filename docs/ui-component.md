# Reusable UI Components

## Read More

```html
<app-read-more
  [content]="chunk.chunk_text"
  [limit]="210"
  [completeWords]="true"
>
</app-read-more>
```

## TextField

```html
// html
<div class="mb-3" formGroupName="appConfig">
  <label for="baseURL" class="form-label">Base URL</label>
  <input
    type="text"
    class="form-control"
    [class.is-invalid]="isControlInvalidAndDirty('appConfig.baseURL')"
    id="baseURL"
    placeholder="https://{tenant}.yourorganization.com"
    formControlName="baseURL"
  />

  <div
    class="invalid-feedback"
    *ngIf="isControlInvalidAndDirty('appConfig.baseURL')"
  >
    Subdomain URL for Basic Authorization is required.
  </div>
</div>

// or with component
<div class="mb-3" formGroupName="appConfig">
  <ui-textfield
    [control]="parent.get('appConfig.baseURL')"
    controlName="baseURL"
    label="Base URL"
    placeholder="https://{tenant}.yourorganization.com"
    errorMessage="Subdomain URL for Basic Authorization is required."
  ></ui-textfield>
</div>
```

## Select

```html
<label for="contentType" class="form-label">Token URL Content Type</label>
<select
  class="form-select is-invalid"
  aria-label="Select authorizationType"
  id="contentType"
  formControlName="contentType"
>
  <option selected>Select method</option>
  <option [value]="contentType.value" *ngFor="let contentType of contentTypes">
    {{ contentType.name }}
  </option>
</select>

<div class="invalid-feedback">Token URL Content Type is required.</div>

// with component
<ui-select
  [control]="parent.get('contentType')"
  controlName="contentType"
  label="Token URL Content Type"
  defaultOptionText="Select content type"
  [options]="contentTypes"
  errorMessage="Token URL Content Type is required."
></ui-select>
```
