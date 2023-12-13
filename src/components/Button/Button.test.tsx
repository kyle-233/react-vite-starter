// 引入测试库函数，用来 mocking
import { render, fireEvent } from '@testing-library/react';
// 引入测试 api ，用来编写用例的逻辑
import { describe, it, expect, vi } from 'vitest';

// 引入被测试组件
import { Button } from './Button';

describe('Button', () => {
  // 模拟一个函数
  const handleCallback = vi.fn();

  // 通过 render 来渲染 Button 组件到 jsdom 中
  const button = render(<Button onClick={handleCallback} />);

  // it 用来定义单条用例
  it('button click event executed correctly', () => {
    // 组件被渲染之后，通过 getByRole 查询到组件的 dom 节点
    const element = button.getByRole('button');

    // fireEvent 用来模拟触发 click 点击
    fireEvent.click(element);

    // expect 就是期望，toHaveBeenCalled 是一个断言，表示函数被执行
    expect(handleCallback).toHaveBeenCalled();
  });
});
