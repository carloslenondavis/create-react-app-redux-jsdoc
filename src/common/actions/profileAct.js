/**
 * @name Profile Action
 * @memberof module:common/actions
 * @type {ReduxAction}
 * @return {Object} Action schema
*/
// #region Actions
export const SHOW_PROFILE_INFO = 'SHOW_PROFILE_INFO';
// #endregion

// #region Actions Creator
/**
   * @function
   * @name showProfileInfo
   * @memberof module:common/actions
   * @description show profile info
   * @param {Boolean} showProfileInfo   - show profile info
   * @param {String} info   - profile info
   * @return {OBJECT} Action context
   */
export const showProfileInfo = (showProfileInfo, info) => ({ 
    type: SHOW_PROFILE_INFO,    
    showProfileInfo,
    info
});
// #endregion