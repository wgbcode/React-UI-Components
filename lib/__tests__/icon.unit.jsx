import * as renderer from "react-test-renderer";
import Icon from "../icon/icon";
import * as React from "react";
import { mount } from "enzyme";

describe("Icon 组件", () => {
  it("渲染成功", () => {
    // 将 React 组件渲染成 JS 对象，再变成字符串。
    const json = renderer.create(<Icon name="testIcon" />).toJSON();
    // 断言 json 字符串和 snap 文件中的字符串一致
    expect(json).toMatchSnapshot();
  });
  it("onClick", () => {
    const fn = jest.fn();
    const component = mount(<Icon name="testIcon" onClick={fn} />);
    component.find("svg").simulate("click");
    expect(fn).toBeCalled();
  });
});
