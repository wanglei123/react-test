/*
 * @Author       : wanglei
 * @Date         : 2022-07-06 09:44:58
 * @LastEditors  : wanglei
 * @LastEditTime : 2022-07-06 11:00:43
 * @FilePath     : /react-test/src/components/TsComponent.tsx
 * @description  : 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { ReactNode } from 'react';

export interface HeadingProps {
  title: string;
}
export function Heading({ title }: HeadingProps) {
  return <h3>{title}</h3>;
}

// 直接定义函数的类型写法
// 注意函数的返回值类型是JSX.Element 不能写ReactNode, 因为ReactNode的范围太大，会报错
export type ListItemType = <ListItem>({
  items,
  render,
}: {
  items: ListItem[];
  render: (item: ListItem) => ReactNode;
}) => JSX.Element;

export const List: ListItemType = ({ items, render }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

// 函数参数中有泛型的写法
export function List2<ListItem>({ items, render }: {items: ListItem[], render: (item: ListItem) => ReactNode}){
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};


function TestComponent() {
  return (
    <>
      <Heading title="hello" />
      <List items={['a', 'b', 'c']} render={(str) => <strong>{str}</strong>} />
      <List2 items={['e', 'f', 'g']} render={(str) => <strong>{str}</strong>} />
    </>
  );
}

export default TestComponent;
