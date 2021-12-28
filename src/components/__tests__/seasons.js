import SeasonsComponent from "../seasons"
import React from "react"
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


Enzyme.configure({ adapter: new Adapter() });

describe('<SeasonsComponent />', () => {
  let wrapper;
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, 'useState')
  useStateSpy.mockImplementation((init) => [init, setState]);
  const data = {
    seasons: [{name: 'first01', number: 1}, {name: 'second02', number: 2}]
  }

  beforeEach(() => {
    wrapper = Enzyme.shallow(<SeasonsComponent seasons = { data.seasons } />);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });


it('renders correctly', () => {  
  //expect(wrapper.exists('.season-picker')).toEqual(true);
  console.log({wrapper});
  expect(wrapper).toMatchSnapshot();
});
  
})
