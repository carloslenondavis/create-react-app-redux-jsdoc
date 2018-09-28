/**
 * @file Services/profileSvc.js 
 * @class profileSvc
 * @classdesc This is the class for profile services
 * @since v1.0
 * @author @clenondavis <dev@carloslenon.com>
 */

 import { ProfileAct } from './../common/actions';

 /**
   * @function
   * @name getInfo
   * @memberof profileSvc
   * @description show profile info   
   * @return {OBJECT} Store context
   */
 export const getInfo = () => {
     return dispatch => {
         const infoText = 'Senior Frontend Developer, passionate entrepreneur, former and Javascript lover.';
         dispatch(ProfileAct.showProfileInfo(true, infoText));
     }
 }