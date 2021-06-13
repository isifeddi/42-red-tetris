import Display from "./Display";
import renderer from "react-test-renderer";
test("Display render test ", () => {
  const tree = renderer.create(<Display />).toJSON();
  expect(tree).toMatchSnapshot();
});
