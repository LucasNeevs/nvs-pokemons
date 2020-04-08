import { expect } from 'chai';
import Moment from 'moment';
import Birthday from './Birthday';

describe('Birthday Tests', (): void => {
  describe('Smoke tests', (): void => {
    it('Should exist Birthday', (): void => {
      expect(Birthday).to.exist;
    });
  });
  describe('Function', (): void => {
    it('Should return the cake icon when method is called with current date value', (): void => {
      const actDate = new Date().toISOString();
      expect(Birthday(Moment(actDate).format('MMMM Do YYYY'))).equal(' 🎂');
    });
    it('Should return undefined when method is called with an oldest date value', (): void => {
      const fixDate = Moment('1975-10-10T12:00:00.428Z').format('MMMM Do YYYY');
      expect(Birthday(fixDate)).equal(undefined);
    });
  });
});