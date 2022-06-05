import classes from "../helper/classes";

describe("classes", () => {
  it("接受 0 个参数", () => {
    const result = classes();
    expect(result).toEqual("");
  });
  it("接受 1 个参数", () => {
    const result = classes("fui-icon");
    expect(result).toEqual("fui-icon");
  });
  it("接受 2 个参数", () => {
    const result = classes("fui-icon", "wechart");
    expect(result).toEqual("fui-icon wechart");
  });
  it("接受 undefined", () => {
    const result = classes("fui-icon", undefined);
    expect(result).toEqual("fui-icon");
  });
  it("接受 null false 中文", () => {
    const result = classes("fui-icon", null, false, "中文");
    expect(result).toEqual("fui-icon 中文");
  });
});
