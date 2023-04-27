import renderer from 'react-test-renderer';
import { Folio } from "../components";

it('should check for FormHeader props and classes', ()=>{
  const component = renderer.create(
    <Folio />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props).toEqual({ className: 'folio-container md:m-8 m-2 box-border border-2 border-black md:p-8 p-2 rounded' })
  expect(tree.children.length).toEqual(5)
  expect(tree.children[0].children[0].children[0]).toEqual("Future Ready SIP")
  expect(tree.children[0].children[1].children[0]).toEqual("Be Future Ready by starting a SIP today and planning your SWP for future")
})