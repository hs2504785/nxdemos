# Using Toast

```js
constructor(private toastService: ToastService) {}

showStandard() {
  this.toastService.show('I am a standard toast');
}


// standard, timeout 2s default
this.toastService.show('I am a standard toast');

// Success, delay 10s
this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 10000 });

// Error, delay 2s
this.toastService.show(dangerTpl, { classname: 'bg-danger text-light' });

// clear all
this.toastService.clear();
```

## Toast Types

```js
// primary
this.toastService.primary('Toast Primary', {
  iconClass: 'gi-info',
});

// info
this.toastService.info('Toast Primary', {
  iconClass: 'gi-info',
});

// success
this.toastService.success('Toast Info', {
  iconClass: 'gi-info',
});

// error
this.toastService.error('Toast Error', {
  iconClass: 'gi-info',
});

// warning
this.toastService.warning('Toast Warning', {
  iconClass: 'gi-info',
});
```

## Toast with icon URL

Use only one `iconClass` or `iconUrl`

```js
this.toastService.success('Toast Succces', {
  iconUrl: 'assets/icons/check-verified.svg',
});
```

## Toast with different sizes `sm|md|lg|xl|xxl`

size: 'lg' is default, means no size provided it will be `lg`

```js
this.toastService.success('Toast Succces', {
  iconUrl: 'assets/icons/check-verified.svg',
  size: 'sm',
});
```

## Toast with template

```html
// Define template

<ng-template #uploadTpl>
  <h2>My Template</h2>
</ng-template>
```

```js
// in component
@ViewChild('uploadTpl') uploadTpl!: TemplateRef<any>;

this.toastService.success(this.uploadTpl, {
  iconUrl: 'assets/icons/check-verified.svg',
  size: 'sm'
});
```

## Toast all config

```js
export interface ToastInfo {
  header: string;
  className: string;
  delay?: number;
  textOrTpl?: any;
  autohide?: boolean;
  iconUrl?: any;
  iconClass?: any;
  size?: any;
}

// Note: use only one of iconUrl or iconClass
this.toastService.success('Upload Success', {
  header: 'My Header',
  className: 'myClass',
  delay: 12000, // 12sec
  textOrTpl: this.uploadTpl,
  authohide: false, // true is default
  iconUrl: 'assets/icons/check-verified.svg',
  iconClass: 'gi-info'
  size: 'sm'
});
```
