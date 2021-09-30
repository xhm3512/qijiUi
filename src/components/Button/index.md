---
title: Button 按钮
group:
  title: 通用
---

## default

Demo:

```tsx
import React from 'react';
import { Button } from 'dumi-oni';

export default () => <Button onClick={() => alert('onClick')}>default</Button>;
```

## primary

Demo:

```tsx
import React from 'react';
import { Button } from 'dumi-oni';

export default () => <Button type="primary">primary</Button>;
```

## secondary

Demo:

```tsx
import React from 'react';
import { Button } from 'dumi-oni';

export default () => <Button type="secondary">secondary</Button>;
```

## disabled

Demo:

```tsx
import React from 'react';
import { Button } from 'dumi-oni';

export default () => <Button disabled>disabled</Button>;
```
