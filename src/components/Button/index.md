---
title: Button 按钮
group:
  title: 通用
  order: 1
---

## default

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';

export default () => <Button onClick={() => alert('onClick')}>default</Button>;
```

## primary

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';

export default () => <Button type="primary">primary</Button>;
```

## secondary

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';

export default () => <Button type="secondary">secondary</Button>;
```

## disabled

Demo:

```tsx
import React from 'react';
import { Button } from 'qiji';

export default () => <Button disabled>disabled</Button>;
```
