---
title: Modal 对话框
group:
  title: 反馈
  order: 9
---

## Grid 珊格

Demo:

```tsx
import React, { useState } from 'react';
import { QuiModal, QuiButton } from 'qiji';

const App: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <QuiButton type="primary" onClick={showModal}>
        Open Modal
      </QuiButton>
      <QuiModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </QuiModal>
    </>
  );
};
export default App;
```

More skills for writing demo: https://d.umijs.org/guide/basic#write-component-demo
