import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './';

describe('Presentational Components', () => {
  describe('Avatar', () => {
    it('should renders without crashing', () => {
      const div = document.createElement('div');      
      ReactDOM.render(<Avatar name={'Carlos Lenon'} photoUrl={''} profEmail={''} codeEmail={''} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
  });

  describe('Props', () => {
    it('name, photoUrl, profEmail and codeEmail shoul be required', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Avatar name={'Carlos Lenon'} photoUrl={''} profEmail={''} codeEmail={''} />, div);
      ReactDOM.unmountComponentAtNode(div);
    });    
    
    it('name, photoUrl, profEmail and codeEmail shoul be a string type', () => {        
      const component = <Avatar name={'Carlos Lenon'} photoUrl={''} profEmail={''} codeEmail={''} />;
      expect(typeof component.props.name).toBe('string');
      expect(typeof component.props.photoUrl).toBe('string');
      expect(typeof component.props.profEmail).toBe('string');      
    });    
  });
});